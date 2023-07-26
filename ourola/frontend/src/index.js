import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/announcement/Announcement";
import './index.css'

const container = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/announcement" element={<Announcement />}></Route>
    </Routes>
  </BrowserRouter>,
  container
);
