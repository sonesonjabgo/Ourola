import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/announcement/Announcement";
import FanFeed from "./components/fanfeed/FanFeed"
import './index.css'

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.withCredentials = true;

const container = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/announcement" element={<Announcement />}></Route>
      <Route path="/seventeen/feed" element={<FanFeed />} />
    </Routes>
  </BrowserRouter>,
  container
);
