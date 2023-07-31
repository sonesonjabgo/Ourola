import React, { useEffect, useState } from "react";
import "../../style/announcement/AnnouncementItem.css";
import AnnouncementDetail from "./AnnouncementDetail";

const AnnouncementItem = ({ id, title, content, createTime }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  let currentYear = new Date().getFullYear();

  let currentMonth = new Date().getMonth() + 1;
  if (currentMonth.toString().length === 1) {
    currentMonth = "0" + currentMonth;
  }

  let currentDay = new Date().getDate();

  const [currentDate, setCurrentDate] = useState(
    currentYear + "-" + currentMonth + "-" + currentDay
  );

  useEffect(() => {
    let currentYear = new Date().getFullYear();

    let currentMonth = new Date().getMonth() + 1;
    if (currentMonth.toString().length === 1) {
      currentMonth = "0" + currentMonth;
    }

    let currentDay = new Date().getDate();

    setCurrentDate(currentYear + "-" + currentMonth + "-" + currentDay);

    return () => {};
  }, []);

  let getDate = createTime.split("T", 2);
  getDate[1] = getDate[1].split(".", 1);

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
        {currentDate === getDate[0] ? getDate[1] : getDate[0]}
      </div>
    </div>
  );
};

export default AnnouncementItem;
