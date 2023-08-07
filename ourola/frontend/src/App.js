import React, { useState, useEffect } from "react";
import { Link, Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import MainLoggedIn from "./components/main/MainLoggedIn";
import MainNoLoggedIn from "./components/main/MainnoLoggedIn";

// artist 선언 방식 fix 필요
function App() {
  const artist = "BTS";
  const [isLoggedIn, setLoggedIn] = useState(false);

  // 로그인 상태 변경 함수
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  // 로그아웃 상태 변경 함수
  const handleLogout = () => {
    setLoggedIn(false);
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

  return (
    <div id="App" className="App">
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleLoginSuccess}
        onLogout={handleLogout}
      />
      <div className="main"></div>
      <div className="main">
        {isLoggedIn ? <MainLoggedIn /> : <MainNoLoggedIn />}
      </div>

      <Link to="/seventeen/online-concert/list">라이브</Link>
    </div>
  );
}

export default App;
