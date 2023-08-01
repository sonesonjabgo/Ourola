import React, { useState, useEffect } from "react";
import "../../style/main/Main_noLoggedIn.css";
import NewCards from "../common/cards/NewCards";
import axios from 'axios'

function MainNoLoggedIn() {

  const [allGroup, setAllGroup] = useState([])

  useEffect(() => {
    axios.get('search/getAllGroup')
      .then((response) => {
        setAllGroup(response.data)
      })
      .catch((error) => {
        console.error('하하 망했지', error)
      })
  }, [])

  return (
    <>
      <div className="mainbanner">Ourola</div>
      <div className="groupsNew">당신의 오로라에 새로운 색을 더해보세요</div>
      <div className="underline"></div>
      <div className="cardList">
        <NewCards allGroup = {allGroup}/>
      </div>
    </>
  );
}

export default MainNoLoggedIn;
