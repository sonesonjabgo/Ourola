import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../common/header/Header";
import CreateFeedButton from "./CreateFeedButton";
import AnnouncementOneline from "../others/announcement/AnnouncementOneline";
import FanFeedProfile from "./FanFeedProfile";
import FanFeedList from "./FanFeedList";
import "../../style/fanfeed/FanFeed.css";
import { useLocation } from "react-router-dom";

function Fanfeed() {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const [loadingFeed, setLodingFeed] = useState(true);
  const [fanFeed, setFanFeed] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [groupInfo, setGroupInfo] = useState(null);


  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  // 현재 접속 중인 사용자의 정보 불러오기
  useEffect(() => {
    axios
      .get(`user/userinfo`, config)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error("현재 로그인된 사용자가 일반 유저가 아니므로 다른 api 사용", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // 현재 접속 중인 페이지의 그룹 정보 불러오기
  useEffect(() => {
    axios
      .get(`search/${group}`)
      .then((response) => {
        setGroupInfo(response.data);
      })
      .catch((error) => {
        console.error("현재 접속 중인 페이지의 그룹 정보를 불러올 수 없어 이 글을 보고 계십니다", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 현재 접속 중인 페이지의 그룹 전체 피드 불러오기
  useEffect(() => {
    axios
      .get(`/${group}/feed`)
      .then((response) => {
        setFanFeed(response.data);
        setLodingFeed(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLodingFeed(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userInfo)

if (groupInfo) {
  return (
    <>
      <div className="contentContainer">
        <div className="buttonCreatefeedContainer">
          <CreateFeedButton groupInfo = {groupInfo}/>
        </div>
        <div className="onelineAnnouncementContainer">
          <Link to={"https://i9d204.p.ssafy.io/" + group + "/announcement"}>
            <AnnouncementOneline group={group} />
          </Link>
        </div>
        <div className="fanfeedProfileContainer">
          <FanFeedProfile groupInfo = {groupInfo}/>
        </div>
        <div className="fanfeedFeedContainer">
          <FanFeedList fanFeed={fanFeed}/>
        </div>
      </div>
    </>
  );
} else {
  return null
}}

export default Fanfeed;
