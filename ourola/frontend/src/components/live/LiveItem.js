import { Link } from "react-router-dom";
import "../../style/live/LiveItem.css";
import { useEffect, useState } from "react";
import axios from "axios";
import onAir from "../../assets/images/on-air.png";

const LiveItem = ({ group, liveInfo }) => {
  const path = `/${group}/live/view`;

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log("사용자 정보 호출 오류 :: ", error);
      });
  }, []);

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
