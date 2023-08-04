import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// import "./App.css";
import UserVideoComponent from "./UserVideoComponent";
import OnlineConcertEnter from "./OnlineConcertEnter";
import OnlineConcertVideo from "./OnlineConcertVideo";

const APPLICATION_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? ""
    : "http://localhost:8000/BTS/online-concert";

const OnlineConcertView = ({ userName }) => {
  const accessToken = localStorage.getItem("Authorization");

  const [sessionId, setSessionId] = useState("");

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

  useEffect(() => {
    window.addEventListener("beforeunload", onbeforeunload);
    return () => {
      window.removeEventListener("beforeunload", onbeforeunload);
    };
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
      const token = await getToken();
      await mySession.connect(token, { clientData: userName });

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
      setSubscribers([]);
      // setMySessionId("SessionA");
      // setMyUserName("Participant" + Math.floor(Math.random() * 100));
      setSessionId("");
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
    setSessionId("");
    setMainStreamManager(undefined);
    setPublisher(undefined);
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

  const getToken = async () => {
    const sessionId = await createSession(sessionId);
    return await createToken(sessionId);
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

    console.log("createSession");
    console.log(response.data);
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

  const onJoinSession = ({ userName, sessionId }) => {
    setSessionId(sessionId);
    joinSession();
  };

  const onLeaveSession = () => {
    leaveSession();
  };

  const onSwitchCamera = () => {
    switchCamera();
  };

  return (
    <div className="container">
      {session === undefined ? (
        <OnlineConcertEnter onJoinSession={onJoinSession} />
      ) : null}

      {session !== undefined ? (
        <OnlineConcertVideo
          sessionId={sessionId}
          mainStreamManager={mainStreamManager}
          onLeaveSession={onLeaveSession}
          onSwitchCamera={onSwitchCamera}
        />
      ) : null}
    </div>
  );
};

export default OnlineConcertView;
