import { useState } from "react";
import "../../style/announcement/AnnouncementItem.css";
import AnnouncementDetail from "./AnnouncementDetail";

const AnnouncementItem = ({ id, title, content, createTime }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div id="AnnouncementItem" className="AnnouncementItem">
      <div>
        <div id="Title" className="Title" onClick={showModal}>
          {title}
        </div>
        {modalOpen && (
          <AnnouncementDetail
            state={{ setModalOpen, id, title, content, createTime }}
          ></AnnouncementDetail>
        )}
      </div>
      <div id="Date" className="Date">
        {createTime}
      </div>
    </div>
  );
};

export default AnnouncementItem;
