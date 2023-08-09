import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import '../../style/shop/ShopBasket.css'

const ShopBasket = () => {
    const location = useLocation()
    
    // 현재 로그인 중인 사용자의 장바구니 리스트 불러오기
    const [allBasket, setAllBasket] = useState()

    useEffect(() => {
        axios.get()
    })

    return (
        <>
        <div className = "testing">하하</div>
        </>
    )}

export default ShopBasket