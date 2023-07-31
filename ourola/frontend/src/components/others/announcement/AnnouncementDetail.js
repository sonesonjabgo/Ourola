import "../../style/announcement/AnnouncementDetail.css";
import React, { useEffect, useRef } from "react";

const AnnouncementDetail = (props) => {
  const setModalOpen = props.state.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  const { id, title, content, createTime } = props.state;

  let getDate = createTime.split("T", 2);
  getDate[1] = getDate[1].split(".", 1);

  const modalRef = useRef(null);

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

  return (
    <div id="AnnouncementBackGround" className="AnnouncementBackGround">
      <button
        id="AnnouncementDetailClose"
        className="AnnouncementDetailClose"
        onClick={closeModal}
      >
        ×
      </button>
      <div
        ref={modalRef}
        id="AnnouncementDetail"
        className="AnnouncementDetail"
      >
        <div id="AnnouncementDetailScroll" className="AnnouncementDetailScroll">
          <div id="AnnouncemenDetailHeader" className="AnnouncemenDetailHeader">
            <h3
              id="AnnouncementDetailTitle"
              className="AnnouncementDetailTitle"
            >
              {title}
            </h3>
            <div id="AnnouncementDetailTime" className="AnnouncementDetailTime">
              {getDate[0]} {getDate[1]}
            </div>
          </div>
          <div
            id="AnnouncementDetailContent"
            className="AnnouncementDetailContent"
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
