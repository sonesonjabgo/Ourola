import "../../style/groupfeed/ArtistFeedDetail.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ArtistFeedComment from "./ArtistFeedComment";
import downarrow from "../../assets/icons/downarrow.png";
import send from "../../assets/icons/send.png";
import inbookmark from "../../assets/icons/inbookmark.png";
import likeclick from "../../assets/icons/like.png";
import notlikeclick from "../../assets/icons/notlike.png";
import commentclick from "../../assets/icons/comment.png";

const ArtistFeedDetail = (props) => {
  const setModalOpen = props.state.setModalOpen;

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
  } = props.state;

  const comment = props.state.comment;
  const setComment = props.state.setComment;

  const modalRef = useRef(null);

  const thisFeedLike = props.state.thisFeedLike;
  const setThisFeedLike = props.state.setThisFeedLike;
  const feedLikeSum = props.state.feedLikeSum;
  const setFeedLikeSum = props.state.setFeedLikeSum;

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

  const accessToken = localStorage.getItem("Authorization");

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
      const result = await axios.post(`/${id}/comment`, commentData, config);

      setComment([...comment, result.data]);
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
                        {artistName}
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
                  <img
                    src={inbookmark}
                    alt="이미지가 없습니다."
                    id="artistFeedInBookmark"
                    className="artistFeedInBookmark"
                  ></img>
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
                            feedId={id}
                            id={it.id}
                            artistDto={it.artistDto}
                            fanDto={it.fanDto}
                            createDate={it.createDate}
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
