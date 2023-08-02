import "../../style/groupfeed/ArtistFeedDetail.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ArtistFeedComment from "./ArtistFeedComment";

const ArtistFeedDetail = (props) => {
  console.log(props);

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

  const comment = props.state.comment;
  const setComment = props.state.setComment;

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
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDk3MTAzNywiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.hdL2-Y5JJazuFuYt3MAg4tPQ1nDDIsBMVTsqvHJx3GUAnKg0SqYzm9cn1NNeoUuSRMAcaKlgJ0htZ-pbtV9wUA",
      "Content-Type": "application/json",
    },
  };

  const closeModalClickFunction = (event) => {
    closeModal();
    // scrollToOrigin();
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

      console.log(result.data);

      setComment([...comment, result.data]);
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  console.log("");

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
                  onMouseUp={closeModalClickFunction}
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
                      <div
                        id="artistFeedScrollStart"
                        className="artistFeedScrollStart"
                      ></div>
                      <div id="aristFeedScrollCommentList">
                        {comment.map((it) => (
                          <ArtistFeedComment
                            key={it.id}
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
                          <button
                            id="artistFeedCommentInputButton"
                            className="artistFeedCommentInputButton"
                            onClick={commentPostFunction}
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
