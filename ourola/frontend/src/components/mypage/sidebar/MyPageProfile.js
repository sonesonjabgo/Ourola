import "../../../style/mypage/sidebar/MyPageProfile.css";
const MyPageProfile = ({ profileId, nickName }) => {
  const url =
    `https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=` + profileId;

  //console.log(profileId);
  return (
    <div className="profile">
      <div>
        <div className="profileImgWrapper">
          <img className="profileImg" src={url} alt=""></img>
        </div>
        <div className="profileNickName">
          <span>{nickName}</span>
        </div>
      </div>
    </div>
  );
};

export default MyPageProfile;
