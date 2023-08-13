import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'
import OpenShopUpdateModal from './OpenShopUpdateModal'
import OpenShopDeleteModal from './OpenShopDeleteModal'
import OpenAddBasketModal from './OpenAddBasketModal'
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

    // 현재 접속 중 url 일부를 제거 후 basket을 추가해 장바구니로 연결하기 위함
    const newPath = location.pathname.split('/').slice(0, -1).join('/') + '/basket'


    return (
        <>
        <div className="shopDetailContentContainer">
            <div className="shopDetailBasketContainer">
                <button onClick={goBack} className="shopDetailToListButton">이전으로</button>
                <OpenShopUpdateModal path={path} />
                {path.isMembership ? ( null ) : 
                (<OpenShopDeleteModal path={path} />)}
                <OpenAddBasketModal path={path} />
                <div onClick={() => navigate(newPath)} className="shopDetailBasketButton">
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