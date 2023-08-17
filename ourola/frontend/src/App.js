import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./components/common/header/Header";
import MainLoggedIn from "./components/main/MainLoggedIn";
import MainNoLoggedIn from "./components/main/MainnoLoggedIn";
import SearchResult from "./components/main/SearchResult";
import axios from 'axios'

// artist 선언 방식 fix 필요
function App() {

  // 로그인 모달 열기
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  const [isLoggedIn, setLoggedIn] = useState(false);

  const { state } = useLocation();
  // console.log("state 받음: ", state);

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

  useEffect(() => {
    // 페이지가 처음 로드될 때와 새로고침 시 state 값을 null로 설정
    const resetState = () => {
      if (state) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    };

    window.addEventListener("beforeunload", resetState);

    return () => {
      window.removeEventListener("beforeunload", resetState);
    };
  }, [state]);

  return (
    <div id="App" className="App">
      <Header
        modalOpen={modalOpen}
        showModal={showModal}
        closeModal={closeModal}
      />
      <div className="main"></div>
      <div className="main">
        {state ? (
          <SearchResult allGroup={state} />
        ) : isLoggedIn ? (
          <MainLoggedIn />
        ) : (
          <MainNoLoggedIn showModal={showModal} />
        )}
      </div>
    </div>
  );
}

export default App;
