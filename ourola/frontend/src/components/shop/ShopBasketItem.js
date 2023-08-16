import React, { useState, useEffect } from 'react'
import '../../style/shop/ShopBasketItem.css'
import axios from 'axios'
import openedBin from "../../assets/icons/opened_bin.png";
import closedBin from "../../assets/icons/closed_bin.png";


const ShopBasketItem = ({ stuffId, membershipPayDto, onlineConcertDto }) => {

    const token = sessionStorage.getItem('Authorization')

    const headers = {
        "Authorization": `Bearer ${token}`,
    }

    const [targetGroup, setTargetGroup] = useState();

    useEffect(() => {
        if (membershipPayDto) {
            setTargetGroup(membershipPayDto.groupDto.name)
        } else {
            setTargetGroup(onlineConcertDto.groupDto.name)
        }
    
    })

    const toDetail = () => {
        window.location.href = `${stuffId}`;
    }

    const deleteRequest = () => {
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
    
    const [openBin, setOpenBin] = useState(closedBin)

    return (
        <div className="basketItemContainer">
            <div className="basketItemImage">
                {membershipPayDto && <img src={`https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/${membershipPayDto.filePath}`} />}
                {onlineConcertDto && <img src={`https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/${onlineConcertDto.filePath}`} />}
            </div>
            <div className="basketItemDetails">
                <div className="basketItemDetailsMain">
                    <div className="basketItemTitle">{membershipPayDto ? membershipPayDto.title : onlineConcertDto.title}</div>
                    <div className="basketItemRight">
                        <div className="basketItemDetailsDelete"><img className="deleteBin" src={openBin} onClick={deleteRequest} onMouseOver={() => setOpenBin(openedBin)} onMouseOut={() => setOpenBin(closedBin)} /></div>
                        <div className="basketItemPrice">{membershipPayDto ? <NumberWithComma value = {membershipPayDto.price} /> : <NumberWithComma value = {onlineConcertDto.price} />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopBasketItem