import React, { useState, useEffect } from "react";
import "../../style/main/Main_LoggedIn.css";
import NotFollowingCards from "../common/cards/NotFollowingCards";
import FollowingCards from "../common/cards/FollowingCards";
import axios from 'axios'

function MainLoggedIn() {
  // 로그인된 유저의 토큰을 받고 헤더로 지정
  const token = localStorage.getItem('Authorization')
  const headers = {Authorization: `Bearer ${token}`,}

  // 구독 중dls 아티스트 불러오기
  const [subGroup, setSubGroup] = useState([])

  useEffect(() => {
    axios.get('fan/subscribe', { headers })
      .then((response) => {
        // 구독 중인 그룹 목록은 현재 로그인 중인 유저에 대한 데이터도 포함되어 있음
        // 반복문을 통해 그룹 데이터만 가져올 수 있도록 함
        setSubGroup(response.data.map(item => item.groupDto))
      })
      .catch((error) => {
        console.error('하하 망했지', error)
      })
  }, [])

  // 구독 중이 아닌 아티스트 불러오기
  const [notSubGroup, setNotSubGroup] = useState([])

  useEffect(() => {
    axios.get('fan/notsubscribe', { headers })
      .then((response) => {
        setNotSubGroup(response.data)
      })
      .catch((error) => {
        console.error('하하 망했지', error)
      })
  }, [])

  return (
    <>
      <div className="mainbanner">Ourola</div>
      <div className="groupsFollowing">나의 오로라</div>
      <div className="underline"></div>
      <div className="cardList">
        <FollowingCards subGroup={subGroup}/>
      </div>
      <div className="groupsNew">당신의 오로라에 새로운 색을 더해보세요</div>
      <div className="underline"></div>
      <div className="cardList">
        <NotFollowingCards notSubGroup={notSubGroup}/>
      </div>
    </>
  );
}

export default MainLoggedIn;
