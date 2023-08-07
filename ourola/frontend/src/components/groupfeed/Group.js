import "../../style/groupfeed/Group.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistList from "./ArtistList";
import ArtistFeed from "./ArtistFeed";
import AnnouncementOneline from "components/others/announcement/AnnouncementOneline";
import { Link } from "react-router-dom";
import FanFeedProfile from "components/fanfeed/FanFeedProfile";
import { useLocation } from "react-router-dom";

const Group = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const [loadingMember, setLodingMember] = useState(true);
  const [loadingFeed, setLodingFeed] = useState(true);
  const [artist, setArtist] = useState([]);
  const [artistFeed, setArtistFeed] = useState([]);
  const [artistFilter, setArtistFilter] = useState(-1);

  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/search/${group}/memberlist`, config)
      .then((response) => {
        setArtist(response.data);
        setLodingMember(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLodingMember(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`/${group}/feed/artist`, config)
      .then((response) => {
        setArtistFeed(response.data);
        setLodingFeed(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLodingFeed(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="group" className="group">
      {!loadingMember && !loadingFeed ? (
        <div id="groupContent" className="groupContent">
          <ArtistList
            group={group}
            setArtistFilter={setArtistFilter}
            artistFilter={artistFilter}
            setArtistFeed={setArtistFeed}
            artist={artist}
          />
          <div className="onelineAnnouncementContainer">
            <Link to={"https://i9d204.p.ssafy.io/" + group + "/announcement"}>
              <AnnouncementOneline group={group} />
            </Link>
          </div>
          <div id="feedContent" className="feedContent">
            <div
              id="fanFeedProfile"
              className={`fanFeedProfile ${scrollY > 275 ? "sticky" : ""}`}
            >
              <FanFeedProfile></FanFeedProfile>
            </div>
            <ArtistFeed
              group={group}
              setArtistFeed={setArtistFeed}
              scrollY={scrollY}
              artistFilter={artistFilter}
              artistFeed={artistFeed}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Group;
