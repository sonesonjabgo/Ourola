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

  return (
    <>
      <div className="contentContainer">
        <div className="buttonCreatefeedContainer">
          <CreateFeedButton />
        </div>
        <div className="onelineAnnouncementContainer">
          <Link to={"https://i9d204.p.ssafy.io/" + group + "/announcement"}>
            <AnnouncementOneline group={group} />
          </Link>
        </div>
        <div className="fanfeedProfileContainer">
          <FanFeedProfile />
        </div>
        <div className="fanfeedFeedContainer">
          <FanFeedList />
        </div>
      </div>
    </>
  );
}

export default Fanfeed;
