import "../../style/artistfeed/Artist.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistMemberList from "./ArtistMemberList";
import ArtistFeed from "./ArtistFeed";
import { useLocation } from "react-router-dom";

const Artist = () => {
  const location = useLocation();
  const artist = location.state;
  const backendPort = 8000;

  const [loadingMember, setLodingMember] = useState(true);
  const [loadingFeed, setLodingFeed] = useState(true);
  const [artistMember, setartistMember] = useState([]);
  const [artistFeed, setArtistFeed] = useState([]);

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
        `http://localhost:${backendPort}/artist/${artist}/memberList`,
        config
      )
      .then((response) => {
        setartistMember(response.data);
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
      .get(`http://localhost:${backendPort}/${artist}/feed/artist`, config)
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

  return (
    <div id="Artist" className="Artist">
      {loadingMember && loadingFeed ? (
        <div></div>
      ) : (
        <div id="ArtistContent" className="ArtistContent">
          <ArtistMemberList artist={artist} artistMember={artistMember} />
          <ArtistFeed artist={artist} artistFeed={artistFeed} />
        </div>
      )}
    </div>
  );
};

export default Artist;