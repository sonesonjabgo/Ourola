import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertEnter.css";
import moment from "moment";

const OnlineConcertEnter = () => {
  const location = useLocation();

  const concertInfo = location.state.concertInfo;
  const group = concertInfo.groupDto.name;
  const fileUrl =
    "https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/" +
    concertInfo.filePath;

  const startTime = new Date(concertInfo.startTime);
  const beginTime = new Date(concertInfo.startTime);

  beginTime.setMinutes(beginTime.getMinutes() - 10);

  const [userInfo, setUserInfo] = useState(undefined);
  const navigate = useNavigate();

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  // 세션에 입장했을 때
  const onEnterClick = () => {
    //채널 관리자
    if (userInfo.role === "CHANNEL_ADMIN" && userInfo.groupDto.name === group) {
      if (concertInfo.open === false) {
        axios
          .put(
            `/${group}/online-concert/open/${concertInfo.id}?open=true`,
            {},
            config
          )
          .then((response) => {
            concertInfo.open = true;
            console.log(response);
          })
          .catch((error) => console.log(error));
      }
    } else {
      // 일반 사용자(팬)일 때
      if (new Date() < beginTime) {
        alert("입장 시간이 아닙니다.");
        return;
      }
    }

    navigate(`/${group}/media/online-concert/view`, {
      state: { concertInfo: concertInfo, userInfo: userInfo },
    });
  };

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

  // style={{ backgroundImage: `url(${fileUrl})` }}
  return (
    <div
      id="onlineConcertEnterBackGround"
      className="onlineConcertEnterBackGround"
      style={{ backgroundImage: `url(${fileUrl})` }}
    >
      <div className="onlineConcertEnterMain">
        <div className="titleArea">
          <div
            id="onlineConcertEnterTitle"
            className="onlineConcertEnterTitle vertical-center"
          >
            <h1 className="enterTitle"> {concertInfo.title} </h1>
          </div>
          <div className="onlineConcertTime">
            <h1 className="startTime">
              일시 : {moment(startTime).format("YYYY.MM.DD HH:mm")}
            </h1>
          </div>
        </div>
        <div id="concertEnterBtnArea" className="concertEnterBtnArea">
          <button id="enterBtn" className="enterBtn" onClick={onEnterClick}>
            입장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineConcertEnter;
