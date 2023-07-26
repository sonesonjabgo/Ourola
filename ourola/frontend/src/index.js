import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/announcement/Announcement";
import Artist from "./components/artist/Artist";
import "./index.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.withCredentials = true;

const container = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/announcement" element={<Announcement />}></Route>
      <Route path="/artist" element={<Artist />}></Route>
    </Routes>
  </BrowserRouter>,
  container
);
