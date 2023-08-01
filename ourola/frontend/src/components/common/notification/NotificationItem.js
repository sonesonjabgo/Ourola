import React from "react";
import "../../../style/common/notification/NotificationItem.css";
import NotificationClose from "../../../assets/icons/close.png";

function NotificationItem() {
  return (
    <>
      <div className="notificationContainer">
        <div className="notificationText">딩동</div>
        <div>
          <div className="notificationCheck">
            <img className="notificationCheckClose" src={NotificationClose} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationItem;
