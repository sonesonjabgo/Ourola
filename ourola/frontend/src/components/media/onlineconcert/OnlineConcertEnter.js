import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OnlineConcertEnter = () => {
  const location = useLocation();
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const [isAdmin, setIsAdmin] = useState(false);
  const [nickname, setNickname] = useState("");
  // const [sessionId, setSessionId] = useState(location.state.sessionId);
  const sessionId = location.state.sessionId;
  const isOpen = location.state.isOpen;

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  // 세션에 입장했을 때
  const handleSubmit = () => {
    if (!isAdmin && !isOpen) {
      alert("입장 시간이 아닙니다");
      return;
    }

    navigate(`/${group}/online-concert/view`, {
      state: {
        nickname: nickname,
        sessionId: sessionId,
        isAdmin: isAdmin,
      },
    });
    // onJoinSession(nickname, sessionId, isAdmin);
  };

  useEffect(() => {
    axios
      .get(`/${group}/online-concert/isAdmin`, config)
      .then((response) => {
        setIsAdmin(response.data);
      })
      .catch((error) => {
        console.log("isAdmin 호출 오류 :: ", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        setNickname(response.data.nickname);
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
      <div id="join-dialog" className="jumbotron vertical-center">
        <h1> Join a video session </h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <p>Participant: {nickname}</p>

          <p className="text-center">
            <input
              className="btn btn-lg btn-success"
              name="입장하기"
              type="submit"
              value="JOIN"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default OnlineConcertEnter;
