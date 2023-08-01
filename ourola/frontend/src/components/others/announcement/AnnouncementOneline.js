import React from "react";
import "../../../style/others/announcement/AnnouncementOneline.css";
import AnnouncementIcon from "../../../assets/icons/announcement.png";

function AnnouncementOneline() {
  return (
    <div id="announcementOneline" className="announcementOneline">
      <div id="oneLineAnnouncement" className="oneLineAnnouncement">
        <div
          id="oneLineAnnouncementIconContainer"
          className="oneLineAnnouncementIconContainer"
        >
          <img
            id="announcementIcon"
            className="announcementIcon"
            src={AnnouncementIcon}
          />
        </div>
        <div
          id="oneLineAnnouncementContent"
          className="oneLineAnnouncementContent"
        >
          [여기에 DB 입력]
        </div>
      </div>
    </div>
  );
}

export default AnnouncementOneline;
