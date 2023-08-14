import UserInfoEdit from "./UserInfoEdit";
import "../../../style/mypage/userinfo/UserInfo.css";

const UserInfo = ({ userinfo, config }) => {
  return (
    <div className="userinfoMain">
      <div className="userinfoMainTitle">내 정보</div>
      <div className="userinfoBody">
        <UserInfoEdit userinfo={userinfo} config={config} />
      </div>
    </div>
  );
};

export default UserInfo;
