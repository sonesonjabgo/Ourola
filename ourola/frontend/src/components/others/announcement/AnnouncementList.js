import "../../../style/others/announcement/AnnouncementList.css";
import AnnouncementItem from "./AnnouncementItem";
import React from "react";
import { Link } from "react-router-dom";

const AnnouncementList = ({ announcementList }) => {
  return (
    <div id="announcementList" className="announcementList">
      <div id="announcementTitle" className="announcementTitle">
        <span id="textTitle" className="textTitle">
          공지사항
        </span>
      </div>
      <section id="announcementBoard" className="announcementBoard">
        {announcementList.map((it) => (
          <AnnouncementItem
            key={it.id}
            id={it.id}
            title={it.title}
            content={it.content}
            createTime={it.createTime}
          ></AnnouncementItem>
        ))}
      </section>
    </div>
  );
};

export default AnnouncementList;
