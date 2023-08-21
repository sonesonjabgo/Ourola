import React, { useState, useEffect } from "react";
import "../../style/main/Main_noLoggedIn.css";
import AllCards from "../common/cards/AllCards";
import axios from 'axios'

function MainNoLoggedIn({ showModal }) {

  const [allGroup, setAllGroup] = useState([])

  useEffect(() => {
    // 컴포넌트가 언마운트된 상태에서 상태 업데이트 시도를 방지하는 isMounted
    let isMounted = true;

    axios.get('search/getAllGroup')
      .then((response) => {
        if (isMounted) {
        setAllGroup(response.data)
        }
      })
      .catch((error) => {
        console.error('error :', error)
      })

      return () => {
        isMounted = false;
      }
  }, [])

  return (
    <>
      <div className="mainbanner">Ourola</div>
      <div className="groupsNew">당신의 오로라에 새로운 색을 더해보세요</div>
      <div className="underline"></div>
      <div className="cardList">
        <AllCards className="mainCards" allGroup = {allGroup} showModal={showModal}/>
      </div>
    </>
  );
}

export default MainNoLoggedIn;
