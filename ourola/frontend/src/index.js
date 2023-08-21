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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Announcement from "./components/others/announcement/Announcement";
import Group1 from "components/fanfeed/Group";
import Group2 from "components/groupfeed/Group";
// import FanFeed from "./components/fanfeed/FanFeed";
import Shop from "./components/shop/Shop";
import ShopItemDetail from "./components/shop/ShopItemDetail";
import "./index.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/Footer";
import ArtistHeader from "./components/common/header/ArtistPageMenu";
import Signup from "./components/auth/SignUp";
import MembershipOnly from "./components/others/membershipOnly/MembershipOnly";
import KakaoLoginHandler from "./components/auth/KakaoLoginHandler";
import ShopBasket from "./components/shop/ShopBasket";

import FanSignEnter from "components/media/fanSigning/FanSignEnter";
import FanSignView from "components/media/fanSigning/FanSignView";
import FanSignList from "components/media/fanSigning/FanSignList";

import axios from "axios";
import MyPage from "components/mypage/MyPage";
import OnlineConcertEnter from "components/media/onlineconcert/OnlineConcertEnter";
import OnlineConcertList from "components/media/onlineconcert/OnlineConcertList";
import OnlineConcertView from "components/media/onlineconcert/OnlineConcertView";
import OpenLive from "components/others/openlive/OpenLive";
import NotFound from "./components/common/NotFound";
import PurchaseSuccess from "./components/shop/PurchaseSuccess";
import PurchaseFailed from "./components/shop/PurchaseFailed";
import LiveList from "components/live/LiveList";
import LiveView from "components/live/LiveView";
import LiveOpen from "components/live/LiveOpen";

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
      {/* 메인, 회원가입, 마이페이지 */}
      <Route path="/" element={<App />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/mypage"
        element={<MyPage accessToken={localStorage.getItem("Authorization")} />}
      ></Route>

      {/* 팬 피드 */}
      <Route path="/:group/fanfeed" element={<Group1 />}></Route>

      {/* 아티스트 피드 */}
      <Route path="/:group/group" element={<Group2 />}></Route>

      {/* 라이브 */}
      <Route path="/:group/live/list" element={<LiveList />}></Route>
      <Route path="/:group/live/open" element={<LiveOpen />}></Route>
      <Route path="/:group/live/view" element={<LiveView />}></Route>

      {/* 미디어 - 팬싸인회 */}
      <Route
        path="/:group/media/fanSigning/list"
        element={<FanSignList />}
      ></Route>
      <Route
        path="/:group/media/fanSigning/enter"
        element={<FanSignEnter />}
      ></Route>
      <Route
        path="/:group/media/fanSigning/view"
        element={<FanSignView />}
      ></Route>
      {/* 미디어 - 온라인콘서트 */}
      <Route
        path="/:group/media/online-concert/list"
        element={<OnlineConcertList />}
      ></Route>
      <Route
        path="/:group/media/online-concert/enter"
        element={<OnlineConcertEnter />}
      ></Route>
      <Route
        path="/:group/media/online-concert/view"
        element={<OnlineConcertView />}
      ></Route>

      {/* others - 공지사항 */}
      <Route
        path="/:group/others/announcement"
        element={<Announcement />}
      ></Route>
      {/* others - 멤버쉽 콘텐츠 */}
      {/* <Route
        path="/:group/others/membershipOnly"
        element={<MembershipOnly />}
      ></Route> */}
      {/* others- 공방신청 */}
      <Route path="/:group/others/openlive" element={<OpenLive />}></Route>

      {/* shop */}
      <Route path="/:group/shop/" element={<Shop />}></Route>
      <Route path="/:group/shop*" element={<ShopItemDetail />}></Route>
      <Route exact path="/:group/shop/basket" element={<ShopBasket />}></Route>
      <Route path="/:group/shop/:itemId" element={<ShopItemDetail />} />
      <Route path="/purchase/success" element={<PurchaseSuccess />} />
      <Route path="/purchase/failed" element={<PurchaseFailed />} />

      {/* 팬싸인회 */}

      {/* 소셜로그인 */}
      <Route path="/login/oauth2/code/kakao" element={<KakaoLoginHandler />} />
      <Route path="*" element={<Navigate to="/NotFound" />} />
      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  container
);
