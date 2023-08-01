import "../../style/fanfeed/FanFeedItem.css";
import React, { useEffect, useState } from "react";

const FanFeedItem = ({
  Group,
  GroupId,
  GroupProfileId,
  GroupName,
  title,
  content,
  like,
  createDate,
}) => {
  const backendPort = 8000;

  const accessImg =
    "http://localhost:" +
    backendPort +
    "/file/" +
    Group +
    "/getImg?id=" +
    GroupId;

  const dateObj = new Date(createDate);

  const year = dateObj.getFullYear().toString().substr(-2);
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  const hour = dateObj.getHours().toString().padStart(2, "0");
  const minute = dateObj.getMinutes().toString().padStart(2, "0");

  const formatTime = `${year}.${month}.${day} ${hour}:${minute}`;

  return (
    <div id="GroupFeedItem" className="GroupFeedItem">
      <div id="GroupFeedHeader" className="AritstFeedHeader">
        <div id="GroupFeedInfo" className="GroupFeedInfo">
          <img
            id="GroupFeedProfile"
            className="GroupFeedProfile"
            src={accessImg}
          ></img>
        </div>
        <div id="GroupFeedInfo" className="GroupFeedInfo">
          <div
            id="GroupFeedGroupNameWrapper"
            className="GroupFeedGroupNameWrapper"
          >
            <strong id="GroupFeedGroupName" className="GroupFeedGroupName">
              {GroupName}
            </strong>
          </div>
          <div
            id="GroupFeedCreateTimeWrapper"
            className="GroupFeedCreateTimeWrapper"
          >
            <span id="GroupFeedCreateTime" className="GroupFeedCreateTime">
              {formatTime}
            </span>
          </div>
        </div>
        <div id="GroupFeedBlank" className="GroupFeedBlank">
          <div id="GroupFeedBookmark" className="GroupFeedBookmark">
            북마크 {/* 나중에 북마크 표시 추가 */}
          </div>
        </div>
      </div>
      <div id="GroupFeedContent" className="GroupFeedContent">
        <div id="GroupFeedContent" className="GroupFeedContent">
          {content}
        </div>
      </div>
      <div id="GroupFeedFooter" className="GroupFeedFooter">
        <div id="GroupFeedFeedInfo" className="GroupFeedFeedInfo">
          <div id="GroupFeedLike" className="GroupFeedLike">
            <div id="GroupFeedLikeImg" className="GroupFeedLikeImg">
              좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
            </div>
            <div id="GroupFeedLikeCount" className="GroupFeedLikeCount">
              {like}
            </div>
          </div>
          <div id="GroupFeedComment" className="GroupFeedComment">
            <div id="GroupFeedCommentImg" className="GroupFeedCommentImg">
              댓글 {/*  나중에 댓글 이미지로 수정필요 */}
            </div>
            <div id="GroupFeedCommentCount" className="GroupFeedCommentCount">
              {like} {/*  나중에 댓글 갯수로 수정필요 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanFeedItem;
