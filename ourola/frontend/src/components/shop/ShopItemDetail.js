import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'

const ShopItemDetail = () => {

    // 뒤로가기
    const navigate = useNavigate()
    const location = useLocation()

    const goBack = () => {
        if (location.state?.from) {
            navigate(location.state.from)
        } else {
            navigate(-1)
        }
    }

    return (
        <>
        <div className="shopDetailContentContainer">
            <div className="shopDetailBasketContainer">
                <button onClick={goBack} className="shopDetailToListButton">이전으로</button>
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