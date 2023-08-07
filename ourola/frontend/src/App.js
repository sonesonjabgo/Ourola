import React, { useState, useEffect } from "react";
import { Link, Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import MainLoggedIn from "./components/main/MainLoggedIn";
import MainNoLoggedIn from "./components/main/MainnoLoggedIn";
import registerServiceWorker from "./components/media/onlineconcert/openvidu/registerServiceWorker";

// artist 선언 방식 fix 필요
function App() {
  const group = "BTS";
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [subscribeList, setSubscribeList] = useState([]);

  useEffect(() => {
    document.title = "CSS의 무덤";
  });

  // 로그인 상태 변경 함수
  const onLogin = ({ groupList, subscribeList }) => {
    setLoggedIn(true);
    setGroupList(groupList);
    setSubscribeList(subscribeList);
  };

  // 로그아웃 상태 변경 함수
  const onLogout = ({ groupList, subscribeList }) => {
    setLoggedIn(false);
    setGroupList(groupList);
    setSubscribeList(subscribeList);
  };

  useEffect(() => {
    // 로컬스토리지에서 Authorization 값을 가져옴
    const authorization = localStorage.getItem("Authorization");

    // Authorization 값이 존재하면 로그인 상태로 설정
    if (authorization) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  registerServiceWorker();

  return (
    <div id="App" className="App">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} />
      <div className="main"></div>
      <div className="main">
        {isLoggedIn ? <MainLoggedIn /> : <MainNoLoggedIn />}
      </div>
      {/* <Footer></Footer> 아마 전체 페이지에 다 들어가지 않을까?*/}
      <br />
      <Link to="/live">라이브</Link>
    </div>
  );
}

export default App;
