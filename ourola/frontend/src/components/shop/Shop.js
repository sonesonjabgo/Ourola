import React from 'react'
import BasketIcon from '../../assets/icons/basket.png'
import ShopItemList from './ShopItemList'
import '../../style/shop/Shop.css'

const Shop = () => {
    return (
        <>
        <div className="shopContentContainer">
            <div className="shopBasketContainer">
                <img className="shopBasketIcon" src={BasketIcon}/>
                장바구니
            </div>
            <div className="shopItemsContainer">
                <ShopItemList />
            </div>
        </div>
        </>
    )
}

export default Shop