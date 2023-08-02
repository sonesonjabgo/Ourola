import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementList from "./AnnouncementList";
import { useLocation } from "react-router-dom";

const Announcement = () => {
  const location = useLocation();
  const group = location.state;

  const [loading, setLoding] = useState(true);
  const [announcementList, setAnnouncementList] = useState([]);

  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/${group}/announcement/list`, config)
      .then((response) => {
        setAnnouncementList(response.data);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="announcement" className="announcement">
      <div>
        {loading ? (
          <div></div>
        ) : (
          <AnnouncementList announcementList={announcementList} />
        )}
      </div>
    </div>
  );
};

export default Announcement;
