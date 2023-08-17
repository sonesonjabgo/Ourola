import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../style/shop/PurchaseSuccess.css'

const PurchaseSuccess = () => {

    const location = useLocation();
    const group = location.pathname.split("/")[1];

    const accessToken = sessionStorage.getItem("Authorization");
    
    const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      };

    const navigate = useNavigate();

    const [allBasket, setAllBasket] = useState([])

    useEffect(() => {
        axios.get('/cart', config)
        .then((response) => {
            setAllBasket(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const deleteAllRequest = () => {
        const itemsToDelete = allBasket.map(item => item.id)
        const deletePromise = itemsToDelete.map(itemId => {
          return axios.delete(`cart/delete/${itemId}`, config)
        })
  
        Promise.all(deletePromise)
        .then(() => {
          alert('장바구니 내 물품이 모두 삭제되었습니다');
          setAllBasket([]);
        })
        .catch((error) => {
          alert('장바구니 전체 삭제 중 오류');
          console.log(error);
        })
      };
  
      useEffect(() => {
          // 페이지에 접속했을 때 장바구니 삭제
          deleteAllRequest();
      }, [allBasket]);

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="payment-success-container">
            <h1>결제 완료!</h1>
            <br></br>
            <p>모든 결제가 완료되었습니다. 감사합니다.</p>
            <div className="buttons-container">
                <button onClick={goToHome} className="home-button">홈으로</button>
            </div>
        </div>
    );
}

export default PurchaseSuccess