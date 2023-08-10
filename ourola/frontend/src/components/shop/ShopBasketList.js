import React from 'react'
import ShopBasketItem from './ShopBasketItem'

const ShopBasketList = ({allBasket}) => {
    console.log(allBasket)
    return (
        <>
        <div id="shopBasketList" className="shopBasketList">
         <section id="shopBasketBoard" className="shopBasketBoard">
        {allBasket.map((it) => (
            <ShopBasketItem
                key = {it?.id}
                membershipPayDto = {it?.membershipPayDto}    
                onlineConcertDto = {it?.onlineConcertDto}       
            ></ShopBasketItem>
             ))}
            </section>
        </div>
        </>
    )
}

export default ShopBasketList