import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import '../../style/shop/ShopItemDetail.css'
import OpenShopUpdateModal from './OpenShopUpdateModal'

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

    // 현재 보고 있는 상품의 정보 가져오기
    const { path } = useParams()
    const [shopItem, setShopItem] = useState("");

    useEffect(() => {
        fetch(`shop/seventeen/online-concert/${path}`)
            .then((response) => response.json())
            .then((data) => setShopItem(data))
            .catch((error) => console.error('실패!', error))
    }, [path])

    return (
        <>
        <div className="shopDetailContentContainer">
            <div className="shopDetailBasketContainer">
                <button onClick={goBack} className="shopDetailToListButton">이전으로</button>
                <OpenShopUpdateModal path={path}/>
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