import "../../style/artistfeed/ArtistFeed.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistFeedItem from "./ArtistFeedItem";

const ArtistFeed = ({ artist, artistFeed }) => {
  // 좋아요 기능 수정 필요
  // const backendPort = 8000;
  // const [loading, setLoding] = useState(true);
  // const [likeList, setLikeList] = useState(true);

  // const config = {
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDc2MjgzNiwiZW1haWwiOiJKSU1JTkBuYXZlci5jb20iLCJyb2xlIjoiVVNFUiJ9.fNnUPvVsJPlOxollDYRcvneC9DW9-wa26OdcnfhLAjAYcJ_zSADfmubeZade8MRO5vDLGxb9_U5jXfIqaOlyNw",
  //     "Content-Type": "application/json",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:${backendPort}/${artist}/feed/like/list`, config)
  //     .then((response) => {
  //       setLikeList(response.data);
  //       setLoding(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data : ", error);
  //       setLoding(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div id="ArtistFeedList" className="ArtistFeedList">
      <section id="ArtistFeedBoard" className="ArtistFeedBoard">
        {artistFeed.map((it) => (
          <ArtistFeedItem
            key={it.id}
            id={it.id}
            artist={artist}
            artistId={it.artistDto.id}
            artistProfileId={it.artistDto.profileFileDto.id}
            artistName={it.artistDto.name}
            title={it.title}
            content={it.content}
            like={it.like}
            createDate={it.createDate}
          ></ArtistFeedItem>
        ))}
      </section>
    </div>
  );
};

export default ArtistFeed;
