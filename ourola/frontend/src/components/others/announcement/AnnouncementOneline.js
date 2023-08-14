import React, { useEffect } from "react";
import "../../../style/others/announcement/AnnouncementOneline.css";
import AnnouncementIcon from "../../../assets/icons/announcement.png";
import axios from "axios";
import { useState } from "react";

function AnnouncementOneline({ group }) {
  const [announcementList, setAnnouncementList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const accessToken = sessionStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/${group}/announcement/list?page=0`, config)
      .then((response) => {
        setAnnouncementList(response.data.content.slice(0, 3));
        setCurrentIndex(0);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcementList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [announcementList]);

  return (
    <div id="announcementOneline" className="announcementOneline">
      <div id="oneLineAnnouncement" className="oneLineAnnouncement">
        <div
          id="oneLineAnnouncementIconContainer"
          className="oneLineAnnouncementIconContainer"
        >
          <img
            id="announcementIcon"
            className="announcementIcon"
            alt="이미지가 없습니다."
            src={AnnouncementIcon}
          />
        </div>
        <div
          id="oneLineAnnouncementContent"
          className="oneLineAnnouncementContent"
        >
          {announcementList.length > 0 && announcementList[currentIndex].title}
        </div>
      </div>
    </div>
  );
}

export default AnnouncementOneline;
