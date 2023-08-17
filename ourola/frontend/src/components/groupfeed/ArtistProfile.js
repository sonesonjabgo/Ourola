import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/groupfeed/ArtistProfile.css";

const ArtistProfile = ({
  setArtistFeed,
  setArtistFilter,
  setArtistFirstState,
  artistFirstState,
  group,
  id,
  profileId,
  nickname,
}) => {
  const accessImg =
    "https://i9d204.p.ssafy.io:8001/file/getimg/artist-profile?id=" + id;

  const artistSelect = artistFirstState.filter((it) => it.id === id)[0].value;

  const config = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("Authorization"),
    },
  };

  const clickArtist = async () => {
    if (artistSelect === false) {
      await axios
        .get(`/${group}/feed/filter/${id}`, config)
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

      setArtistFilter(id);
      setArtistFirstState(selectResult);

      document
        .getElementById(`artistProfileImgWrapper-${id}`)
        .classList.add("selected");

      document
        .getElementById(`artistProfileImg-${id}`)
        .classList.add("selected");
    } else {
      await axios
        .get(`/${group}/feed/artist`, config)
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

      setArtistFilter(-1);
      setArtistFirstState(selectResult);
      document
        .getElementById(`artistProfileImgWrapper-${id}`)
        .classList.remove("selected");

      document
        .getElementById(`artistProfileImg-${id}`)
        .classList.remove("selected");
    }
  };

  return (
    <div id={`artistProfile`} className={`artistProfile`}>
      <div
        id={`artistProfileImgWrapper-${id}`}
        className={`artistProfileImgWrapper ${artistSelect ? "selected" : ""}`}
        onClick={clickArtist}
      >
        <img
          id={`artistProfileImg-${id}`}
          className={`artistProfileImg ${artistSelect ? "selected" : ""}`}
          src={accessImg}
          alt={"안되네요."} /* 나중에 컨벤션으로 수정 필요 */
        ></img>
      </div>
      <div
        id={`artistProfileName-${id}`}
        className={`artistProfileName ${artistSelect ? "selected" : ""}`}
      >
        {nickname}
      </div>
    </div>
  );
};

export default ArtistProfile;
