import "../../style/artistfeed/ArtistFeedItem.css";
import React, { useEffect, useState } from "react";
import ArtistFeedDetail from "./ArtistFeedDetail";

const ArtistFeedItem = ({
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
    const { clientY } = event;
    setPrevPos(clientY);
    const scrollContainerHeight = window.innerHeight;
    window.scrollTo(0, scrollContainerHeight / 2);
  };

  return (
    <div id="ArtistFeedItem" className="ArtistFeedItem">
      <div id="ArtistFeedHeader" className="AritstFeedHeader">
        <div id="ArtistFeedInfo" className="ArtistFeedInfo">
          <img
            id="ArtistFeedProfile"
            className="ArtistFeedProfile"
            src={accessImg}
          ></img>
        </div>
        <div id="ArtistFeedInfo" className="ArtistFeedInfo">
          <div
            id="ArtistFeedArtistNameWrapper"
            className="ArtistFeedArtistNameWrapper"
          >
            <strong id="ArtistFeedArtistName" className="ArtistFeedArtistName">
              {artistName}
            </strong>
          </div>
          <div
            id="ArtistFeedCreateTimeWrapper"
            className="ArtistFeedCreateTimeWrapper"
          >
            <span id="ArtistFeedCreateTime" className="ArtistFeedCreateTime">
              {formatTime}
            </span>
          </div>
        </div>
        <div id="ArtistFeedBlank" className="ArtistFeedBlank">
          <div id="ArtistFeedBookmark" className="ArtistFeedBookmark">
            북마크 {/* 나중에 북마크 표시 추가 */}
          </div>
        </div>
      </div>
      <div
        id="ArtistFeedContent"
        className="ArtistFeedContent"
        onClick={showModal}
        onClickCapture={scrollToCenter}
      >
        {modalOpen && (
          <ArtistFeedDetail
            state={{
              setModalOpen,
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
        <div id="ArtistFeedContent" className="ArtistFeedContent">
          {content}
        </div>
      </div>
      <div id="ArtistFeedFooter" className="ArtistFeedFooter">
        <div id="ArtistFeedFeedInfo" className="ArtistFeedFeedInfo">
          <div id="ArtistFeedLike" className="ArtistFeedLike">
            <div id="ArtistFeedLikeImg" className="ArtistFeedLikeImg">
              좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
            </div>
            <div id="ArtistFeedLikeCount" className="ArtistFeedLikeCount">
              {like}
            </div>
          </div>
          <div id="ArtistFeedComment" className="ArtistFeedComment">
            <div id="ArtistFeedCommentImg" className="ArtistFeedCommentImg">
              댓글 {/*  나중에 댓글 이미지로 수정필요 */}
            </div>
            <div id="ArtistFeedCommentCount" className="ArtistFeedCommentCount">
              {commentCount} {/*  나중에 댓글 갯수로 수정필요 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistFeedItem;
