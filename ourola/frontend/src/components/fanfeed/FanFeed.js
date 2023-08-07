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
  const [groupInfo, setGroupInfo] = useState();

  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`search/${group}`, config)
      .then((response) => {
        setGroupInfo(response.data.groupInfo);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("현재 접속 중인 페이지의 그룹 정보를 불러올 수 없어 이 글을 보고 계십니다", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`/${group}/feed`, config)
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

  return (
    <>
      <div className="contentContainer">
        <div className="buttonCreatefeedContainer">
          <CreateFeedButton />
        </div>
        <Link to="/announcement">
          <div className="onelineAnnouncementContainer">
            <AnnouncementOneline />
          </div>
        </Link>
        <div className="fanfeedProfileContainer">
          <FanFeedProfile groupInfo={groupInfo}/>
        </div>
        <div id="group" className="fanfeedFeedContainer">
          {!loadingFeed ? (
              <FanFeedList group={group} fanFeed={fanFeed}/>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Fanfeed;
