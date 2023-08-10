import React from 'react'
import '../../style/shop/ShopBasketItem.css'

const ShopBasketItem = ({ membershipPayDto, onlineConcertDto }) => {
    return (
        <>
        <div className="basketItemTitle">
        {/* DB에 멤버십, 콘서트 사진 들어가면 불러오는 코드 추가 필요 */}
        <div>{membershipPayDto.title}</div>
        <div>{membershipPayDto.price}원</div>
        </div>
        </>
    )
}

export default ShopBasketItem