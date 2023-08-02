import "../../style/groupfeed/Group.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistList from "./ArtistList";
import ArtistFeed from "./ArtistFeed";
import { useLocation } from "react-router-dom";

const Group = () => {
  const location = useLocation();
  const group = location.state;

  const [loadingMember, setLodingMember] = useState(true);
  const [loadingFeed, setLodingFeed] = useState(true);
  const [artist, setArtist] = useState([]);
  const [artistFeed, setArtistFeed] = useState([]);

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

  // console.log(artist);

  return (
    <div id="group" className="group">
      {loadingMember && loadingFeed ? (
        <div></div>
      ) : (
        <div id="groupContent" className="groupContent">
          <ArtistList group={group} artist={artist} />
          <ArtistFeed group={group} artistFeed={artistFeed} />
        </div>
      )}
    </div>
  );
};

export default Group;
