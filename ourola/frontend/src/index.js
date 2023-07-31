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
import Announcement from "./components/announcement/Announcement";
import Artist from "./components/artistfeed/Artist";
import FanFeed from "./components/fanfeed/FanFeed";
import Shop from "./components/shop/Shop";
import ShopItemDetail from "./components/shop/ShopItemDetail";
import "./index.css";
import Header from "./components/header/Header";
import ArtistHeader from "./components/header/ArtistPageMenu";

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
      <Route path="/artist" element={<Artist />}></Route>
      <Route path="/seventeen/feed" element={<FanFeed />}></Route>
      <Route path="/seventeen/shop" element={<Shop />}></Route>
      <Route
        path="/seventeen/shop/bak/detail"
        element={<ShopItemDetail />}
      ></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
    </Routes>
  </BrowserRouter>,
  container
);
