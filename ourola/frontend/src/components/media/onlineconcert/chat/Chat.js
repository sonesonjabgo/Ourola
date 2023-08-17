import { useEffect, useRef, useState } from "react";
import ChatList from "./ChatList";
import "../../../../style/media/onlineconcert/chat/Chat.css";
import send from "../../../../assets/icons/send.png";

const Chat = ({ sessionId, nickname, isAdminOrArtist }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);
  const [msgText, setMsgText] = useState("");
  //   const [msgRef, setMsgRef] = useRef();

  const webSocketUrl = "wss://i9d204.p.ssafy.io:8001/ws/chat";
  const ws = useRef(null);

  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      console.log("ws.current: ", ws.current);
      let wss = new WebSocket(webSocketUrl);
      console.log(wss);
    }

    ws.current.onopen = () => {
      console.log("WebSocket connection established.");
      setSocketConnected(true);
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

  // 소켓이 연결되었을 시에 send 메소드
  useEffect(() => {
    if (socketConnected) {
      ws.current.send(
        JSON.stringify({
          type: "ENTER",
          roomName: sessionId,
          sender: nickname,
          message: msgText,
          // boldNick: isAdminOrArtist,
        })
      );

      setSendMsg(true);
    }
  }, [socketConnected]);

  // send 후에 onmessage로 데이터 가져오기
  useEffect(() => {
    if (sendMsg) {
      ws.current.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        console.log(data);
        setItems((prevItems) => [...prevItems, data]);
      };
    }
  }, [sendMsg]);

  const sendEnter = () => {
    if (msgText) {
      const msg = {
        type: "ENTER",
        roomName: sessionId,
        sender: nickname,
        message: msgText,
        boldNick: isAdminOrArtist,
      };

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
      };

      ws.current.send(JSON.stringify(msg));

      // setItems([...items, msg]);
      console.log(items);
      setMsgText("");
    }
  };

  const handleChangeText = (e) => {
    setMsgText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);

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
          {/* <button onClick={sendMessage}>보내기</button> */}
          <div className="msgSendBtnWrapper">
            <img src={send} alt="" onClick={sendMessage} id="msgSendBtn"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
