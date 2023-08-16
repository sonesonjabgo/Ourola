import { useEffect, useRef, useState } from "react";
import "../../../../style/media/onlineconcert/chat/Chat.css";

const Chat = ({ sessionId, nickname }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);

  //   const [msgRef, setMsgRef] = useRef();

  const webSocketUrl = "ws://i9d204.p.ssafy.io:8001/ws/chat";
  let ws = useRef(null);

  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
    }

    ws.current.onopen = () => {
      console.log("WebSocket connection established.");
      setSocketConnected(true);
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      displayMessage(message);
      setItems((prevItems) => [...prevItems, message]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    return () => {
      console.log("clean up");
      ws.current.close();
    };
  }, []);

  const sendEnter = () => {};

  const sendMessage = () => {};

  const displayMessage = (message) => {};

  return (
    <div className="chatMain">
      <div id="chatBody" className="chatBody"></div>
      <div id="chatFooter" className="chatFooter">
        <input
          name="msg"
          type="text"
          id="messageInput"
          placeholder="메시지를 입력하세요..."
        ></input>
        <button onClick={sendMessage}>보내기</button>
      </div>
    </div>
  );
};

export default Chat;
