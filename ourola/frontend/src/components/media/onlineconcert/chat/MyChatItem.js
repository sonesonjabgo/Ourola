import moment from "moment";
import "../../../../style/media/onlineconcert/chat/MyChatItem.css";
const MyChatItem = ({ msgItem }) => {
  return (
    <div id="msgItem" className="msgItem">
      <div id="myMsgItemHeader" className="myMsgItemHeader">
        <div> </div>
        {msgItem.boldNick ? (
          <span id="boldNick" className="nickname">
            {msgItem.sender}
          </span>
        ) : (
          <span className="nickname">{msgItem.sender}</span>
        )}
      </div>
      <div id="msgItemBody" className="msgItemBody">
        <div> </div>
        <div className="myMsgBodyWrapper">
          <div id="myMsgTimeArea" className="myMsgTimeArea">
            <span id="myMsgTime">{moment(msgItem.time).format("HH:mm")}</span>
          </div>
          <span id="myMsgText">{msgItem.message}</span>
        </div>

        {/* <div id="msgTextArea" className="msgTextArea"></div> */}
      </div>
    </div>
  );
};

export default MyChatItem;
