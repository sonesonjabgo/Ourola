import "../../../style/mypage/bookmark/BookmarkComment.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const BookmarkComment = ({
  comment,
  setComment,
  feedId,
  id,
  artistDto,
  fanDto,
  createDate,
  content,
}) => {
  let accessImg = "https://i9d204.p.ssafy.io:8001/file/getimg";
  let name = "";
  let email = "";

  if (artistDto === null) {
    accessImg += "/profile?id=" + fanDto.profileFileDto.id;
    name = fanDto.name;
    email = fanDto.email;
  } else {
    accessImg += "/artist-profile?id=" + artistDto.profileFileDto.id;
    name = artistDto.name;
    email = artistDto.email;
  }

  const formatTime = createDate;

  const accessToken = sessionStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const removeComment = (event) => {
    axios
      .delete(`/${feedId}/comment/${id}`, config)
      .then((response) => {
        const result = comment.filter((comment) => comment.id !== id);
        setComment(result);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  };

  return (
    <div id="artistFeedComment" className="artistFeedComment">
      <div id="artistFeedCommentHeader" className="artistFeedCommentHeader">
        <div
          id="artistFeedCommentHeaderInfo"
          className="artistFeedCommentHeaderInfo"
        >
          <div
            id="artistFeedCommentHeaderProfileWrapper"
            className="artistFeedCommentHeaderProfileWrapper"
          >
            <div
              id="artistFeedCommentHeaderProfile"
              className="artistFeedCommentHeaderProfile"
            >
              <div
                id="artistFeedCommentHeaderImgWrapper"
                className="artistFeedCommentHeaderImgWrapper"
              >
                <img
                  id="artistFeedCommentHeaderImg"
                  className="artistFeedCommentHeaderImg"
                  src={accessImg}
                  alt="이미지 없음"
                ></img>
              </div>
            </div>
          </div>
          <div
            id="artistFeedCommentHeaderNameCommentWrapper"
            className="artistFeedCommentHeaderNameCommentWrapper"
          >
            <div
              id="artistFeedCommentHeaderNameWrapper"
              className="artistFeedCommentHeaderNameWrapper"
            >
              <strong
                id="artistFeedCommentHeaderName"
                className="artistFeedCommentHeaderName"
              >
                {name}
              </strong>
            </div>
            <div
              id="artistFeedCommentHeaderDateWrapper"
              className="artistFeedCommentHeaderDateWrapper"
            >
              <span
                id="artistFeedCommentHeaderDate"
                className="artistFeedCommentHeaderDate"
              >
                {formatTime}
              </span>
            </div>
          </div>
        </div>
        {sessionStorage.getItem("UserEmail") === email ? (
          <button
            id="artistFeedCommentUserDelete"
            className="artistFeedCommentUserDelete"
            onClick={removeComment}
          >
            x
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <div
          id="artistFeedCommentBodyCommentWrapper"
          className="artistFeedCommentBodyCommentWrapper"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default BookmarkComment;
