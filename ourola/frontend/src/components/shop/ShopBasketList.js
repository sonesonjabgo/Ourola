import React from 'react'
import ShopBasketItem from './ShopBasketItem'
import '../../style/shop/ShopBasketList.css'

const ShopBasketList = ({allBasket}) => {
    console.log(allBasket)
    return (
        <>
        <div id="shopBasketList" className="shopBasketList">
         <section id="shopBasketBoard" className="shopBasketBoard">
        {allBasket.map((it) => (
            <ShopBasketItem
                key = {it?.id}
                stuffId = {it?.id}
                membershipPayDto = {it?.membershipPayDto}
                onlineConcertDto = {it?.onlineConcertDto}
            ></ShopBasketItem>
             ))}
            </section>
            <br></br>
        </div>
        </>
    )
}

export default ShopBasketList