import React from 'react'
import '../../style/shop/ShopBasketItem.css'
import axios from 'axios'

const ShopBasketItem = ({ stuffId, membershipPayDto, onlineConcertDto }) => {

    const token = sessionStorage.getItem('Authorization')

    const headers = {
        "Authorization": `Bearer ${token}`,
    }

    const deleteRequset = () => {
        axios.delete(`cart/delete/${stuffId}`, {headers})
        .then(() => {
            window.location.reload()
        })
        .catch(() => {
            console.error('불멸의 장바구니')
        })
    }

    function NumberWithComma ({value}) {
        return (
          <div>{value?.toLocaleString()}원</div>
        )
      }

    return (
        <div className="basketItemContainer">
            <div className="basketItemImage">
                {membershipPayDto && <img src={`https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/${membershipPayDto.filePath}`} />}
                {onlineConcertDto && <img src={`https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/${onlineConcertDto.filePath}`} />}
            </div>
            <div className="basketItemDetails">
                <div className="basketItemTitle">{membershipPayDto ? membershipPayDto.title : onlineConcertDto.title}</div>
                <div className="basketItemPrice">{membershipPayDto ? <NumberWithComma value = {membershipPayDto.price} /> : <NumberWithComma value = {onlineConcertDto.price} />}</div>
            </div>
            <button className="basketItemDelete" onClick={deleteRequset}>삭제</button>
        </div>
    );
}

export default ShopBasketItem