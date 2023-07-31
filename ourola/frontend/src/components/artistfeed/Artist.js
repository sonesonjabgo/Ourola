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
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDgwNTU0NCwiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.P8Owz0BvEbJWF6Fp06GLDbVWXLxWAGZ6fNp8nTnnL6O0jXda6El_SPKsqL5Z2vT8gIX4QOiSmjBCKmIN3bd4jw",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:${backendPort}/search/${artist}/memberlist`,
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
