// 라우트 주소 정리 필요
// 현재 세븐틴 두고 작성하고 있는데
// 서버에서 불러온 아티스트 채널마다 접속하려면
// 라우트 주소 정리 필요함
// 예로 팬피드는 /seventeen 아티스트 피드는 /group
// 세븐틴으로 명시할 것이 아니고 클릭한 채널의 아티스트 명이 주소에 들어가야 하고
// 그냥 group이 아니고 /`{artist}`/group 등으로 이루어져야 함.

import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/others/announcement/Announcement";
import Group from "components/groupfeed/Group";
import FanFeed from "./components/fanfeed/FanFeed";
import Shop from "./components/shop/Shop";
import ShopItemDetail from "./components/shop/ShopItemDetail";
import "./index.css";
import Header from "./components/common/header/Header";
import ArtistHeader from "./components/common/header/ArtistPageMenu";
import Signup from "./components/auth/SignUp";
import FanSigning from "./components/media/fanSigning/FanSigning";
import MembershipOnly from "./components/others/membershipOnly/MembershipOnly";
import KakaoLoginHandler from "./components/auth/KakaoLoginHandler";
import ShopBasket from "./components/shop/ShopBasket";

import axios from "axios";
import MyPage from "components/mypage/MyPage";
import OnlineConcertEnter from "components/media/onlineconcert/OnlineConcertEnter";
import OnlineConcertList from "components/media/onlineconcert/OnlineConcertList";
import OnlineConcertView from "components/media/onlineconcert/OnlineConcertView";
import Temp from "components/media/onlineconcert/temp";
import OpenLive from "components/others/openlive/OpenLive";

// EC2 서버
axios.defaults.baseURL = "https://i9d204.p.ssafy.io:8001";
// 로컬
// axios.defaults.baseURL = "http://localhost:8000";

// axios.defaults.withCredentials = true;

const container = document.getElementById("root");

render(
  <BrowserRouter>
    <Header />
    <ArtistHeader />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/mypage"
        element={<MyPage accessToken={localStorage.getItem("Authorization")} />}
      ></Route>
      <Route path="/:group" element={<FanFeed />}></Route>
      <Route path="/:group/group" element={<Group />}></Route>
      <Route path="/:group/announcement" element={<Announcement />}></Route>
      <Route path="/:group/openlive" element={<OpenLive />}></Route>
      <Route
        path="/seventeen/membershipOnly"
        element={<MembershipOnly />}
      ></Route>
      <Route path="/:group/fanSigning" element={<FanSigning />}></Route>
      <Route path="/:group/shop/" element={<Shop />}></Route>
      <Route path="/:group/shop*" element={<ShopItemDetail />}></Route>

      {/* 온라인콘서트 */}
      <Route
        path="/:group/online-concert/list"
        element={<OnlineConcertList />}
      ></Route>
      <Route
        path="/:group/online-concert/enter"
        element={<OnlineConcertEnter />}
      ></Route>
      <Route
        path="/:group/online-concert/view"
        element={<OnlineConcertView />}
      ></Route>
      {/* <Route path="/:group/online-concert/view" element={<Temp />}></Route> */}

      <Route path="/:group/shop/:itemId" element={<ShopItemDetail />} />
      <Route path="/login/oauth2/code/kakao" element={<KakaoLoginHandler />} />
    </Routes>
  </BrowserRouter>,
  container
);
