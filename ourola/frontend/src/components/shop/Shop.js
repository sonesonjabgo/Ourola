import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import ShopItemList from './ShopItemList'
import '../../style/shop/Shop.css'
import axios from 'axios'
import ShopItemDetail from './ShopItemDetail'

const Shop = () => {

    const [allStuff, setStuff] = useState([])

    useEffect(() => {
      // 컴포넌트가 언마운트된 상태에서 상태 업데이트 시도를 방지하는 isMounted
      let isMounted = true;
  
      axios.get('shop/seventeen/online-concert')
        .then((response) => {
          if (isMounted) {
          setStuff(response.data)
          }
        })
        .catch((error) => {
          console.error('ㅋㅋ', error)
        })
  
        return () => {
          isMounted = false;
        }
    }, [])

    return (
        <>
        <div className="shopContentContainer">
            <div className="shopBasketContainer">
                <img className="shopBasketIcon" src={BasketIcon}/>
                장바구니
            </div>
            <div className="shopItemsContainer">
                <ShopItemList allStuff={allStuff}/>
            </div>
        </div>
        </>
    )
}

export default Shop