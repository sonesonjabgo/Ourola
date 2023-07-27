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

  useEffect(() => {
    axios
      .get(`http://localhost:${backendPort}/${artist}/announcement/list`)
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
