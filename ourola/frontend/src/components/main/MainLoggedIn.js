import React, { useState, useEffect } from "react";

import "../../style/main/Main_LoggedIn.css";
import NotFollowingCards from "../common/cards/NotFollowingCards";
import FollowingCards from "../common/cards/FollowingCards";
import axios from "axios";

function MainLoggedIn() {
  // 로그인된 유저의 토큰을 받고 헤더로 지정
  const token = sessionStorage.getItem("Authorization");
  const headers = { Authorization: `Bearer ${token}` };

  // 현재 접속 중인 사용자의 정보 불러와 관리자 계정이면 바로 해당 그룹 페이지로 이동
  const [userInfo, setUserInfo] = useState("");

  const [firstEffectCompleted, setFirstEffectCompleted] = useState(false);

  useEffect(() => {
    axios
      .get(`user/userinfo`, { headers: headers })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error("현재 접속 중인 사용자 정보 불러오기 실패", error);
      })
      .finally(() => {
        setFirstEffectCompleted(true);
      });
  }, []);

  if (
    (userInfo?.role === "CHANNEL_ADMIN" || userInfo?.role === "ARTIST") &&
    userInfo?.groupDto?.name !== undefined
  ) {
    window.location.href = `${userInfo?.groupDto?.name}/fanfeed`;
  }

  // 구독 중인 아티스트 불러오기
  const [subGroup, setSubGroup] = useState([]);

  useEffect(() => {
    if (firstEffectCompleted) {
      axios
        .get("fan/subscribe", { headers: headers })
        .then((response) => {
          // 구독 중인 그룹 목록은 현재 로그인 중인 유저에 대한 데이터도 포함되어 있음
          // 반복문을 통해 그룹 데이터만 가져올 수 있도록 함
          setSubGroup(response.data.map((item) => item.groupDto));
        })
        .catch((error) => {
          console.error("error :", error);
        });
    }
  }, [firstEffectCompleted]);

  // 구독 중이 아닌 아티스트 불러오기
  const [notSubGroup, setNotSubGroup] = useState([]);

  useEffect(() => {
    axios
      .get("fan/notsubscribe", { headers: headers })
      .then((response) => {
        setNotSubGroup(response.data);
      })
      .catch((error) => {
        console.error("error :", error);
      });
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <>
      {userInfo?.role === "CHANNEL_ADMIN" ? (
        <div className="moveToGroupContainer">
          <div className="moveToGroup">그룹 페이지로 이동중입니다.</div>
        </div>
      ) : (
        <div>
          <div className="mainbanner">Ourola</div>
          <div className="groupsFollowing">나의 오로라</div>
          <div className="underline"></div>
          <div className="cardList">
            <FollowingCards subGroup={subGroup} />
          </div>
          <div className="groupsNew">
            당신의 오로라에 새로운 색을 더해보세요
          </div>
          <div className="underline"></div>
          <div className="cardList">
            <NotFollowingCards notSubGroup={notSubGroup} />
          </div>
        </div>
      )}
    </>
  );
}

export default MainLoggedIn;
