import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/shop/PurchaseSuccess.css";

const PurchaseSuccess = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const group = query.get("group");

  const accessToken = sessionStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const navigate = useNavigate();

  const [allBasket, setAllBasket] = useState([]);

  useEffect(() => {
    // 장바구니 내용을 불러옵니다.
    axios
      .get("/cart", config)
      .then((response) => {
        const currentBasket = response.data;
        setAllBasket(currentBasket);

        // 장바구니 내용을 삭제합니다.
        if (currentBasket.length > 0) {
          const purchase = currentBasket.map((item) => {
            const fanDtoId = item.fanDto.id;
            const memDtoId =
              item.membershipPayDto === null ? null : item.membershipPayDto.id;
            const conDtoId =
              item.onlineConcertDto === null ? null : item.onlineConcertDto.id;

            let url = ``;
            if (memDtoId !== null) {
              url += `&memDtoId=${memDtoId}`;
            }

            if (conDtoId !== null) {
              url += `&conDtoId=${conDtoId}`;
            }

            return axios.post(
              `/shop/${group}/buy?fanDtoId=${fanDtoId}` + url,
              {},
              config
            );
          });

          Promise.all(purchase)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log("구매 내역 기록 실패 :: ", error);
            });

          const itemsToDelete = currentBasket.map((item) => item.id);
          const deletePromise = itemsToDelete.map((itemId) => {
            return axios.delete(`/cart/delete/${itemId}`, config);
          });

          Promise.all(deletePromise)
            .then(() => {
              setAllBasket([]);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goToHome = () => {
    navigate(`/${group}/shop`);
  };

  return (
    <div className="payment-success-container">
      <h1>결제 완료!</h1>
      <br></br>
      <p>모든 결제가 완료되었습니다. 감사합니다.</p>
      <div className="buttons-container">
        <button onClick={goToHome} className="home-button">
          홈으로
        </button>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
