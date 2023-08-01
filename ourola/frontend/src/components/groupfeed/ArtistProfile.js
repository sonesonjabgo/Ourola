import React from "react";
import "../../style/groupfeed/ArtistProfile.css";

const ArtistProfile = ({ artist, id, profileId, name }) => {
  const backendPort = 8000;

  const accessImg =
    "http://localhost:" +
    backendPort +
    "/file/getimg/artist-profile?id=" +
    profileId;

  return (
    <div id="artistProfile" className="artistProfile">
      <div id="artistImgWrapper" className="artistImgWrapper">
        <img
          id="artistImg"
          className="artistImg"
          src={accessImg}
          alt={"안되네요."} /* 나중에 컨벤션으로 수정 필요 */
        ></img>
      </div>
      <div id="artistName" className="artistName">
        {name}
      </div>
    </div>
  );
};

export default ArtistProfile;
