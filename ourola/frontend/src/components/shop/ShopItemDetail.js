import React from 'react'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'

const ShopItemDetail = () => {
    return (
        <>
        <div className="ShopDetail-content-container">
            <div className="ShopDetail-basket-container">
                <button className="ShopDetail-toListButton">목록으로</button>
                <div className="ShopDetail-basket-button">
                    <img className="ShopDetail-basket-icon" src={BasketIcon}/>
                    장바구니
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopItemDetail