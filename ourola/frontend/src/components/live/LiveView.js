import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/live/LiveView.css";
import Chat from "./chat/Chat";
import LiveVideo from "./LiveVideo";

const LiveView = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const APPLICATION_SERVER_URL =
    process.env.NODE_ENV === "production"
      ? ""
      : `https://i9d204.p.ssafy.io:8001/${group}/live`;

  const location = useLocation();
  const navigate = useNavigate();

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const liveInfo = location.state.liveInfo;
  const userInfo = location.state.userInfo;
  const isAdmin =
    userInfo.role === "CHANNEL_ADMIN" && userInfo.groupDto.name === group;

  const isArtist =
    userInfo.role === "ARTIST" && userInfo.groupDto.name === group;

  const nickname = userInfo.nickname;
  const sessionId = liveInfo.sessionId;

  const [OV, setOV] = useState(new OpenVidu());
  const [session, setSession] = useState(undefined);
  // 화면
  const [mainStreamManager, setMainStreamManager] = useState(undefined);
  // 스트리머
  const [publisher, setPublisher] = useState(undefined);
  // 참가자
  const [subscribers, setSubscribers] = useState([]);
  // ...?

  const OVRef = useRef(null); // OV 인스턴스를 관리하기 위한 useRef

  // 페이지를 벗어날 때 onbeforeunload 함수 실행되도록 이벤트 리스너 설정
  useEffect(() => {
    window.addEventListener("beforeunload", onbeforeunload);
    return () => {
      window.removeEventListener("beforeunload", onbeforeunload);
    };
  }, []);

  useEffect(() => {
    joinSession();
  }, []);

  const onbeforeunload = (event) => {
    leaveSession();
  };

  const deleteSubscriber = (streamManager) => {
    let updatedSubscribers = subscribers.filter(
      (subscriber) => subscriber !== streamManager
    );
    setSubscribers(updatedSubscribers);
  };

  const joinSession = async () => {
    OV.enableProdMode();
    OVRef.current = OV; // OV 인스턴스를 useRef에 저장

    const mySession = OV.initSession();
    setSession(mySession);

    // --- 3) Specify the actions when events take place in the session ---
    mySession.on("streamCreated", (event) => {
      // Subscribe to the Stream to receive it. Second parameter is undefined
      // so OpenVidu doesn't create an HTML video by its own
      const subscriber = mySession.subscribe(event.stream, undefined);
      setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
    });

    mySession.on("streamDestroyed", (event) => {
      // Remove the stream from 'subscribers' array
      deleteSubscriber(event.stream.streamManager);
    });

    mySession.on("exception", (exception) => {
      console.warn(exception);
    });

    // --- 4) Connect to the session with a valid user token ---
    try {
      const token = await getToken(sessionId);
      await mySession.connect(token, { clientData: nickname });
      if (isAdmin) {
        // --- 5) Get your own camera stream ---
        const publisher = await OV.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: "800x600",
          frameRate: 30,
          insertMode: "APPEND",
          mirror: false,
        });

        // --- 6) Publish your stream ---
        mySession.publish(publisher);

        const devices = await OV.getDevices();
        const videoDevices = devices.filter(
          (device) => device.kind === "videoinput"
        );
        const currentVideoDeviceId = publisher.stream
          .getMediaStream()
          .getVideoTracks()[0]
          .getSettings().deviceId;

        const currentVideoDevice = videoDevices.find(
          (device) => device.deviceId === currentVideoDeviceId
        );

        // Set the main video in the page to display our webcam and store our Publisher
        setMainStreamManager(publisher);
        setPublisher(publisher);
        setSubscribers([]);
      }
    } catch (error) {
      console.log(
        "There was an error connecting to the session:",
        error.code,
        error.message
      );
    }
  };

  const leaveSession = async () => {
    if (session) {
      session.disconnect();
    }

    setOV(undefined);
    setSession(undefined);
    setSubscribers([]);
    setMainStreamManager(undefined);
    setPublisher(undefined);

    if (isAdmin) {
      await axios
        .delete(`/${group}/live/${liveInfo.id}`, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("라이브 삭제 에러 :: ", error);
        });
    }

    const path = `/${group}/live/list`;
    navigate(path);
  };

  const getToken = async (sessionId) => {
    const sid = await createSession(sessionId);
    return await createToken(sid);
  };

  const createSession = async (sessionId) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + "/api/sessions",
      { customSessionId: sessionId },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // the sessionId
  };

  const createToken = async (sessionId) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + "/api/sessions/" + sessionId + "/connections",
      {},
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  };

  const onJoinSession = (nick, sid, isAdmin) => {
    joinSession(nick, sid, isAdmin);
  };

  const onLeaveLive = () => {
    leaveSession();
  };

  return (
    <div className="liveViewMain">
      <div className="liveViewHeader">
        <div> </div>
        <div className="leaveBtnArea">
          <input
            className="buttonLeaveLive"
            type="button"
            id="buttonLeaveLive"
            onClick={onLeaveLive}
            value="나가기"
          />
        </div>
      </div>
      <div className="liveViewBody">
        <div className="liveVideo">
          {session !== undefined ? (
            <LiveVideo
              sessionId={sessionId}
              mainStreamManager={mainStreamManager}
            />
          ) : null}

          <LiveVideo sessionId={sessionId} mainStreamManager={subscribers[0]} />
        </div>
        <div className="liveChat">
          <Chat
            sessionId={sessionId}
            nickname={nickname}
            isAdminOrArtist={isAdmin || isArtist}
          />
        </div>
      </div>
    </div>
  );
};
export default LiveView;
