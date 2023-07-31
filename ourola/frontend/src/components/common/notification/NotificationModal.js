import React, { useRef, useEffect } from "react";
import styles from "../../../style/common/notification/Notification.css";
import NotificationHeader from "./NotificationHeader";
import NotificationList from "./NotificationList";

const NotificationModal = (props) => {
  const setModalOpen = props.state.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

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
    <div className="Notification-background">
      <button className="Notification-close" onClick={closeModal}>
        ×
      </button>

      <div ref={modalRef} className="Notification-detail">
        <div className="Notification-header">
          <NotificationHeader />
        </div>
        <div className="Notification-detail-content">
          <div>
            <NotificationList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationModal;
