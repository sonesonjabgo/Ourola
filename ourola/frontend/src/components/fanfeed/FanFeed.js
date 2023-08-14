import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CreateFeedButton from "./CreateFeedButton";
import AnnouncementOneline from "../others/announcement/AnnouncementOneline";
import FanFeedProfile from "./FanFeedProfile";
import FanFeedList from "./FanFeedList";
import "../../style/fanfeed/FanFeed.css";

function Fanfeed() {
  const location = useLocation();
  const group = location.pathname.split("/")[1];

  const [userInfo, setUserInfo] = useState(null);
  const [groupInfo, setGroupInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = sessionStorage.getItem("Authorization");

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
        console.error("현재 접속 중인 사용자 정보 불러오기 실패", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 현재 접속 중인 페이지의 그룹 정보 불러오기
  useEffect(() => {
    axios
      .get(`search/${group}`)
      .then((response) => {
        setGroupInfo(response.data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(
          "현재 접속 중인 페이지의 그룹 정보를 불러올 수 없어 이 글을 보고 계십니다",
          error
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (userInfo) {
    return (
      <>
        {isLoading ? (
          <div className="contentContainer">
            <div className="buttonCreatefeedContainer">
              <CreateFeedButton
                groupInfo={groupInfo}
                userInfo={userInfo}
                userRole={userInfo.role}
              />
            </div>
            <div className="onelineAnnouncementContainer">
              <Link
                to={
                  "https://i9d204.p.ssafy.io/" + group + "/others/announcement"
                }
              >
                <AnnouncementOneline group={group} />
              </Link>
            </div>
            <div className="fanfeedProfileContainer">
              <FanFeedProfile groupInfo={groupInfo} userInfo={userInfo} />
            </div>
            <div className="fanfeedFeedContainer">
              <FanFeedList userInfo={userInfo} userRole={userInfo.role} />
            </div>
          </div>
        ) : null}
      </>
    );
  } else {
    return null;
  }
}

export default Fanfeed;
