import { Link } from "react-router-dom";
import "../../style/live/LiveItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const LiveItem = ({ group, liveInfo }) => {
  const path = `/${group}/live/view`;
  const fileUrl =
    "https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/" + liveInfo.filePath;

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
        {/* <div className="liveImageWrapper">
          <img className="liveImg" src={fileUrl} alt=""></img>
        </div> */}
        <div className="liveInfoTextWrapper">
          <span className="liveText">{liveInfo.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default LiveItem;
