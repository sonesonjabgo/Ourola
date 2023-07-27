import "../../style/artist/ArtistMemberProfile.css";

const ArtistMemberProfile = ({ artist, id, name }) => {
  const backendPort = 8000;

  const accessImg =
    "http://localhost:" + backendPort + "/file/" + artist + "/getImg?id=" + id;

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
