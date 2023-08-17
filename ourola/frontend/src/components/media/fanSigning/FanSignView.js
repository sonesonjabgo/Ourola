import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// import "./App.css";
import UserVideoComponent from "./UserVideoComponent";
import FanSignEnter from "./FanSignEnter";
import FanSignPublisher from "./FanSignVideoPublisher";
import FanSignSubscriber from "./FanSignVideoSubscriber";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import spinner from "../../../assets/loading/loadingSpinner.gif"

import "../../../style/media/fanSigning/FanSigningViewer.css"

const FanSignView = () => {
  const navigate = useNavigate()
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const APPLICATION_SERVER_URL =
    process.env.NODE_ENV === "production"
      ? ""
      : `https://i9d204.p.ssafy.io:8001/${group}/onlinecall`;

  const location = useLocation();

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const id = location.state.id;
  const nickname = location.state.nickname;
  const sessionId = location.state.sessionId;
  const isAdmin = location.state.isAdmin;

  const [session, setSession] = useState(undefined);
  // 화면
  const [mainStreamManager, setMainStreamManager] = useState(undefined);
  // 스트리머
  const [publisher, setPublisher] = useState(undefined);
  // 참가자
  const [subscribers, setSubscribers] = useState([]);
  // ...?
  const [currentVideoDevice, setCurrentVideoDevice] = useState({});

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

  const handleMainVideoStream = (stream) => {
    if (mainStreamManager !== stream) {
      setMainStreamManager(stream);
    }
  };

  const deleteSubscriber = (streamManager) => {
    let updatedSubscribers = subscribers.filter(
      (subscriber) => subscriber !== streamManager
    );
    setSubscribers(updatedSubscribers);
  };

  const joinSession = async () => {
    const OV = new OpenVidu();
    OV.enableProdMode();
    OVRef.current = OV; // OV 인스턴스를 useRef에 저장

    const mySession = OV.initSession();
    setSession(mySession);
    // setNickname((nickname) => {
    //   return nick;
    // });
    // setSessionId((sessionId) => {
    //   return sid;
    // });

    // console.log(sessionId);

    // --- 3) Specify the actions when events take place in the session ---
    mySession.on("streamCreated", (event) => {
      // Subscribe to the Stream to receive it. Second parameter is undefined
      // so OpenVidu doesn't create an HTML video by its own
      const subscriber = mySession.subscribe(event.stream, undefined);
      console.log(event.stream);
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
      // --- 5) Get your own camera stream ---
      const publisher = await OV.initPublisherAsync(undefined, {
        audioSource: undefined,
        videoSource: undefined,
        publishAudio: true,
        publishVideo: true,
        resolution: "640x480",
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
      // setSubscribers([]);
      // setNickname(nickname);
      // setSessionId(sessionId);
    } catch (error) {
      console.log(
        "There was an error connecting to the session:",
        error.code,
        error.message
      );
    }
  };

  const leaveSession = () => {
    if (session) {
      session.disconnect();
    }

    setSession(undefined);
    setSubscribers([]);
    // setSessionId("");
    setMainStreamManager(undefined);
    setPublisher(undefined);
    navigate('/')
  };

  const switchCamera = async () => {
    try {
      const devices = await OVRef.current.getDevices(); // useRef로 관리한 OV 인스턴스를 사용
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices && videoDevices.length > 1) {
        const newVideoDevice = videoDevices.filter(
          (device) => device.deviceId !== currentVideoDevice.deviceId
        );

        if (newVideoDevice.length > 0) {
          const newPublisher = OVRef.current.initPublisher(undefined, {
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: true,
            publishVideo: true,
            mirror: true,
          });

          await session.unpublish(mainStreamManager);
          await session.publish(newPublisher);

          setMainStreamManager(newPublisher);
          setPublisher(newPublisher);
          setCurrentVideoDevice(newVideoDevice[0]);
        }
      }
    } catch (e) {
      console.error(e);
    }
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

  const onLeaveSession = () => {
    leaveSession();
  };

  const onSwitchCamera = () => {
    switchCamera();
  };

  return (
    <div className="container">
      <div className="viewer">
        <h1 className="sessionId">{sessionId}</h1>
        {/* {session === undefined ? (
          <FanSignEnter onJoinSession={onJoinSession} />
        ) : null} */}
        <div className="viewerContainer">
          <div className="viewerBox">
            {subscribers[0] !== undefined ? (
              <FanSignSubscriber
                mainStreamManager={subscribers[0]}
              />
            ) : (<img src={spinner}/>)}
          </div>

          <div className="viewerBox">
            {session !== undefined ? (
              <FanSignPublisher
                mainStreamManager={mainStreamManager}
                onLeaveSession={onLeaveSession}
                onSwitchCamera={onSwitchCamera}
              />
            ) : (<img src={spinner}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanSignView;
