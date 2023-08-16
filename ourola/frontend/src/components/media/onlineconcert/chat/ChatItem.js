import moment from "moment";
import "../../../../style/media/onlineconcert/chat/ChatItem.css";

const ChatItem = ({ msgItem }) => {
  return (
    <div id="msgItem" className="msgItem">
      <div id="msgItemHeader" className="msgItemHeader">
        {msgItem.boldNick ? (
          <span id="boldNick" className="nickname">
            {msgItem.sender}
          </span>
        ) : (
          <span className="nickname">{msgItem.sender}</span>
        )}
      </div>
      <div id="msgItemBody" className="msgItemBody">
        <span id="msgText">{msgItem.message}</span>
        {/* <div id="msgTextArea" className="msgTextArea"></div> */}

        <div id="msgTimeArea" className="msgTimeArea">
          <span id="msgTime">{moment(msgItem.time).format("HH:mm")}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
