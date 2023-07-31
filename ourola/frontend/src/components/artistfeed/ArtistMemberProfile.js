import React from "react";
import "../../style/artistfeed/ArtistMemberProfile.css";

const ArtistMemberProfile = ({ artist, id, profileId, name }) => {
  const backendPort = 8000;

  const accessImg =
    "http://localhost:" +
    backendPort +
    "/file/getimg/artist-profile?id=" +
    profileId;

  return (
    <div id="ArtistMemberProfile" className="ArtistMemberProfile">
      <div className="ArtistMemberImgWrapper">
        <img
          id="ArtistMemberImg"
          className="ArtistMemberImg"
          src={accessImg}
          alt={"안되네요."} /* 나중에 컨벤션으로 수정 필요 */
        ></img>
      </div>
      <div className="ArtistMemberName">{name}</div>
    </div>
  );
};

export default ArtistMemberProfile;
