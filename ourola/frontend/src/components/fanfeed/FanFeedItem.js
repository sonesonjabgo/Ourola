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
    <div className="groupFeedItem">
      <div className="aritstFeedHeader">
        <div className="groupFeedInfo">
          <img
            className="groupFeedProfile"
            src={accessImg}
          ></img>
        </div>
        <div className="groupFeedInfo">
          <div
            className="groupFeedGroupNameWrapper"
          >
            <strong className="groupFeedGroupName">
              {GroupName}
            </strong>
          </div>
          <div
            className="groupFeedCreateTimeWrapper"
          >
            <span className="groupFeedCreateTime">
              {formatTime}
            </span>
          </div>
        </div>
        <div className="groupFeedBlank">
          <div className="groupFeedBookmark">
            북마크 {/* 나중에 북마크 표시 추가 */}
          </div>
        </div>
      </div>
      <div className="groupFeedContent">
        <div className="groupFeedContent">
          {content}
        </div>
      </div>
      <div className="groupFeedFooter">
        <div className="groupFeedFeedInfo">
          <div className="groupFeedLike">
            <div className="groupFeedLikeImg">
              좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
            </div>
            <div className="groupFeedLikeCount">
              {like}
            </div>
          </div>
          <div className="groupFeedComment">
            <div className="groupFeedCommentImg">
              댓글 {/*  나중에 댓글 이미지로 수정필요 */}
            </div>
            <div className="groupFeedCommentCount">
              {like} {/*  나중에 댓글 갯수로 수정필요 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanFeedItem;
