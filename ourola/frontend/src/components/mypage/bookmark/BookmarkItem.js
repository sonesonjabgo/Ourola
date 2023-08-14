import moment from "moment";
import React, { useState } from "react";
import "../../../style/mypage/bookmark/BookmarkItem.css";

const BookmarkItem = ({ item }) => {
  const feed = item.feedDto;
  const FAN = 1;
  const ARTIST = 2;

  const type = item.type;
  const [nickname, setNickname] = useState("임시닉");
  const createDate = moment(new Date(feed.createDate)).format(
    "YYYY.MM.DD HH:mm"
  );
  const content = feed.content;
  const fileList = feed.fileList;
  const fileUrl = "https://i9d204.p.ssafy.io:8001/file/getimg/feed-img/";

  const profileUrl = "https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=";
  const profileImg =
    type === FAN
      ? profileUrl + feed.fanDto.profileFileDto.id
      : profileUrl + feed.artistDto.profileFileDto.id;

  return (
    <div className="bookmarkItemWrapper">
      <div className="bookmarkItemHeader">
        <div className="bookmarkFeedProfileWrapper">
          <div className="bookmarkFeedProfileImg">
            <img className="bookmarkProfileImg" src={profileImg} alt=""></img>
          </div>
          <div className="bookmarkFeedProfileInfo">
            <div className="bookmarkFeedNickname">{nickname}</div>
            <div className="bookmarkFeedCreateDate">{createDate}</div>
          </div>
        </div>
      </div>
      <div className="bookmarkItemBody">
        {fileList.length === 0 ? (
          <div className="bookmarkContent">{content}</div>
        ) : (
          <img
            className="bookmarkContentImg"
            src={fileUrl + fileList[0].filePath}
            alt=""
          ></img>
        )}
      </div>
      <div className="bookmarkItemFooter"></div>
    </div>
  );
};
export default BookmarkItem;
