import React, { useState, useEffect } from 'react';
import { OpenVidu } from 'openvidu-browser';

const FanSigning = () => {
  const [session, setSession] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  useEffect(() => {
    const initializeOpenVidu = async () => {
      try {
        // OpenVidu 객체 초기화
        const OV = new OpenVidu();

        // 세션 생성
        const session = OV.initSession();

        // 세션에 연결
        await session.connect('YOUR_OPENVIDU_SECRET');

        setSession(session);

        // 발행자 생성
        const publisher = OV.initPublisher('publisher', {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: audioEnabled,
          publishVideo: videoEnabled,
          resolution: '640x480',
          frameRate: 30,
          insertMode: 'APPEND',
        });

        // 발행자 스트림 발행
        session.publish(publisher);
        setPublisher(publisher);
      } catch (error) {
        console.error('OpenVidu 초기화 에러:', error);
      }
    };

    initializeOpenVidu();
  }, [audioEnabled, videoEnabled]);

  const toggleAudio = () => {
    publisher && publisher.publishAudio(!audioEnabled);
    setAudioEnabled(!audioEnabled);
  };

  const toggleVideo = () => {
    publisher && publisher.publishVideo(!videoEnabled);
    setVideoEnabled(!videoEnabled);
  };

  return (
    <div>
      <div>
        <button onClick={toggleAudio}>
          {audioEnabled ? '음소거 해제' : '음소거'}
        </button>
        <button onClick={toggleVideo}>
          {videoEnabled ? '카메라 끄기' : '카메라 켜기'}
        </button>
      </div>
      <div id="publisher">{publisher && publisher.getVideoElement()}</div>
      <div id="subscribers"></div>
    </div>
  );
};

export default FanSigning;
