import React from "react";
import App from "./App";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useMatch,
} from "react-router-dom";
import Announcement from "./components/others/announcement/Announcement";
import Group from "components/groupfeed/Group";
import FanFeed from "./components/fanfeed/FanFeed";
import Shop from "./components/shop/Shop";
import ShopItemDetail from "./components/shop/ShopItemDetail";
import "./index.css";
import Header from "./components/common/header/Header";
import ArtistHeader from "./components/common/header/ArtistPageMenu";
import Signup from "./components/auth/SignUp";

import axios from "axios";
import MyPage from "components/mypage/MyPage";

// EC2 서버에 직접 보낼 때
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
      <Route path="/announcement" element={<Announcement />}></Route>
      <Route path="/group" element={<Group />}></Route>
      <Route path="/seventeen" element={<FanFeed />}></Route>
      <Route path="/seventeen/shop/" element={<Shop />}></Route>

      <Route path="/seventeen/shop*" element={<ShopItemDetail />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>,
  container
);
