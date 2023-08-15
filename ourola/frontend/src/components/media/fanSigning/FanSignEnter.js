import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertEnter.css";

const FanSignEnter = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const [webcamStream, setWebcamStream] = useState(null);

  const [callList, setCallList] = useState([]);
  const [isListReady, setisListReady] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [nickname, setNickname] = useState("");
  // const [sessionId, setSessionId] = useState(location.state.sessionId);
  const sessionId = callList.sessionId;
  const callId = callList.id;
  
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/${group}/onlinecall/list`, config) // onlinecall
      .then((response) => {
        setCallList(response.data);
        setisListReady(true)
      })
      .catch((error) => {
        console.log("concert list 호출 오류 :: ", error);
      });
  }, []);

  useEffect(() => {
    // 웹캠 스트림 얻어오기
    async function getWebcamStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setWebcamStream(stream);
      } catch (error) {
        console.log("웹캠 스트림 얻어오기 실패 :: ", error);
      }
    }

    getWebcamStream();
    
    return () => {
      if (webcamStream) {
        webcamStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);


  
  useEffect(() => {
    if (isListReady){
    axios
      .get(`/${group}/onlinecall/check/${callId}`, config)
      .then(() => {
        setIsPassed(true)
      })
      .catch(() => {
        setIsPassed(false)
      });
    }}, [isListReady])

  useEffect(() => {
    if (isListReady){
    axios
      .get(`/${group}/online-concert/isAdmin`, config)
      .then((response) => {
        setIsAdmin(response.data);
      })
      .catch((error) => {
        console.log("isAdmin 호출 오류 :: ", error);
      });
  }}, [isListReady]);

  useEffect(() => {
    if (isListReady){
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        setNickname(response.data.nickname);
      })
      .catch((error) => {
        console.log("사용자 정보 호출 오류 :: ", error);
      });
  }}, [isListReady]);


  // 세션에 입장했을 때
  const handleSubmit = () => {
    if (!isAdmin) {
      // 시간 관련한 코드가 들어가야 함
      if (!isPassed) {
        alert("입장 대상이 아닙니다");
        return;
      }
      // if (!open) {
      //   alert("입장 시간이 아닙니다");
      //   return;
      // }
    }
    
    navigate(`/${group}/media/fanSigning/view`, {
      state: {
        nickname: nickname,
        sessionId: sessionId,
        isAdmin: isAdmin,
      },
    });
    // onJoinSession(nickname, sessionId, isAdmin);
  };


  return (
    <div id="join">
      <div id="join-dialog" className="jumbotron vertical-center">
        <h1> Join a video session </h1>
          {/* {webcamStream && (
            <video
              className="webcam-preview"
              srcObject={webcamStream}
              autoPlay
              playsInline
            ></video>
          )}
           */}
        <form className="form-group">
          <p>Participant: {nickname}</p>
          {webcamStream && (
            <video
              className="webcam-preview"
              ref={(videoRef) => {
                if (videoRef) {
                  videoRef.srcObject = webcamStream;
                }
              }}
              autoPlay
              playsInline
            ></video>
          )}
          <p className="text-center">
            <input
              className="btn btn-lg btn-success"
              name="입장하기"
              type="button"
              onClick={handleSubmit}
              value="JOIN"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default FanSignEnter;
