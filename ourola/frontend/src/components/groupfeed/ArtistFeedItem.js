import "../../style/groupfeed/ArtistFeedItem.css";
import React, { useEffect, useState } from "react";
import ArtistFeedDetail from "./ArtistFeedDetail";
import axios from "axios";
import bookmark from "../../assets/icons/bookmark.png";
import likeclick from "../../assets/icons/like.png";
import notlikeclick from "../../assets/icons/notlike.png";
import commentclick from "../../assets/icons/comment.png";

const ArtistFeedItem = ({
  id,
  group,
  artistId,
  artistProfileId,
  artistName,
  title,
  content,
  like,
  createDate,
}) => {
  const accessImg =
    "https://i9d204.p.ssafy.io:8001/file/getimg/artist-profile?id=" + artistId;

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

  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`/${id}/comment`, config)
      .then((response) => {
        setComment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const commentCount = comment.length;

  const [thisFeedLike, setThisFeedLike] = useState(false);

  useEffect(() => {
    axios
      .get(`/${group}/feed/${id}/like`, config)
      .then((response) => {
        setThisFeedLike(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [feedLikeSum, setFeedLikeSum] = useState(like);

  const wantLike = async () => {
    await axios.put(`/${group}/feed/${id}/like`, ``, config);

    const like = feedLikeSum + 1;
    const feedLike = !thisFeedLike;

    setThisFeedLike(feedLike);
    setFeedLikeSum(like);
  };

  const wantLikeCancle = async () => {
    await axios.put(`/${group}/feed/${id}/like`, ``, config);

    const like = feedLikeSum - 1;
    const feedLike = !thisFeedLike;

    setThisFeedLike(feedLike);
    setFeedLikeSum(like);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const openModalClickFunction = (event) => {
    showModal();
    setScrollPosition(window.pageYOffset);
    window.scrollTo(0, 120);
    document.body.style.overflow = "hidden";
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
          <img
            src={bookmark}
            alt="이미지가 없습니다."
            id="artistFeedBookmark"
            className="artistFeedBookmark"
          ></img>
        </div>
      </div>
      <div
        id="artistFeedContent"
        className="artistFeedContent"
        onClick={openModalClickFunction}
      >
        {modalOpen && (
          <ArtistFeedDetail
            state={{
              setModalOpen,
              setComment,
              setThisFeedLike,
              setFeedLikeSum,
              id,
              group,
              accessImg,
              artistName,
              formatTime,
              content,
              thisFeedLike,
              feedLikeSum,
              commentCount,
              comment,
              scrollPosition,
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
            {thisFeedLike ? (
              <img
                src={likeclick}
                alt="이미지가 없습니다."
                id="artistFeedLikeImg"
                className="artistFeedLikeImg"
                onClick={wantLikeCancle}
              ></img>
            ) : (
              <img
                src={notlikeclick}
                alt="이미지가 없습니다."
                id="artistFeedLikeImg"
                className="artistFeedLikeImg"
                onClick={wantLike}
              ></img>
            )}
            <div id="artistFeedLikeCount" className="artistFeedLikeCount">
              {feedLikeSum}
            </div>
          </div>
          <div id="artistFeedComment" className="artistFeedComment">
            <img
              src={commentclick}
              alt="이미지가 없습니다."
              id="artistFeedCommentImg"
              className="artistFeedCommentImg"
            ></img>
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
