import moment from "moment";
import "../../../style/mypage/sidebar/MyPageProfile.css";
const MyPageProfile = ({ profileId, nickName, registDate }) => {
  const url =
    `https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=` + profileId;

  //console.log(profileId);
  registDate = moment(new Date(registDate)).format("YYYY.MM.DD");
  return (
    <div className="profile">
      <div>
        <div className="profileImgWrapper">
          <img className="profileImg" src={url} alt=""></img>
        </div>
        <div className="profileNickName">
          <span>{nickName}</span>
        </div>
        <div className="registDate">{registDate} 가입</div>
      </div>
    </div>
  );
};

export default MyPageProfile;
