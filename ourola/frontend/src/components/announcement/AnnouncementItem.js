import "../../style/announcement/AnnouncementItem.css";
import React from 'react';

const AnnouncementItem = ({ id, title, content, createTime }) => {
  return (
    // 나중에 a -> Link로 바꾸기
    <div id="AnnouncementItem" className="AnnouncementItem">
      <a href="*" id="Title" className="Title">
        {title}
      </a>
      <div id="Date" className="Date">
        {createTime}
      </div>
    </div>
  );
};

export default AnnouncementItem;
