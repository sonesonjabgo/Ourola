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

    return (
        <>
        <div className="basketItemTitle">
        {/* DB에 멤버십, 콘서트 사진 들어가면 불러오는 코드 추가 필요 */}
        {membershipPayDto !== null ? 
        <div>
        <div>{membershipPayDto.title}</div>
        <div>{membershipPayDto.price}원</div>
        </div> : null}

        {onlineConcertDto !== null ? 
        <div>
        <div>{onlineConcertDto.title}</div>
        <div>{onlineConcertDto.price}원</div>
        </div> : null}
        </div>

        <button onClick={deleteRequset}>내가없어져볼게얍!</button>
        <br></br>
        </>
    )
}

export default ShopBasketItem