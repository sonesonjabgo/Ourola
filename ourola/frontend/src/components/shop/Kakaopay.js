import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    // 응답에서 가져올 값들
    next_redirect_pc_url: "",
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "",
      quantity: 1,
      total_amount: "",
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: "",
      fail_url: "",
      cancel_url: "",
    },
  };

  componentDidMount() {
    const { params } = this.state;
    const { allBasket, firstItem, totalPrice, group, deleteAllRequest } =
      this.props;

    if (allBasket && allBasket.length > 0) {
        const itemCount = allBasket.length - 1;
  
        const itemName = itemCount > 0 ? `${firstItem} 외 ${itemCount}건` : firstItem;
  
        this.setState(prevState => ({
            params: {
                ...prevState.params,
                item_name: itemName,
                total_amount: totalPrice,
                approval_url: `http://i9d204.p.ssafy.io/purchase/success?group=${group}`,
                fail_url: `http://i9d204.p.ssafy.io/purchase/failed?group=${group}`,
                cancel_url: `http://i9d204.p.ssafy.io/${group}/shop`,
            }
        }), () => {
            // setState가 완료된 후 axios 요청을 실행
            this.sendRequest();
        });
    } else {
      // 아이템 이름이 없는 경우에도 요청을 보낼 수 있습니다.
      // 이 부분은 비즈니스 로직에 따라 조절하실 수 있습니다.
      this.sendRequest();
    }
  }

  sendRequest = () => {
    const { params } = this.state;

    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      method: "POST",
      headers: {
        Authorization: "KakaoAK 6d6aecede153720aceb34e311a35889d",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: params,
    })
      .then((response) => {
        const {
          data: { next_redirect_pc_url, tid },
        } = response;

        this.setState({ next_redirect_pc_url, tid }, () => {
          window.location.href = next_redirect_pc_url;
        });
      })
      .catch((error) => {
        console.error("API Error:", error.response.data);
      });
  };

  render() {
    return null;
  }
}
export default App;
