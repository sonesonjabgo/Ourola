import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import '../../style/shop/ShopBasket.css'
import ShopBasketList from "./ShopBasketList"

const ShopBasket = () => {
    const location = useLocation()

    const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };
    
    // 현재 로그인 중인 사용자의 장바구니 리스트 불러오기
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

    console.log(allBasket)

    let totalMembershipPrice = allBasket?.reduce((sum, membershipStuff) => sum + membershipStuff.membershipPayDto?.price, 0)
    let totalConcertPrice = allBasket?.reduce((sum, concertStuff) => sum + concertStuff.onlineConcertDto?.price, 0)

    if (isNaN(totalMembershipPrice)) { totalMembershipPrice = 0 }
    if (isNaN(totalConcertPrice)) { totalConcertPrice = 0 }

    const totalPrice = totalMembershipPrice + totalConcertPrice

    return (
        <>
        <div className="basketContentContainer">
            <ShopBasketList allBasket={allBasket}/>
            총 금액 : {totalPrice}원
        </div>
        </>
    )}

export default ShopBasket