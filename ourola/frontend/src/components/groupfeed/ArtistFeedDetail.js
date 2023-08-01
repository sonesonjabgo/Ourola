import "../../style/groupfeed/ArtistFeedDetail.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const ArtistFeedDetail = (props) => {
  const backendPort = 8000;

  const setModalOpen = props.state.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  const {
    id,
    accessImg,
    artistName,
    formatTime,
    title,
    content,
    like,
    commentCount,
  } = props.state;

  const modalRef = useRef(null);

  // const scrollToOrigin = () => {
  //   window.scrollTo(0, props.state.prevPos);
  // };

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
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDg4NzExNSwiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.n_EJyQY2fG-fYM1yGoRS0n1xSGqkJpWaL5NmapGgee61VcAWPB5VcrWya3ChVcg0ZJMtB5tMY1VlSmCjkQ7hSQ",
      "Content-Type": "application/json",
    },
  };

  const clickFunction = (event) => {
    closeModal();
    // scrollToOrigin();
  };

  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${id}/comment`, config)
      .then((response) => {
        setComment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(comment);

  return (
    <div>
      <div id="artistFeedBackGround" className="artistFeedBackGround">
        <div id="artistFeedModal" className="artistFeedModal">
          <div
            id="artistFeedContent"
            className="artistFeedContent"
            ref={modalRef}
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
                      id="artistFeedArtistName"
                      className="artistFeedArtistName"
                    >
                      <strong id="artistName" className="artistName">
                        {artistName}
                      </strong>
                      <span id="formatTime" className="formatTime">
                        {formatTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  id="artistFeedDetailContent"
                  className="artistFeedDetailContent"
                >
                  <div
                    id="artistScrollStart"
                    className="artistScrollStart"
                  ></div>
                  <div id="artistScrollContent" className="artistScrollContent">
                    {content}
                  </div>
                </div>
                <div
                  id="artistFeedDetailFooter"
                  className="artistFeedDetailFooter"
                >
                  <div id="artistFeedLikeImg" className="artistFeedLikeImg">
                    좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
                  </div>
                  <div id="artistFeedLikeCount" className="artistFeedLikeCount">
                    {like}
                  </div>
                  <div
                    id="artistFeedInBookmark"
                    className="artistFeedInBookmark"
                  >
                    북마크 {/* 나중에 북마크 표시 추가 */}
                  </div>
                </div>
              </div>
              <div id="artistFeedCommentWrap" className="artistFeedCommentWrap">
                <button
                  id="backButton"
                  className="backButton"
                  onMouseUp={clickFunction}
                >
                  ⇒
                </button>
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
                      hi
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
                            ></textarea>
                          </div>
                          <button
                            id="artistFeedCommentInputButton"
                            className="artistFeedCommentInputButton"
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
