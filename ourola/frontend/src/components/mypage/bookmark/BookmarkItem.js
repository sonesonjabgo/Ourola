import moment from "moment";
import React, { useState } from "react";
import "../../../style/mypage/bookmark/BookmarkItem.css";
import BookmarkDetail from "./BookmarkDetail";

const BookmarkItem = ({ setBookmarkList, item }) => {
  const feed = item.feedDto;
  const FAN = 1;
  const ARTIST = 2;
  console.log(item);
  const type = feed.type;
  const nickname =
    type === FAN ? feed.fanDto.nickname : feed.artistDto.nickname;
  const createDate = moment(new Date(feed.createDate))
    .subtract(9, "hours")
    .format("YYYY.MM.DD HH:mm");
  const content = feed.content;
  const fileList = feed.fileList;
  const fileUrl = "https://i9d204.p.ssafy.io:8001/file/getimg/feed-img/";

  const profileUrl = "https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=";
  const profileImg =
    type === FAN
      ? profileUrl + feed.fanDto.profileFileDto.id
      : profileUrl + feed.artistDto.profileFileDto.id;

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    document.getElementById("navbar").style.zIndex = 1;
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const openModalClickFunction = (event) => {
    showModal();
    setScrollPosition(window.pageYOffset);
    window.scrollTo(0, 120);
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      {modalOpen ? (
        <BookmarkDetail
          setBookmarkList={setBookmarkList}
          setModalOpen={setModalOpen}
          scrollPosition={scrollPosition}
          feed={feed}
        ></BookmarkDetail>
      ) : (
        <div className="bookmarkItemWrapper" onClick={openModalClickFunction}>
          <div className="bookmarkItemHeader">
            <div className="bookmarkFeedProfileWrapper">
              <div className="bookmarkFeedProfileImg">
                <img
                  className="bookmarkProfileImg"
                  src={profileImg}
                  alt=""
                ></img>
              </div>
              <div className="bookmarkFeedProfileInfo">
                {}
                <div className="bookmarkFeedNickname">{nickname}</div>
                <div className="bookmarkFeedCreateDate">{createDate}</div>
              </div>
            </div>
          </div>
          <div className="bookmarkItemBody">
            {fileList.length === 0 ? (
              <div className="bookmarkContent">게시글을 올렸습니다.</div>
            ) : (
              <div className="bookmarkContent">사진을 올렸습니다.</div>
            )}
          </div>
          <div className="bookmarkItemFooter"></div>
        </div>
      )}
    </div>
  );
};
export default BookmarkItem;
