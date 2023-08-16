import "../../style/groupfeed/ArtistFeedItem.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import ArtistFeedDetail from "./ArtistFeedDetail";
import axios from "axios";
import bookmarkempty from "../../assets/icons/bookmarkempty.png";
import bookmarkfill from "../../assets/icons/bookmarkfill.png";
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
  userInfo,
  getArtistFeed,
  files,
  artistNick,
}) => {
  const accessImg =
    "https://i9d204.p.ssafy.io:8001/file/getimg/artist-profile?id=" + artistId;

  const localHost = "http://localhost:8000";
  let getDate = createDate.split("T", 2);
  getDate[1] = getDate[1].split(".", 1);

  const [year, month, day] = getDate[0].split("-");
  const [hour, minute] = getDate[1][0].split(":");

  const formatTime = `${year.slice(2)}.${month}.${day} ${hour}:${minute}`;

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    document.getElementById("navbar").style.zIndex = 1;
    document.getElementById("groupPageMenuContainer").style.zIndex = 0;
    document.getElementById("artistList").style.visibility = "hidden";
  };

  const accessToken = sessionStorage.getItem("Authorization");

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
        const modifiedData = response.data.map((it) => {
          const getDate = it.createDate.split("T", 2);
          getDate[1] = getDate[1].split(".", 1);

          const [year, month, day] = getDate[0].split("-");
          const [hour, minute] = getDate[1][0].split(":");

          const formatTime = `${year.slice(
            2
          )}.${month}.${day} ${hour}:${minute}`;

          return {
            ...it,
            createDate: formatTime,
          };
        });

        setComment(modifiedData);
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

  const [thisFeedBookmark, setThisFeedBookmark] = useState(false);

  useEffect(() => {
    axios
      .get(`/${group}/feed/${id}/bookmark`, config)
      .then((response) => {
        setThisFeedBookmark(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wantBookmark = async () => {
    await axios.put(`/${group}/feed/${id}/bookmark`, ``, config);

    const feedBookmark = !thisFeedBookmark;

    setThisFeedBookmark(feedBookmark);
  };

  const wantBookmarkCancle = async () => {
    await axios.put(`/${group}/feed/${id}/bookmark`, ``, config);

    const feedBookmark = !thisFeedBookmark;

    setThisFeedBookmark(feedBookmark);
  };

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

  const location = useLocation();
  const nowGroup = location.pathname.split("/")[1];

  const deleteRequest = (event) => {
    event.preventDefault();

    axios
      .delete(`${nowGroup}/feed/remove/${id}`, config)
      .then((response) => {
        alert("피드가 삭제되었습니다");
        getArtistFeed((artistFeed) =>
          artistFeed.filter((feed) => feed.id !== id)
        );
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답을 반환한 경우
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          // 요청이 만들어졌지만 응답을 받지 못한 경우
          console.error("No response:", error.request);
        } else {
          // 그 외의 오류
          console.error("Error:", error.message);
        }
        alert("삭제 실패");
      });
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
              {artistNick}
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
          {userInfo.id === artistId || userInfo.role === "CHANNEL_ADMIN" ? (
            <button onClick={deleteRequest}>피드 삭제</button>
          ) : null}
          {thisFeedBookmark ? (
            <img
              src={bookmarkfill}
              alt="이미지가 없습니다."
              id="artistFeedBookmarkImg"
              className="artistFeedBookmarkImg"
              onClick={wantBookmarkCancle}
            ></img>
          ) : (
            <img
              src={bookmarkempty}
              alt="이미지가 없습니다."
              id="artistFeedBookmarkImg"
              className="artistFeedBookmarkImg"
              onClick={wantBookmark}
            ></img>
          )}
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
              setThisFeedBookmark,
              id,
              group,
              accessImg,
              artistName,
              formatTime,
              content,
              thisFeedLike,
              thisFeedBookmark,
              feedLikeSum,
              commentCount,
              comment,
              scrollPosition,
              files,
              artistNick,
            }}
          ></ArtistFeedDetail>
        )}
        <div id="artistFeedItemContent" className="artistFeedItemContent">
          <div className="feedImgContainer">
            {files?.length > 0 &&
              files?.map((file, index) => (
                <img
                  key={index}
                  src={`https://i9d204.p.ssafy.io:8001/file/getimg/feed-img/${file?.filePath}`}
                  alt={`File ${index}`}
                />
              ))}
          </div>
          <br></br>
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
