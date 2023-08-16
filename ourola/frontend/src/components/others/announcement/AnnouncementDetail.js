import "../../../style/others/announcement/AnnouncementDetail.css";
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
    <div id="announcementBackGround" className="announcementBackGround">
      <div
        ref={modalRef}
        id="announcementDetail"
        className="announcementDetail"
      >
        <div id="announcementDetailScroll" className="announcementDetailScroll">
          <div id="announcemenDetailHeader" className="announcemenDetailHeader">
            <button
              id="announcementDetailClose"
              className="announcementDetailClose"
              onClick={closeModal}
            >
              ×
            </button>
            <h3
              id="announcementDetailTitle"
              className="announcementDetailTitle"
            >
              {title}
            </h3>
            <div id="announcementDetailTime" className="announcementDetailTime">
              {getDate[0]} {getDate[1]}
            </div>
          </div>
          <div
            id="announcementDetailContent"
            className="announcementDetailContent"
            style={{ whiteSpace: 'pre-line' }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
