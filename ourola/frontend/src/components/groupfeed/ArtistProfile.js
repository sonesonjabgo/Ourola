import React from "react";
import "../../style/groupfeed/ArtistProfile.css";

const ArtistProfile = ({ artist, id, profileId, name }) => {
  const accessImg =
    "https://i9d204.p.ssafy.io:8001/file/getimg/artist-profile?id=" + id;

  return (
    <div id="artistProfile" className="artistProfile">
      <div id="artistProfileImgWrapper" className="artistProfileImgWrapper">
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
    </div>
  );
};

export default ArtistProfile;
