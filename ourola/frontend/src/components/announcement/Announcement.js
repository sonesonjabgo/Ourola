import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementList from "./AnnouncementList";
import { useLocation } from "react-router-dom";

const Announcement = () => {
  const location = useLocation();
  const artist = location.state;
  const backendPort = 8000;

  const [loading, setLoding] = useState(true);
  const [announcementList, setAnnouncementList] = useState([]);

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDQ4Mjc3MywiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.uWVnJAZwgRwkLPjd9KjohBYg9GZhQmBfeud1glL4XvP6L0L1FvHeRV0Tsu-Us2XG4D_S40gJw0gHLsAfBxtOzA",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:${backendPort}/${artist}/announcement/list`,
        config
      )
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
    <div>
      <div id="Announcement" className="Annoucement">
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
