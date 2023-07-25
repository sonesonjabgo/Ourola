import "../../style/announcement/AnnouncementDetail.css";
import React, { useState } from "react";

const AnnouncementDetail = (props) => {
  const setModalOpen = props.state.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  const { id, title, content, createTime } = props.state;

  return (
    <div id="AnnouncementDetail" className="AnnouncementDetail">
      <button
        id="AnnouncementDetailClose"
        className="AnnouncementDetailClose"
        onClick={closeModal}
      >
        X
      </button>
      <div id="AnnouncementDetailTitle" className="AnnouncementDetailTitle">
        {title}
      </div>
      <div id="AnnouncementDetailTime" className="AnnouncementDetailTime">
        {createTime}
      </div>
      <div id="AnnouncementDetailContent" className="AnnouncementDetailContent">
        {content}
      </div>
    </div>
  );
};

export default AnnouncementDetail;
