import { Link, useNavigate } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const OnlineConcertItem = ({ group, concertInfo }) => {
  const [userInfo, setUserInfo] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const path = `/${group}/media/online-concert/enter`;
  const fileUrl =
    "https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/" +
    concertInfo.filePath;

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        setUserInfo(response.data);
        setIsAdmin(
          response.data.role === "CHANNEL_ADMIN" &&
            response.data.groupDto.name === group
        );
      })
      .catch((error) => {
        console.log("사용자 정보 호출 오류 :: ", error);
      });
  }, []);

  const onConcertClick = () => {
    if (!isAdmin && !concertInfo.open) {
      if (new Date(concertInfo.startTime).getDate() < new Date().getDate()) {
        alert("종료된 콘서트입니다.");
        return;
      }

      if (!concertInfo.open) {
        alert("시청할 수 없는 콘서트입니다.");
        return;
      }
    }

    navigate(path, {
      state: { concertInfo: concertInfo, userInfo: userInfo, config: config },
    });
  };

  return (
    <div className="onlineConcertItem" onClick={onConcertClick}>
      <div className="onlineConcertImageWrapper">
        <img className="concertImg" src={fileUrl} alt=""></img>
      </div>
      <div className="concertInfoTextWrapper">
        <span className="onlineConcertText">{concertInfo.title}</span>
      </div>
    </div>
  );
};

export default OnlineConcertItem;
