import "../../style/announcement/AnnouncementList.css";
import AnnouncementItem from "./AnnouncementItem";
import React from "react";
import { Link } from "react-router-dom";

const AnnouncementList = ({ announcementList }) => {
  return (
    <div id="AnnouncementList" className="AnnouncementList">
      <div id="AnnouncementTitle" className="AnnouncementTitle">
        <span id="TextTitle" className="TextTitle">
          공지사항
        </span>
      </div>
      <section id="AnnouncementBoard" className="AnnouncementBoard">
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
