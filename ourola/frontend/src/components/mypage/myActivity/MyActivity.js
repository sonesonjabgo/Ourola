import { useState } from "react";
import MyPostList from "./MyPostList";
import MyCommentList from "./MyCommentList";
import "../../../style/mypage/myActivity/MyActivity.css";

const MyActivity = ({ config }) => {
  const mode = { POST: 0, COMMENT: 1 };
  const [sortMode, setSortMode] = useState(mode.POST);

  const onPostClick = () => {
    setSortMode(mode.POST);
  };

  const onCommentClick = () => {
    setSortMode(mode.COMMENT);
  };

  return (
    <div className="myActivityMain">
      <div className="myActivityTitle">
        <span className="myActivityTitleText">내 활동 </span>
      </div>
      <div className="myActivityMainSortArea">
        <div className="postBtnArea">
          <button className="myActivitySortBtn post" onClick={onPostClick}>
            포스트
          </button>
          <i />
        </div>
        <div className="commentBtnArea">
          <button
            className="myActivitySortBtn comment"
            onClick={onCommentClick}
          >
            댓글
          </button>
          <i />
        </div>
      </div>
      <div className="myActivityBody">
        {sortMode === mode.POST ? (
          <MyPostList config={config} />
        ) : (
          <MyCommentList config={config} />
        )}
      </div>
      <div className="myActicityFooter"></div>
    </div>
  );
};

export default MyActivity;
