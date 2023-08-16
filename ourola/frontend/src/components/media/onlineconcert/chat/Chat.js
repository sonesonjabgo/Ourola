import { useEffect, useRef, useState } from "react";
import ChatList from "./ChatList";
import "../../../../style/media/onlineconcert/chat/Chat.css";

const Chat = ({ sessionId, nickname, isAdminOrArtist }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);
  const [msgText, setMsgText] = useState("");
  //   const [msgRef, setMsgRef] = useRef();

  const webSocketUrl = "ws://localhost:8000/ws/chat";
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
      // displayMessage(message);
      // setItems((prevItems) => [...prevItems, message]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    sendEnter();

    return () => {
      console.log("clean up");
      ws.current.close();
    };
  }, []);

  const sendEnter = () => {
    if (msgText) {
      const msg = {
        type: "ENTER",
        roomName: sessionId,
        sender: nickname,
        message: msgText,
        boldNick: isAdminOrArtist,
        time: new Date(),
      };

      // console.log(msg);
      ws.current.send(JSON.stringify(msg));
      setMsgText("");
    }
  };

  const sendMessage = () => {
    if (msgText) {
      const msg = {
        type: "TALK",
        roomName: sessionId,
        sender: nickname,
        message: msgText,
        boldNick: isAdminOrArtist,
        time: new Date(),
      };
      // console.log(msg);
      // console.log(items);
      ws.current.send(JSON.stringify(msg));
      setItems([...items, msg]);
      console.log(items);
      setMsgText("");
    }
  };

  // const displayMessage = (message) => {};

  const handleChangeText = (e) => {
    setMsgText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatMain">
      <div id="chatBody" className="chatBody">
        <ChatList msgList={items} myNick={nickname} />
      </div>
      <div id="chatFooter" className="chatFooter">
        <div id="chatFooterContent" className="chatFooterContent">
          <input
            name="msg"
            id="messageInput"
            placeholder="메시지를 입력하세요..."
            value={msgText}
            onChange={handleChangeText}
            onKeyDown={handleKeyDown}
          ></input>
          <button onClick={sendMessage}>보내기</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
