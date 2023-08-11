import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const AddBasketModal = ({ state, path }) => {

    const token = localStorage.getItem('Authorization') 
    
    const headers = {
        "Authorization": `Bearer ${token}`,
    }

    const setModalOpen = state.setModalOpen;

    const closeModal = () => {
      setModalOpen(false);
    };
  
    const modalRef = useRef(null);
  
    useEffect(() => {
      const handler = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setModalOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handler);
  
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [setModalOpen]);

    const navigate = useNavigate()

    const location = useLocation();
    const group = location.pathname.split("/")[1];

    // 현재 접속 중 url 일부를 제거 후 재사용하기 위함
    const newPath = location.pathname.split('/').slice(0, -1).join('/') + '/basket'

    // 장바구니에 추가하려는 물품이 멤버십인지 콘서트 티켓인지 판단하기 위한 변수
    const isMembership = path.isMembership

    // 물품이 콘서트일때, 멤버십일때를 구분해 API 요청을 하기 위해 API를 변수로 설정
    const [addBasketApi, setAddBasketApi] = useState();

    const getConcertAddBasketApi = () => {
        const concertAddBasketApi = `cart/online-concert/${path.path}`
        setAddBasketApi(concertAddBasketApi)
    }

    const getMembershipAddBasketApi = () => {
        const membershipAddBasketApi = `cart/membership/${path.path}`
        setAddBasketApi(membershipAddBasketApi)
    }

    useEffect (() => {
        if (isMembership) {
            getMembershipAddBasketApi()
        } else {
            getConcertAddBasketApi()
        }

        axios.post(addBasketApi, {} ,{headers: headers} )
        .then((response) => {
            console.log('와잘됨')
        })
        .catch((error) => {
            console.error('실패하다 추가 장바구니 요청 당신의')
        })
    })



    return (
        <>
        <div className="shopCreateBackground">
            <button className="shopCreateClose" onClick={closeModal}>
                ×
            </button>
            <div ref={modalRef} className="shopCreateDetail">
                상품이 장바구니에 등록되었습니다
                <div className="basketButtonContainer">
                    <button onClick={() => navigate(-1)} className="gotoBackButton">이전으로</button>
                    <button onClick={() => navigate(newPath)} className="gotoBasketButton">장바구니로</button>
                </div>
            </div>
        </div>  
        </>
    )
}

export default AddBasketModal