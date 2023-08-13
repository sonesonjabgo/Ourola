import BookmarkList from "./BookmarkList";
import "../../../style/mypage/bookmark/Bookmark.css";

const Bookmark = ({ config }) => {
  return (
    <div className="bookmarkMain">
      <div className="bookmarkMainTitle">
        <span className="titleText">북마크 </span>
      </div>
      <div className="bookmarkBody">
        <BookmarkList config={config} />
      </div>
    </div>
  );
};

export default Bookmark;
