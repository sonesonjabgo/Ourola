import React from 'react'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'

const ShopItemDetail = () => {
    return (
        <>
        <div className="shopDetailContentContainer">
            <div className="shopDetailBasketContainer">
                <button className="shopDetailToListButton">목록으로</button>
                <div className="shopDetailBasketButton">
                    <img className="shopDetailBasketIcon" src={BasketIcon}/>
                    장바구니
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopItemDetail