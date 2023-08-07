import React, { useState, useEffect } from 'react';
import { OpenVidu } from 'openvidu-browser';
import "../../../style/media/FanSigning.css"

const FanSigning = () => {
  const [session, setSession] = useState(null);
  const [publisher, setPublisher] = useState(null);

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
          publishAudio: true,
          publishVideo: true,
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
  }, []);

  useEffect(() => {
    if (session) {
      // 세션 이벤트 리스너 정의 (예: 새 참가자 입장)
      session.on('streamCreated', (event) => {
        // 새로운 원격 스트림 구독
        session.subscribe(event.stream, 'subscribers', {
          insertMode: 'APPEND',
        });
      });
    }
  }, [session]);

  return (
    <div>
      <div id="publisher">{publisher && publisher.getVideoElement()}</div>
      <div id="subscribers"></div>
    </div>
  );
};

export default FanSigning;
