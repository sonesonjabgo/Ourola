import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/images/ourola_logo.png";
import Login from "components/auth/Login";

import { useNavigate } from "react-router-dom";
import "../../../style/common/header/Header_noLoggedIn.css";
import axios from "axios";

<<<<<<< HEAD
function Header({
  isLoggedIn,
  onLogin,
  onLogout,
  showModal,
  modalOpen,
  closeModal,
}) {
  // isLoggedIn 의 상태에 따라 Header의 글귀를 바꿔야 함
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [searchText, setSearchText] = useState("bt");
=======
function Header({ showModal, modalOpen, closeModal }) {
  // isLoggedIn 의 상태에 따라 Header의 글귀를 바꿔야 함
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [searchText, setSearchText] = useState("");
>>>>>>> fca230f6953b1f653bce3aa7b4e262c0926c4fe6
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬스토리지에서 Authorization 값을 가져옴
    const authorization = localStorage.getItem("Authorization");

    // Authorization 값이 존재하면 로그인 상태로 설정
    if (authorization) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [localStorage.getItem("Authorization")]);

  const [isLoggedIn, setLoggedIn] = useState(false);

  // 로그인 상태 변경 함수
  const onLogin = () => {
    setLoggedIn(true);
  };

  // 로그아웃 상태 변경 함수
  const onLogout = () => {
    navigate("/");
    setLoggedIn(false);
  };

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

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const search = () => {
    const searchRegex = /^.{2,}$/; // 최소 2글자 이상인지를 검사하는 정규식
    console.log(searchText);
    if (!searchRegex.test(searchText)) {
      console.log("검색어는 최소 2글자 이상이어야 합니다.");
      return; // 검색어가 2글자 미만인 경우 함수 종료
    }

    axios
      .get(`/search/` + searchText)
      .then((response) => {
        console.log(response);
        navigate("/", { state: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  };

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
              <button
                style={{ background: "none", border: "none" }}
                onClick={search}
              >
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
            <button className="btn-hover color-3" onClick={showModal}>
              로그인
            </button>
          )}
          {modalOpen && <Login onLogin={onLogin} closeModal={closeModal} />}
          {isLoggedIn ? (
            <Link to="mypage">마이페이지</Link>
          ) : (
            <Link to="/signup">회원가입</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
