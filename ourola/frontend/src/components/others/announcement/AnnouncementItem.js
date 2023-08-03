import React, { useEffect, useState } from "react";
import "../../../style/others/announcement/AnnouncementItem.css";
import AnnouncementDetail from "./AnnouncementDetail";

const AnnouncementItem = ({ id, title, content, createTime }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let currentYear = new Date().getFullYear();

    let currentMonth = new Date().getMonth() + 1;
    if (currentMonth.toString().length === 1) {
      currentMonth = "0" + currentMonth;
    }

    let currentDay = new Date().getDate();
    if (currentDay.toString().length === 1) {
      currentDay = "0" + currentDay;
    }

    setCurrentDate(currentYear + "-" + currentMonth + "-" + currentDay);

    return () => {};
  }, []);

  let getDate = createTime.split("T", 2);
  getDate[1] = getDate[1].split(".", 1);

  return (
    <div id="announcementItem" className="announcementItem">
      <div>
        <div id="title" className="title" onClick={showModal}>
          {title}
        </div>
        {modalOpen && (
          <AnnouncementDetail
            state={{ setModalOpen, id, title, content, createTime }}
          ></AnnouncementDetail>
        )}
      </div>
      <div id="date" className="date">
        {currentDate === getDate[0] ? getDate[1][0] : getDate[0]}
      </div>
    </div>
  );
};

export default AnnouncementItem;
