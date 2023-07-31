import React from 'react'
import BasketIcon from '../../assets/icons/basket.png'
import ShopItemList from './ShopItemList'
import '../../style/shop/Shop.css'

const Shop = () => {
    return (
        <>
        <div className="Shop-content-container">
            <div className="Shop-basket-container">
                <img className="Shop-basket-icon" src={BasketIcon}/>
                장바구니
            </div>
            <div className="Shop-Items-container">
                <ShopItemList />
            </div>
        </div>
        </>
    )
}

export default Shop