import UserInfoEdit from "./UserInfoEdit";
import "../../../style/mypage/userinfo/UserInfo.css";

const UserInfo = ({ userinfo }) => {
  return (
    <div className="userinfoMain">
      <div className="userinfoMainTitle">내 정보</div>
      <div className="userinfoBody">
        <UserInfoEdit userinfo={userinfo} />
      </div>
    </div>
  );
};

export default UserInfo;
