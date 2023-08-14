import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BasketIcon from '../../assets/icons/basket.png'
import ShopItemList from './ShopItemList'
import '../../style/shop/Shop.css'
import axios from 'axios'
import OpenShopCreateModal from './OpenShopCreateModal'

const Shop = () => {
    const location = useLocation();
    const group = location.pathname.split("/")[1];

    // Concert 물품 전체 불러오기
    const [allConcert, setAllConcert] = useState([])

    useEffect(() => {
      let isMounted = true;
  
      axios.get(`shop/${group}/online-concert`)
        .then((response) => {
          if (isMounted) {
          setAllConcert(response.data)
          }
        })
        .catch((error) => {
          console.error('ㅋㅋ', error)
        })
  
        return () => {
          isMounted = false;
        }
    }, [])

        // Membership 물품 전체 불러오기
        const [allMembership, setAllMembership] = useState([])

        useEffect(() => {
          let isMounted = true;
      
          axios.get(`shop/${group}/membership`)
            .then((response) => {
              if (isMounted) {
              setAllMembership(response.data)
              }
            })
            .catch((error) => {
              console.error('ㅋㅋ', error)
            })
      
            return () => {
              isMounted = false;
            }
        }, [])

    // 현재 유저가 관리자 권한을 가지고 있는지 판단하기 위한 유저 정보 불러오기
    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
      const token = sessionStorage.getItem('Authorization')
      const headers = {"Authorization": `Bearer ${token}`}

      axios.get('user/userinfo', { headers: headers })
        .then((response) => {
          setUserInfo(response.data)
        })
        .catch((error) => {
          console.error('누구세용?', error)
        })
    }, [])

    const path = location.pathname

    return (
        <>
        <div className="shopContentContainer">
          <div className="shopMainHeader">
            {userInfo.isAdmin === true && userInfo.role === "CHANNEL_ADMIN" ?
              <div className="openCreateButton">
                <OpenShopCreateModal />
              </div>
              : null
            }
            <Link to={`${path}/basket`} state={{userInfo: userInfo}}>
              <div className="shopBasketContainer">
                  <img className="shopBasketIcon" src={BasketIcon}/>
                  장바구니
              </div>
              </Link>
            </div>
            <div className="shopItemsContainer">
                <ShopItemList allConcert={allConcert} allMembership={allMembership}/>
            </div>
        </div>
        </>
    )
}

export default Shop