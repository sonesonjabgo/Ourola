import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/groupfeed/ArtistProfile.css";

const ArtistProfile = ({
  setArtistFeed,
  setArtistFirstState,
  artistFirstState,
  group,
  id,
  profileId,
  name,
}) => {
  const accessImg =
    "https://i9d204.p.ssafy.io:8001/file/getimg/artist-profile?id=" + profileId;

  const artistSelect = artistFirstState.filter((it) => it.id === id)[0].value;

  const clickArtist = async () => {
    if (artistSelect === false) {
      await axios
        .get(`/${group}/feed/filter/${id}`)
        .then((response) => {
          setArtistFeed(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data : ", error);
        });

      const selectResult = artistFirstState.map((it) => ({
        ...it,
        value: it.id === id,
      }));

      setArtistFirstState(selectResult);
    } else {
      await axios
        .get(`/${group}/feed/artist`)
        .then((response) => {
          setArtistFeed(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data : ", error);
        });

      const selectResult = artistFirstState.map((it) => ({
        ...it,
        value: false,
      }));

      setArtistFirstState(selectResult);
    }
  };

  console.log(artistSelect);

  return (
    <div id="artistProfile" className="artistProfile">
      <div
        id="artistProfileImgWrapper"
        className="artistProfileImgWrapper"
        onClick={clickArtist}
      >
        <img
          id="artistProfileImg"
          className="artistProfileImg"
          src={accessImg}
          alt={"안되네요."} /* 나중에 컨벤션으로 수정 필요 */
        ></img>
      </div>
      <div id="artistProfileName" className="artistProfileName">
        {name}
      </div>
      {artistSelect === true ? (
        <hr id="artistSelectLine" className="artistSelectLine"></hr>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ArtistProfile;
