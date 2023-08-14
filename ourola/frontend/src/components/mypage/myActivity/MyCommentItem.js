import moment from "moment";
import "../../../style/mypage/myActivity/MyCommentItem.css";
import remove from "../../../assets/icons/trashbin.png";

const MyCommentItem = ({ item, onRemove }) => {
  const feed = item.feedDto;
  const type =
    feed.type === 1 ? "commentItem fanFeed" : "commentItem artistFeed";

  const feedContent =
    feed.fileList.length === 0
      ? feed.content.substring(0, 80)
      : "사진을 올렸습니다.";
  const writer = feed.artistDto === null ? feed.fanDto : feed.artistDto;

  const commentContent = item.content.substring(0, 50);
  const createDate = moment(new Date(feed.createDate)).format(
    "YYYY.MM.DD HH:mm"
  );

  const handleRemove = () => {
    if (window.confirm(`정말로 삭제하시겠습니까?`)) {
      onRemove(feed.id, item.id);
    }
  };

  return (
    <div className={type}>
      <div className="commentItemHeader">
        <div className="headerText content">
          <span>{feedContent}</span>
        </div>
        <div className="headerText writer">
          <span>{writer.nickname}</span>
        </div>
      </div>
      <div className="commentItemBody">
        <div>
          <div className="bodyText content">
            <span>{commentContent}</span>
          </div>
          <div className="bodyText createDate">
            <span>{createDate}</span>
          </div>
        </div>
        <div className="removeBtnArea">
          <img
            src={remove}
            alt=""
            id="myCommentRemoveImg"
            className="myCommentRemoveImg"
            onClick={handleRemove}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MyCommentItem;
