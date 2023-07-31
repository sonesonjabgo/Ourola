import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/announcement/Announcement";
import Artist from "./components/artistfeed/Artist";
import FanFeed from "./components/fanfeed/FanFeed";
import Signup from "./components/auth/Singup"
import "./index.css";

import axios from "axios";
axios.defaults.baseURL = "http://i9d204.p.ssafy.io:8001";
// axios.defaults.withCredentials = true;

const container = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/announcement" element={<Announcement />}></Route>
      <Route path="/artist" element={<Artist />}></Route>
      <Route path="/seventeen/feed" element={<FanFeed />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>,
  container
);
