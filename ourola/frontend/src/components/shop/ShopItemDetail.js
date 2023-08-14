import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'
import OpenShopUpdateModal from './OpenShopUpdateModal'
import OpenShopDeleteModal from './OpenShopDeleteModal'
import OpenAddBasketModal from './OpenAddBasketModal'
import axios from 'axios'

const ShopItemDetail = ( ) => {

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

    function NumberWithComma ({value}) {
        return (
          <div>\{value?.toLocaleString()}</div>
        )
      }


    return (
        <>
        <div className="shopDetailContentContainer">
            <div className="shopDetailBasketContainer">
                <button onClick={goBack} className="shopDetailToListButton">이전으로</button>
                {path.userRole === 'CHANNEL_ADMIN' || path.userRole ==='ADMIN' ?
                <>
                <OpenShopUpdateModal path={path} />
                  {path.isMembership ? null :
                  <OpenShopDeleteModal path={path} />} 
                </>
                : null }
                <div onClick={() => navigate(newPath)} className="shopDetailBasketButton">
                    <img className="shopDetailBasketIcon" src={BasketIcon}/>
                    장바구니
                </div>
            </div>
            <div className = "shopDetailInfoContainer">
                <div className = "shopDetailMaininfo">
                    <div className = "shopDetailMaininfoImgContainer">
                        <img className = "shopDetailMaininfoImg" src={`https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/${path.src}`}/>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="shopDetailPurchaseContainer">
                     <div className="purchaseTitle">
                        <h1>{path.title}</h1>
                        <hr></hr>
                        <h3 className="detailPrice"><NumberWithComma value={path.price} /></h3>
                     </div>
                     <div className="detailContentInfo">
                        {path.content}
                     </div>
                
                     <div className="datailBuy">
                        <OpenAddBasketModal path={path} />
                        <button className="detailBuyButton">바로 구매 ></button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopItemDetail