import "../../style/groupfeed/ArtistFeedItem.css";
import React, { useEffect, useState } from "react";
import ArtistFeedDetail from "./ArtistFeedDetail";

const ArtistFeedItem = ({
  id,
  artist,
  artistId,
  artistProfileId,
  artistName,
  title,
  content,
  like,
  commentCount,
  createDate,
}) => {
  const backendPort = 8000;

  const accessImg =
    "http://localhost:" +
    backendPort +
    "/file/getimg/artist-profile?id=" +
    artistProfileId;

  const dateObj = new Date(createDate);

  const year = dateObj.getFullYear().toString().substr(-2);
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  const hour = dateObj.getHours().toString().padStart(2, "0");
  const minute = dateObj.getMinutes().toString().padStart(2, "0");

  const formatTime = `${year}.${month}.${day} ${hour}:${minute}`;

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  // 좋아요 기능 수정 필요
  // const [loading, setLoding] = useState(true);
  // const [likeList, setLikeList] = useState(true);

  // const config = {
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDc2MjgzNiwiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.fNnUPvVsJPlOxollDYRcvneC9DW9-wa26OdcnfhLAjAYcJ_zSADfmubeZade8MRO5vDLGxb9_U5jXfIqaOlyNw",
  //     "Content-Type": "application/json",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:${backendPort}/${artist}/feed/like/list`, config)
  //     .then((response) => {
  //       setLikeList(response.data);
  //       setLoding(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data : ", error);
  //       setLoding(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [prevPos, setPrevPos] = useState(-1);

  const scrollToCenter = (event) => {
    const offsetFromTop = event.target.getBoundingClientRect().top;
    const scrollContainerHeight = window.innerHeight;
    window.scrollTo(0, scrollContainerHeight / 4);
  };

  const clickFunction = (event) => {
    showModal();
    // scrollToCenter(event);
  };

  return (
    <div id="artistFeedItem" className="artistFeedItem">
      <div id="aritstFeedHeader" className="aritstFeedHeader">
        <div id="artistFeedInfo" className="artistFeedInfo">
          <img
            id="artistFeedProfile"
            className="artistFeedProfile"
            src={accessImg}
          ></img>
        </div>
        <div id="artistFeedInfo" className="artistFeedInfo">
          <div
            id="artistFeedArtistNameWrapper"
            className="artistFeedArtistNameWrapper"
          >
            <strong id="artistFeedArtistName" className="artistFeedArtistName">
              {artistName}
            </strong>
          </div>
          <div
            id="artistFeedCreateTimeWrapper"
            className="artistFeedCreateTimeWrapper"
          >
            <span id="artistFeedCreateTime" className="artistFeedCreateTime">
              {formatTime}
            </span>
          </div>
        </div>
        <div id="artistFeedBlank" className="artistFeedBlank">
          <div id="artistFeedBookmark" className="artistFeedBookmark">
            북마크 {/* 나중에 북마크 표시 추가 */}
          </div>
        </div>
      </div>
      <div
        id="artistFeedContent"
        className="artistFeedContent"
        onClick={clickFunction}
      >
        {modalOpen && (
          <ArtistFeedDetail
            state={{
              setModalOpen,
              id,
              artist,
              accessImg,
              artistName,
              formatTime,
              title,
              content,
              like,
              commentCount,
              prevPos,
            }}
          ></ArtistFeedDetail>
        )}
        <div id="artistFeedContent" className="artistFeedContent">
          {content}
        </div>
      </div>
      <div id="artistFeedFooter" className="artistFeedFooter">
        <div id="artistFeedFeedInfo" className="artistFeedFeedInfo">
          <div id="artistFeedLike" className="artistFeedLike">
            <div id="artistFeedLikeImg" className="artistFeedLikeImg">
              좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
            </div>
            <div id="artistFeedLikeCount" className="artistFeedLikeCount">
              {like}
            </div>
          </div>
          <div id="artistFeedComment" className="artistFeedComment">
            <div id="artistFeedCommentImg" className="artistFeedCommentImg">
              댓글 {/*  나중에 댓글 이미지로 수정필요 */}
            </div>
            <div
              id="artistFeedCommentRealCount"
              className="artistFeedCommentRealCount"
            >
              {commentCount} {/*  나중에 댓글 갯수로 수정필요 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistFeedItem;
