import { useRef, useState } from "react";
import "../../../style/mypage/userinfo/UserInfoEdit.css";
import moment from "moment";
import axios from "axios";

const UserInfoEdit = ({ userinfo }) => {
  const [state, setState] = useState({
    email: userinfo.email,
    nickname: userinfo.nickname,
    name: userinfo.name,
    password: "********",
    birthday: moment(new Date(userinfo.birthday)).format("YYYY년 MM월 DD일"),
  });

  const [nickModalOpen, setNickModalOpen] = useState(false);
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [pwdModalOpen, setPwdModalOpen] = useState(false);

  // console.log(userinfo);

  const onNickEditClick = () => {
    setNickModalOpen(true);
  };

  const onNameClick = () => {
    setNameModalOpen(true);
  };

  const onPwdClick = () => {
    setPwdModalOpen(true);
  };

  return (
    <div className="userInfoWrapper">
      <div className="userInfo">
        <div className="userEmailArea">
          <div className="label">이메일</div>
          <div className="userEmail">{state.email}</div>
        </div>
        <div className="userinfoArea">
          <div className="label">닉네임</div>
          <div className="userinfoEdit">
            <input
              className="userinfoInput"
              value={state.nickname}
              readOnly={true}
            ></input>
            <button className="userinfoEditBtn" onClick={onNickEditClick}>
              변경
            </button>
          </div>
        </div>
        <div className="userinfoArea">
          <div className="label">이름</div>
          <div className="userinfoEdit">
            <input
              className="userinfoInput"
              value={state.name}
              readOnly={true}
            ></input>
            <button className="userinfoEditBtn" onClick={onNameClick}>
              변경
            </button>
          </div>
        </div>
        <div className="userinfoArea">
          <div className="label">비밀번호</div>
          <div className="userinfoEdit">
            <input
              className="userPwdInput"
              type="password"
              value={state.password}
              readOnly={true}
            ></input>
            <button className="userinfoEditBtn" onClick={onPwdClick}>
              변경
            </button>
          </div>
        </div>
        <div className="userinfoArea">
          <div className="label">생년월일</div>
          <div className="userinfoEdit">
            <span className="userBirthday">{state.birthday}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoEdit;
