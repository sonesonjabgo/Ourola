import React, { useState } from "react";
import "../../../style/common/notification/Notification.css";
import NotificationModal from "./NotificationModal";
import NotificationIcon from "../../../assets/icons/notification.png";

const OpenNotification = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <img
        onClick={showModal}
        className="notificationIcon"
        src={NotificationIcon}
        alt=""
      />
      {modalOpen && (
        <NotificationModal state={{ setModalOpen }}></NotificationModal>
      )}
    </div>
  );
};

export default OpenNotification;
