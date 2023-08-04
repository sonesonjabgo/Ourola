import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'
import OpenShopUpdateModal from './OpenShopUpdateModal'
import OpenShopDeleteModal from './OpenShopDeleteModal'
import axios from 'axios'

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

    const path = location.state

    return (
        <>
        <div className="shopDetailContentContainer">
            <div className="shopDetailBasketContainer">
                <button onClick={goBack} className="shopDetailToListButton">이전으로</button>
                <OpenShopUpdateModal path={path} />
                <OpenShopDeleteModal path={path} />
                <div className="shopDetailBasketButton">
                    <img className="shopDetailBasketIcon" src={BasketIcon}/>
                    장바구니
                </div>
            </div>
            <div className = "shopDetailInfoContainer">
                <div className = "shopDetailMaininfo">
                    <div className = "shopDetailMaininfoImgContainer">
                        <img className = "shopDetailMaininfoImg" src={path.src}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopItemDetail