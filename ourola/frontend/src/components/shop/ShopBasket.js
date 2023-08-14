import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import '../../style/shop/ShopBasket.css'
import ShopBasketList from "./ShopBasketList"

const ShopBasket = () => {
    const location = useLocation()

    const accessToken = sessionStorage.getItem("Authorization");

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

    // 장바구니가 비어있는지를 전달해주는 변수
    const [isEmpty, setIsEmpty] = useState(false)

    // 불러온 장바구니 물품들의 총 가격 더하기
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
      if (allBasket && allBasket.length > 0) {
        setIsEmpty(false)
        
        let totalMembershipPrice = allBasket.reduce((sum, membershipStuff) => sum + (membershipStuff.membershipPayDto?.price || 0), 0)
        console.log(totalMembershipPrice)
        let totalConcertPrice = allBasket.reduce((sum, concertStuff) => sum + (concertStuff.onlineConcertDto?.price || 0), 0)
    
        if (isNaN(totalMembershipPrice)) { totalMembershipPrice = 0 }
        if (isNaN(totalConcertPrice)) { totalConcertPrice = 0 }
        
        setTotalPrice(totalMembershipPrice + totalConcertPrice)
    } else if (allBasket && allBasket.length === 0) {
      setIsEmpty(true)
    }
  })

    return (
        <>
        <div className="basketContentContainer">
          <div className="basketContent">
          {isEmpty ? '장바구니에 담긴 물건이 없습니다.' :
            <ShopBasketList allBasket={allBasket} isEmpty={isEmpty}/>}
            </div>
            <div className="basketTotalPrice">
            총 금액 : {totalPrice}원
            </div>
        </div>
        </>
    )}

export default ShopBasket