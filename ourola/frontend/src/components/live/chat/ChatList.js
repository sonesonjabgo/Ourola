import ChatItem from "./ChatItem";
import MyChatItem from "./MyChatItem";

const ChatList = ({ msgList, myNick }) => {
  return (
    <div>
      {msgList.map((it) =>
        it.sender === myNick ? (
          <MyChatItem msgItem={it} />
        ) : (
          <ChatItem msgItem={it} />
        )
      )}
    </div>
  );
};

export default ChatList;
