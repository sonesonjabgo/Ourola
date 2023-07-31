import React from "react";
import "../../style/announcement/AnnouncementOneline.css";
import AnnouncementIcon from "../../assets/icons/announcement.png";

function AnnouncementOneline() {
  return (
    <>
      <div className="OnelineAnnouncement">
        <div className="OnelineAnnouncement-icon-container">
          <img className="Announcement-icon" src={AnnouncementIcon} />
        </div>
        <div className="OnelineAnnouncement-content">[여기에 DB 입력]</div>
      </div>
    </>
  );
}

export default AnnouncementOneline;
