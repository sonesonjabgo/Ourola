import "../../style/fanfeed/Group.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistFeed from "./FanFeed";
import AnnouncementOneline from "components/others/announcement/AnnouncementOneline";
import CreateFeedButton from "./CreateFeedButton";
import { Link } from "react-router-dom";
import FanFeedProfile from "components/fanfeed/FanFeedProfile";
import { useLocation } from "react-router-dom";

const Group = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const [loadingMember, setLodingMember] = useState(true);
  const [loadingFeed, setLodingFeed] = useState(true);
  const [artist, setArtist] = useState([]);
  const [artistFeed, setArtistFeed] = useState([]);
  const [artistFilter, setArtistFilter] = useState(-1);
  const [userInfo, setUserInfo] = useState(null);
  const [groupInfo, setGroupInfo] = useState(null);

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
        console.error(
          "현재 로그인된 사용자가 일반 유저가 아니므로 다른 api 사용",
          error
        );
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
        console.error(
          "현재 접속 중인 페이지의 그룹 정보를 불러올 수 없어 이 글을 보고 계십니다",
          error
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`/search/${group}/memberlist`, config)
      .then((response) => {
        setArtist(response.data);
        setLodingMember(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLodingMember(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`/${group}/feed/fan`, config)
      .then((response) => {
        setArtistFeed(response.data);
        setLodingFeed(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLodingFeed(false);
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

  return (
    <div id="group" className="group">
      {!loadingMember && !loadingFeed ? (
        <div id="groupContent" className="groupContent">
          <div
            id="buttonCreatefeedContainer"
            className="buttonCreatefeedContainer"
          >
            {groupInfo && userInfo ? (
              <CreateFeedButton
                groupInfo={groupInfo}
                userInfo={userInfo}
                userRole={userInfo.role}
              />
            ) : null}
          </div>
          <div className="onelineAnnouncementContainer">
            <Link to={`/${group}/others/announcement`}>
              <AnnouncementOneline group={group} />
            </Link>
          </div>
          <div id="feedContent" className="feedContent">
            <div id="fanFeedProfile" className="fanFeedProfile">
              <FanFeedProfile groupInfo={groupInfo} userInfo={userInfo} />
            </div>
            <ArtistFeed
              group={group}
              setArtistFeed={setArtistFeed}
              scrollY={scrollY}
              artistFilter={artistFilter}
              artistFeed={artistFeed}
              userInfo={userInfo}
              getArtistFeed={setArtistFeed}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Group;
