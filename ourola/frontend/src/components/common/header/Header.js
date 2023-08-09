import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import mainLogo from "../../../assets/images/ourola_logo.png";
import Login from "components/auth/Login";


import { useNavigate } from "react-router-dom";
import "../../../style/common/header/Header_noLoggedIn.css";
import axios from "axios";

function Header({ isLoggedIn, onLogin, onLogout }) {
  // isLoggedIn 의 상태에 따라 Header의 글귀를 바꿔야 함
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [searchText, setSearchText] = useState("bt")
  const navigate = useNavigate();

  const clickLogout = () => {
    // 로그아웃 로직 수행
    // ...

    // 로컬스토리지에서 Authorization 제거
    localStorage.removeItem("UserEmail");
    localStorage.removeItem("Authorization");
    
    // App에서 prop해온 onLogout 실행
    // isLoggedIn을 false로 만든다
    onLogout();
  };

  const handleSearchTextChange = (event) =>{
    setSearchText(event.target.value);
  }

  const search = () =>{
    axios
      .get(`/search/` + searchText)
      .then((response) => {
        console.log(response);
        navigate("/", { state: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
          <img className="mainLogo" src={mainLogo} alt="OurolaLogo" />
          Ourola
        </Link>
        <ul className={click ? "navMenu active" : "navMenu"}>
          <div className="searchbar">
            <input
              id="searchGroupText"
              className="searchbarInput"
              placeholder="아티스트 검색"
              onChange={handleSearchTextChange}
            ></input>
            <div>
              <button style={{background:"none", border:"none"}} onClick={search}>
              <img
                className="searchbarButton"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
              />  
              </button>
            </div>
          </div>
        </ul>
        <div className="buttons">
          {isLoggedIn ? (
            <button onClick={clickLogout}>로그아웃</button>
          ) : (
            <Login onLogin={onLogin} />
          )}
          {isLoggedIn ? (
            <button>my page</button>
          ) : (
            <Link to="/signup">회원가입</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
