import { Link } from "react-router-dom";
import "../../style/live/LiveItem.css";
import { useEffect, useState } from "react";
import axios from "axios";
import onAir from "../../assets/images/on-air.png";

const LiveItem = ({ group, liveInfo, userInfo }) => {
  const path = `/${group}/live/view`;

  return (
    <Link
      to={path}
      className="liveItem"
      state={{ liveInfo: liveInfo, userInfo: userInfo }}
    >
      <div className="liveInfo">
        <div className="liveInfoTextWrapper">
          <span className="liveText">{liveInfo.title}</span>
        </div>
        <div className="liveImageWrapper">
          <img className="liveImg" src={onAir} alt=""></img>
        </div>
      </div>
    </Link>
  );
};

export default LiveItem;
