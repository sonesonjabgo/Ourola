import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/images/ourola_logo.png";
import Login from "components/auth/Login";

import { useNavigate } from "react-router-dom";
import "../../../style/common/header/Header_noLoggedIn.css";
import axios from "axios";

function Header({ showModal, modalOpen, closeModal }) {
  // isLoggedIn 의 상태에 따라 Header의 글귀를 바꿔야 함
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const interceptor = axios.interceptors.response.use(
  //     (response) => response,
  //     async (error) => {
  //       if (error.response && error.response.status === 401) {
  //         // 만료된 토큰을 처리하기 위한 로직을 여기에 작성합니다.
  //         // 리프레시 토큰 요청을 보내고 액세스 토큰을 업데이트합니다.
  //         // 액세스 토큰이 업데이트된 후 원래 요청을 다시 시도합니다.
  //         // 응답을 가지고 Promise를 해결합니다.
  //         const accessToken = sessionStorage.getItem("Authorization")
  //         const refreshToken = localStorage.getItem("RefreshToken")

  //         const config = {
  //           headers: {
  //             Authorization: "Bearer " + accessToken,
  //             "Authorization-refresh": "Bearer " + refreshToken,
  //           }
  //         }
  //         // const Headers = {
  //         //   "Authorization": "Bearer " + accessToken,
  //         //   "Authorization-refresh": "Bearer " + refreshToken,
  //         // }

  //         await axios
  //           .get("/auth", config)
  //           .then((res)=>{
  //             // console.log(res.headers["authorization"])
  //             // console.log(res.headers["authorization-refresh"])
  //             // console.log(res.headers)
  //             // console.log(res.headers.authorization)
  //             // console.log(res.headers["authorization"])

  //             // sessionStorage.removeItem("UserEmail");
  //             // sessionStorage.removeItem("Authorization");

  //             // // 로컬스토리지에서 refreshToken 제거
  //             // localStorage.removeItem("RefreshToken");

  //             localStorage.setItem("RefreshToken", res.headers["authorization-refresh"])
  //             sessionStorage.setItem("Authorization", res.headers["authorization"])
  //             // console.log()
  //           })
  //           return Promise.reject(error);
  //       }
  //     }
  //   );

  //   return () => {
  //     // 컴포넌트가 언마운트될 때 인터셉터를 제거합니다.
  //     axios.interceptors.response.eject(interceptor);
  //   };
  // }, []);

  useEffect(() => {
    // 로컬스토리지에서 Authorization 값을 가져옴
    const authorization = sessionStorage.getItem("Authorization");

    // Authorization 값이 존재하면 로그인 상태로 설정
    if (authorization) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [sessionStorage.getItem("Authorization")]);

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

    // 세션스토리지에서 Authorization 제거
    sessionStorage.removeItem("UserEmail");
    sessionStorage.removeItem("Authorization");

    // 로컬스토리지에서 refreshToken 제거
    localStorage.removeItem("RefreshToken");

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
    <nav id="navbar" className="navbar">
      <div className="navbarContainer">
        <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
          <img className="mainLogo" src={mainLogo} alt="OurolaLogo" />
          Ourola
        </Link>
        <div className="navbarUtilContainer">
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
              <button className="authButton" onClick={clickLogout}>
                로그아웃
              </button>
            ) : (
              <button className="authButton" onClick={showModal}>
                로그인
              </button>
            )}
            {modalOpen && <Login onLogin={onLogin} closeModal={closeModal} />}
            {isLoggedIn ? (
              <Link className="authButton" to="mypage">
                마이페이지
              </Link>
            ) : (
              <Link className="authButton" to="/signup">
                회원가입
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
