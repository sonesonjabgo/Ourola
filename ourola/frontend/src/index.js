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
import Group from "./components/groupfeed/Group";
import FanFeed from "./components/fanfeed/FanFeed";
import Shop from "./components/shop/Shop";
import ShopItemDetail from "./components/shop/ShopItemDetail";
import "./index.css";
import Header from "./components/common/header/Header";
import ArtistHeader from "./components/common/header/ArtistPageMenu";
import Signup from "./components/auth/Singup";

import axios from "axios";
import MyPage from "components/mypage/MyPage";
axios.defaults.baseURL = "http://i9d204.p.ssafy.io:8001";
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
      <Route path="/seventeen/feed" element={<FanFeed />}></Route>
      <Route path="/seventeen/shop" element={<Shop />}></Route>
      <Route
        path="/seventeen/shop/bak/detail"
        element={<ShopItemDetail />}
      ></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>,
  container
);
