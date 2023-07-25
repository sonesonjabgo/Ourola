import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementList from "./AnnouncementList";
import { useLocation } from "react-router-dom";

function Announcement() {
  const location = useLocation();
  const artist = location.state;

  const [loading, setLoding] = useState(true);
  const [announcementList, setAnnouncementList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:80/${artist}/announcement/list`)
      .then((response) => {
        setAnnouncementList(response.data);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      <div id="Announcement" className="Annoucement">
        {loading ? (
          <p>Loading...</p> // 로딩창을 만들어놔도 괜찮을 듯..
        ) : (
          <AnnouncementList announcementList={announcementList} />
        )}
      </div>
    </div>
  );
}

export default Announcement;
