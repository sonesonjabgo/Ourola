import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import '../../style/shop/ShopBasket.css'
import ShopBasketList from "./ShopBasketList"
import Kakaopay from './Kakaopay'

const ShopBasket = () => {
      // 뒤로가기
      const navigate = useNavigate()

      const location = useLocation();
      const group = location.pathname.split("/")[1];
  
      const goBack = () => {
        let currentPath = location.pathname

        const newPath = currentPath.replace('/basket', '')

        navigate(newPath)
      }
  
      const path = location.state

    const accessToken = sessionStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };
    
    // 현재 로그인 중인 사용자의 장바구니 리스트 불러오기
    const [allBasket, setAllBasket] = useState([])

    useEffect(() => {
        axios.get('/cart', config)
        .then((response) => {
            setAllBasket(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(allBasket)

    // 장바구니가 비어있는지를 전달해주는 변수
    const [isEmpty, setIsEmpty] = useState(false)

    // 불러온 장바구니 물품들의 총 가격 더하기
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
      if (allBasket && allBasket.length > 0) {
        setIsEmpty(false)
        
        let totalMembershipPrice = allBasket.reduce((sum, membershipStuff) => sum + (membershipStuff.membershipPayDto?.price || 0), 0)
        console.log(totalMembershipPrice)
        let totalConcertPrice = allBasket.reduce((sum, concertStuff) => sum + (concertStuff.onlineConcertDto?.price || 0), 0)
    
        if (isNaN(totalMembershipPrice)) { totalMembershipPrice = 0 }
        if (isNaN(totalConcertPrice)) { totalConcertPrice = 0 }
        
        setTotalPrice(totalMembershipPrice + totalConcertPrice)
    } else if (allBasket && allBasket.length === 0) {
      setIsEmpty(true)
    }
  })

  // const purchaseRequest = () => {
    
  //   const itemsToPuschase = allBasket.map(item => item.id)

  //   axios.post(`payment/ready`, {items: itemsToPuschase}, config)
  //   .then((response) => {
  //     alert('결제 완료')
  //   })
  //   .catch((error) => {
  //     alert('결제 오류')
  //     console.log(error)
  //   })
  // }
  const [firstItem, setFirstItem] = useState("")

  useEffect (() => {
  if (allBasket.length > 0 && allBasket[0]?.membershipPayDto !== null) {
    setFirstItem(allBasket[0]?.membershipPayDto?.title)
  } else {
    setFirstItem(allBasket[0]?.onlineConcertDto?.title)
  }
  }, [allBasket])

  console.log(firstItem)

  const [showKakaoPay, setShowKakaoPay] = useState(false);

  const purchaseRequest = () => {
    
    const itemsToPuschase = allBasket.map(item => item.id)

    axios.post(`payment/ready`, {items: itemsToPuschase}, config)
    .then((response) => {
      setShowKakaoPay(true); 
    })
    .catch((error) => {
      alert('결제 오류');
      console.log(error);
    });
}

  const deleteAllRequest = () => {

    const itemsToDelete = allBasket.map(item => item.id)

    const deletePromise = itemsToDelete.map(itemId => {
      return axios.delete(`cart/delete/${itemId}`, config)
    })

    Promise.all(deletePromise)
    .then(() => {
      alert('장바구니 내 물품이 모두 삭제되었습니다')
      setAllBasket([])
      setTotalPrice(0)
    })
    .catch((error) => {
      alert('장바구니 전체 삭제 중 오류')
      console.log(error)
    })
  }
  
  const deleteAll = () => {
    if (window.confirm('전부 삭제하시겠습니까?'))
      deleteAllRequest()
  }

  function NumberWithComma ({value}) {
    return (
      <div>총 금액 : {value?.toLocaleString()}원</div>
    )
  }
  
    return (
        <>
        <div className="shopBasketHeader">
          <div><button onClick={goBack} className="shopBasketBackButton">목록으로</button></div>
          {allBasket.length !== 0 ?
          <div><button onClick={deleteAll} className="shopBasketDeleteAllButton">전체 삭제</button></div> : null
          }
        </div>
        <div className="basketContentContainer">
          <div className="basketContent">
          {isEmpty ? <div className="noBasket">장바구니에 담긴 물건이 없습니다.</div> :
            <ShopBasketList allBasket={allBasket} isEmpty={isEmpty}/>}
            </div>
            <div className="basketTotalPrice">
              <NumberWithComma value={totalPrice} />
            </div>
            <button className="buyAllButton" onClick={purchaseRequest}>전체 구매</button>
            {showKakaoPay && firstItem && <Kakaopay allBasket={allBasket} firstItem={firstItem} totalPrice={totalPrice} group={group} deleteAllRequest={deleteAllRequest}/>}
        </div>
        </>
    )}

export default ShopBasket