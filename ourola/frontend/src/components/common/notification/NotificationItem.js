import React from "react";
import "../../../style/common/notification/NotificationItem.css";
import NotificationClose from "../../../assets/icons/close.png";

function NotificationItem() {
  return (
    <>
      <div className="Notification-container">
        <div className="Notification-text">딩동</div>
        <div>
          <div className="Notification-check">
            <img className="Notification-check-close" src={NotificationClose} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationItem;
