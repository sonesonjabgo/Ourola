import "../../style/groupfeed/ArtistFeedDetail.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ArtistFeedComment from "./ArtistFeedComment";
import downarrow from "../../assets/icons/downarrow.png";
import send from "../../assets/icons/send.png";
import bookmarkempty from "../../assets/icons/bookmarkempty.png";
import bookmarkfill from "../../assets/icons/bookmarkfill.png";
import likeclick from "../../assets/icons/like.png";
import notlikeclick from "../../assets/icons/notlike.png";

const ArtistFeedDetail = (props) => {
  const setModalOpen = props.state.setModalOpen;

  const localHost = "http://localhost:8000";

  const closeModal = () => {
    setModalOpen(false);
  };

  const {
    id,
    group,
    accessImg,
    artistName,
    formatTime,
    content,
    commentCount,
    files,
    artistNick
  } = props.state;

  const comment = props.state.comment;
  const setComment = props.state.setComment;

  const modalRef = useRef(null);

  const thisFeedLike = props.state.thisFeedLike;
  const setThisFeedLike = props.state.setThisFeedLike;
  const feedLikeSum = props.state.feedLikeSum;
  const setFeedLikeSum = props.state.setFeedLikeSum;

  const thisFeedBookmark = props.state.thisFeedBookmark;
  const setThisFeedBookmark = props.state.setThisFeedBookmark;

  const scrollPosition = props.state.scrollPosition;

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        closeModal();
        window.scrollTo(0, scrollPosition);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [closeModal, scrollPosition]);

  const accessToken = sessionStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const closeModalClickFunction = (event) => {
    closeModal();
    window.scrollTo(0, scrollPosition);
    document.body.style.overflow = "auto";
    document.getElementById("navbar").style.zIndex = 999;
    document.getElementById("groupPageMenuContainer").style.zIndex = 998;
    document.getElementById("artistList").style.visibility = "visible";
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const [saveContent, setSaveContent] = useState("");

  const contentValueChange = (event) => {
    setSaveContent(event.target.value);
  };

  const commentPostFunction = async (event) => {
    const commentData = {
      feedDto: {
        id: id,
      },
      content: saveContent,
    };

    try {
      await axios.post(`/${id}/comment`, commentData, config);

      const newResult = await axios.get(`/${id}/comment`, config);

      const modifiedData = newResult.data.map((it) => {
        const getDate = it.createDate.split("T", 2);
        getDate[1] = getDate[1].split(".", 1);

        const [year, month, day] = getDate[0].split("-");
        const [hour, minute] = getDate[1][0].split(":");

        const formatTime = `${year.slice(2)}.${month}.${day} ${hour}:${minute}`;

        return {
          ...it,
          createDate: formatTime,
        };
      });

      setComment(modifiedData);
      setSaveContent("");
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

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

  const enterKeyPress = (event) => {
    if (event.key === "Enter") {
      commentPostFunction();
    }
  };

  return (
    <div>
      <div
        id="artistFeedBackGround"
        className="artistFeedBackGround"
        onMouseUp={closeModalClickFunction}
      >
        <div id="artistFeedModal" className="artistFeedModal">
          <div
            id="artistFeedContent"
            className="artistFeedContent"
            ref={modalRef}
            onMouseUp={handleModalClick}
          >
            <div id="artistFeedView" className="artistFeedView">
              <div
                id="artistFeedInfoAndContent"
                className="artistFeedInfoAndContent"
              >
                <div id="artistFeedHeader" className="artistFeedHeader">
                  <div id="artistFeedInfo" className="artistFeedInfo">
                    <div
                      id="artistFeedArtistInfo"
                      className="artistFeedArtistInfo"
                    >
                      <div
                        id="artistFeedArtistImg"
                        className="artistFeedArtistImg"
                      >
                        <div
                          id="artistFeedArtistCircleImg"
                          className="artistFeedArtistCircleImg"
                        >
                          <div
                            id="artistFeedArtistCompact"
                            className="artistFeedArtistCompact"
                          >
                            <img
                              id="artistImg"
                              className="artistImg"
                              src={accessImg}
                              alt="이미지 없음"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="artistFeedArtistDetailName"
                      className="artistFeedArtistDetailName"
                    >
                      <strong
                        id="artistFeedArtistDetailNameInfo"
                        className="artistFeedArtistDetailNameInfo"
                      >
                        {artistNick}
                      </strong>
                      <span
                        id="artistFeedArtistDetailFormatDateInfo"
                        className="artistFeedArtistDetailFormatDateInfo"
                      >
                        {formatTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  id="artistFeedDetailContent"
                  className="artistFeedDetailContent"
                >
                  <div id="artistScrollContent" className="artistScrollContent">
                    <div className="feedImgContainer">
                      {files.length > 0 &&
                        files.map((file, index) => (
                          <img
                            key={index}
                            src={`https://i9d204.p.ssafy.io:8001/file/getimg/feed-img/${file.filePath}`}
                            alt={`File ${index}`}
                          />
                        ))}
                    </div>
                    <br></br>
                    {content}
                  </div>
                </div>
                <div
                  id="artistFeedDetailFooter"
                  className="artistFeedDetailFooter"
                >
                  {thisFeedLike ? (
                    <img
                      src={likeclick}
                      alt="이미지가 없습니다."
                      id="artistFeedInLikeImg"
                      className="artistFeedInLikeImg"
                      onClick={wantLikeCancle}
                    ></img>
                  ) : (
                    <img
                      src={notlikeclick}
                      alt="이미지가 없습니다."
                      id="artistFeedInLikeImg"
                      className="artistFeedInLikeImg"
                      onClick={wantLike}
                    ></img>
                  )}
                  <div
                    id="artistFeedInLikeCount"
                    className="artistFeedInLikeCount"
                  >
                    {feedLikeSum}
                  </div>
                  <div
                    id="artistFeedInBookmarkImgWrap"
                    className="artistFeedBookmarkImgWrap"
                  >
                    {thisFeedBookmark ? (
                      <img
                        src={bookmarkfill}
                        alt="이미지가 없습니다."
                        id="artistFeedInBookmarkImg"
                        className="artistFeedInBookmarkImg"
                        onClick={wantBookmarkCancle}
                      ></img>
                    ) : (
                      <img
                        src={bookmarkempty}
                        alt="이미지가 없습니다."
                        id="artistFeedInBookmarkImg"
                        className="artistFeedInBookmarkImg"
                        onClick={wantBookmark}
                      ></img>
                    )}
                  </div>
                </div>
              </div>
              <div id="artistFeedCommentWrap" className="artistFeedCommentWrap">
                <img
                  src={downarrow}
                  alt="사진이 없습니다."
                  id="backButton"
                  className="backButton"
                  onMouseUp={closeModalClickFunction}
                ></img>
                <div
                  id="artistFeedCommentContainer"
                  className="artistFeedCommentContainer"
                >
                  <div
                    id="artistFeedCommentView"
                    className="artistFeedCommentView"
                  >
                    <div
                      id="artistFeedCommentTitle"
                      className="artistFeedCommentTitle"
                    >
                      <div
                        id="artistFeedCommentCount"
                        className="artistFeedCommentCount"
                      >
                        <div id="commentCount" className="commentCount">
                          {commentCount}개의 댓글
                        </div>
                      </div>
                    </div>
                    <div
                      id="artistFeedCommentList"
                      className="artistFeedCommentList"
                    >
                      <div
                        id="artistFeedScrollStart"
                        className="artistFeedScrollStart"
                      ></div>
                      <div id="aristFeedScrollCommentList">
                        {comment.map((it) => (
                          <ArtistFeedComment
                            key={it.id}
                            comment={comment}
                            setComment={setComment}
                            createDate={it.createDate}
                            feedId={id}
                            id={it.id}
                            artistDto={it.artistDto}
                            fanDto={it.fanDto}
                            content={it.content}
                          ></ArtistFeedComment>
                        ))}
                      </div>
                    </div>
                    <div
                      id="artistFeedCommentFooter"
                      className="artistFeedCommentFooter"
                    >
                      <div
                        id="artistFeedCommentWriteWrap"
                        className="artistFeedCommentWriteWrap"
                      >
                        <div
                          id="artistFeedCommentWrite"
                          className="artistFeedCommentWrite"
                        >
                          <div
                            id="artistFeedCommentInput"
                            className="artistFeedCommentInput"
                          >
                            <textarea
                              id="artistFeedCommentInputSend"
                              className="artistFeedCommentInputSend"
                              value={saveContent}
                              onChange={contentValueChange}
                              onKeyDown={enterKeyPress}
                              placeholder="댓글을 입력하세요."
                            ></textarea>
                          </div>
                          <img
                            src={send}
                            alt="사진이 없습니다."
                            id="artistFeedCommentInputButton"
                            className="artistFeedCommentInputButton"
                            onClick={commentPostFunction}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistFeedDetail;
