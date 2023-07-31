import "../../style/artistfeed/ArtistFeedDetail.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const ArtistFeedDetail = (props) => {
  const backendPort = 8000;

  const setModalOpen = props.state.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  const {
    artist,
    accessImg,
    artistName,
    formatTime,
    title,
    content,
    like,
    commentCount,
  } = props.state;

  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setModalOpen]);

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDgwNTU0NCwiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.P8Owz0BvEbJWF6Fp06GLDbVWXLxWAGZ6fNp8nTnnL6O0jXda6El_SPKsqL5Z2vT8gIX4QOiSmjBCKmIN3bd4jw",
      "Content-Type": "application/json",
    },
  };

  const scrollToOrigin = (event) => {
    window.scrollTo(0, props.state.prevPos);
  };

  // const [comment, setComment] = useState([]);
  // const [loadingComment, setLoadingComment] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:${backendPort}/search/${artist}/memberlist`,
  //       config
  //     )
  //     .then((response) => {
  //       setComment(response.data);
  //       setLoadingComment(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data : ", error);
  //       setLoadingComment(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <div id="ArtistFeedBackGround" className="ArtistFeedBackGround">
        <div id="ArtistFeedModal" className="ArtistFeedModal">
          <div
            id="ArtistFeedContent"
            className="ArtistFeedContent"
            ref={modalRef}
            onMouseDownCapture={scrollToOrigin}
          >
            <div id="ArtistFeedView" className="ArtistFeedView">
              <div
                id="ArtistFeedInfoAndContent"
                className="ArtistFeedInfoAndContent"
              >
                <div id="ArtistFeedHeader" className="ArtistFeedHeader">
                  <div id="ArtistFeedInfo" className="ArtistFeedInfo">
                    <div
                      id="ArtistFeedArtistInfo"
                      className="ArtistFeedArtistInfo"
                    >
                      <div
                        id="ArtistFeedArtistImg"
                        className="ArtistFeedArtistImg"
                      >
                        <div
                          id="ArtistFeedArtistCircleImg"
                          className="ArtistFeedArtistCircleImg"
                        >
                          <div
                            id="ArtistFeedArtistCompact"
                            className="ArtistFeedArtistCompact"
                          >
                            <img
                              id="ArtistImg"
                              className="ArtistImg"
                              src={accessImg}
                              alt="이미지 없음"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="ArtistFeedArtistName"
                      className="ArtistFeedArtistName"
                    >
                      <strong id="ArtistName" className="ArtistName">
                        {artistName}
                      </strong>
                      <span id="formatTime" className="formatTime">
                        {formatTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  id="ArtistFeedDetailContent"
                  className="ArtistFeedDetailContent"
                >
                  <div
                    id="ArtistScrollStart"
                    className="ArtistScrollStart"
                  ></div>
                  <div id="ArtistScrollContent" className="ArtistScrollContent">
                    {content}
                  </div>
                </div>
                <div
                  id="ArtistFeedDetailFooter"
                  className="ArtistFeedDetailFooter"
                >
                  <div id="ArtistFeedLikeImg">
                    좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
                  </div>
                  <div id="ArtistFeedLikeCount" className="ArtistFeedLikeCount">
                    {like}
                  </div>
                  <div
                    id="ArtistFeedInBookmark"
                    className="ArtistFeedInBookmark"
                  >
                    북마크 {/* 나중에 북마크 표시 추가 */}
                  </div>
                </div>
              </div>
              <div id="ArtistFeedCommentWrap" className="ArtistFeedCommentWrap">
                <button
                  id="backButton"
                  className="backButton"
                  onMouseDown={closeModal}
                  onMouseDownCapture={scrollToOrigin}
                >
                  ⇒
                </button>
                <div
                  id="ArtistFeedCommentContainer"
                  className="ArtistFeedCommentContainer"
                >
                  <div
                    id="ArtistFeedCommentView"
                    className="ArtistFeedCommentView"
                  >
                    <div
                      id="ArtistFeedCommentTitle"
                      className="ArtistFeedCommentTitle"
                    >
                      <div
                        id="ArtistFeedCommentCount"
                        className="ArtistFeedCommentCount"
                      >
                        <div id="CommentCount" className="CommentCount">
                          {commentCount}개의 댓글
                        </div>
                      </div>
                    </div>
                    <div
                      id="ArtistFeedCommentList"
                      className="ArtistFeedCommentList"
                    >
                      hi
                    </div>
                    <div
                      id="ArtistFeedCommentFooter"
                      className="ArtistFeedCommentFooter"
                    >
                      <div
                        id="ArtistFeedCommentWriteWrap"
                        className="ArtistFeedCommentWriteWrap"
                      >
                        <div
                          id="ArtistFeedCommentWrite"
                          className="ArtistFeedCommentWrite"
                        >
                          <div
                            id="ArtistFeedCommentInput"
                            className="ArtistFeedCommentInput"
                          >
                            <textarea
                              id="ArtistFeedCommentInputSend"
                              className="ArtistFeedCommentInputSend"
                            ></textarea>
                          </div>
                          <button
                            id="ArtistFeedCommentInputButton"
                            className="ArtistFeedCommentInputButton"
                          >
                            &gt;
                          </button>
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
