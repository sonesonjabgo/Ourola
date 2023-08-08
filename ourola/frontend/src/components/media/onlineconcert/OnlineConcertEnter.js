import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const OnlineConcertEnter = ({ onJoinSession }) => {
  const location = useLocation();
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];
  // const sessionId = location.state.sessionId;
  // const nickname = location.state.nickname;
  const [isAdmin, setIsAdmin] = useState(false);

  const [nickname, setNickname] = useState("");
  const [sessionId, setSessionId] = useState("");

  const accessToken = localStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  // sessionId 바뀌었을 때
  const handleChangeState = (e) => {
    setSessionId(e.target.value);
  };

  // 세션에 입장했을 때
  const handleSubmit = () => {
    onJoinSession(nickname, sessionId, isAdmin);
    setNickname("");
    setSessionId("");
  };

  useEffect(() => {
    axios
      .get(`${group}/online-concert/isAdmin`, config)
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
          {isAdmin ? (
            <p>
              <label> Session: </label>
              <input
                className="form-control"
                type="text"
                id="sessionId"
                value={sessionId}
                onChange={handleChangeState}
                required
              />
            </p>
          ) : null}

          <p>
            <label>Participant: </label>
            <input
              className="form-control"
              type="text"
              id="userName"
              value={nickname}
              onChange={handleChangeState}
              required
            />
          </p>

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
