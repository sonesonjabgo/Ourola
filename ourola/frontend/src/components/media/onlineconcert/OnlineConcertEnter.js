import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertEnter.css";

const OnlineConcertEnter = () => {
  const location = useLocation();
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  // const [isAdmin, setIsAdmin] = useState(false);
  // const [nickname, setNickname] = useState("");
  // const [sessionId, setSessionId] = useState(location.state.sessionId);
  // const sessionId = location.state.sessionId;
  // const open = location.state.open;
  const concertInfo = location.state.concertInfo;
  const sessionId = concertInfo.sessionId;
  const open = concertInfo.open;

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
  const handleSubmit = async () => {
    // if (isAdmin) {
    //   await axios
    //     .put(`/${group}/online-concert/open/2?open=false`)
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => console.log(error));
    // }
    // navigate(`/${group}/media/online-concert/view`, {
    //   state: {
    //     // nickname: nickname,
    //     sessionId: sessionId,
    //     // isAdmin: isAdmin,
    //   },
    // });
    // onJoinSession(nickname, sessionId, isAdmin);
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

  return (
    <div id="join">
      <div id="img-div">
        <img
          src="resources/images/openvidu_grey_bg_transp_cropped.png"
          alt="OpenVidu logo"
        />
      </div>
      <div
        id="OnlineConcertEnterTitle"
        className="OnlineConcertEnterTitle vertical-center"
      >
        <h1 className="enterTitle"> {concertInfo.title} </h1>
        {/* <form className="form-group" onSubmit={handleSubmit}>
          <p>{nickname}</p>

          <p className="text-center">
            <input
              className="enterBtn btn-lg btn-success"
              name="입장하기"
              type="submit"
              value="입장하기"
            />
          </p>
        </form> */}
        <button onClick={handleSubmit}>ddd</button>
      </div>
    </div>
  );
};

export default OnlineConcertEnter;
