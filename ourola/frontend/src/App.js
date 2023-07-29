import React, { useState, useEffect } from "react";
import { Link, Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import MainLoggedIn from "./components/main/Main_LoggedIn";
import MainNoLoggedIn from "./components/main/Main_noLoggedIn";
// import HeaderNoLoggedIn from "./components/header/Header_noLoggedIn";
// import HeaderLoggedIn from "./components/header/Header_LoggedIn";

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
    const authorization = localStorage.getItem('Authorization');

    // Authorization 값이 존재하면 로그인 상태로 설정
    if (authorization) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div id="App" className="App">
      <Header isLoggedIn={isLoggedIn}  onLogin={handleLoginSuccess} onLogout={handleLogout}/>
      <div className="main">
      </div>
      <div className="main">
        {isLoggedIn ? <MainLoggedIn/> : <MainNoLoggedIn/>}
      </div>
      
      {/* <Aside></Aside> 팬 피드, 아티스트 피트 페이지는 다 필요한 듯 */}
      <Link to="/announcement" state={artist}>
        공지사항
      </Link>
      <br></br>
      <Link to="/artist" state={artist}>
        아티스트
      </Link>
      {/* <Footer></Footer> 아마 전체 페이지에 다 들어가지 않을까?*/}
    </div>
  );
}

export default App;