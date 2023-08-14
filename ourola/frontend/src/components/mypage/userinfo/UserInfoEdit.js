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

  const btnMode = ["변경", "중복확인", "저장"];
  const [nickBtnMode, setNickBtnMode] = useState(0);
  const [nameBtnMode, setNameBtnMode] = useState(0);
  const [pwdBtnMode, setPwdBtnMode] = useState(0);

  const [nickReadOnly, setNickReadOnly] = useState(true);
  const [nameReadOnly, setNameReadOnly] = useState(true);
  const [pwdReadOnly, setPwdReadOnly] = useState(true);

  const nickRef = useRef();
  const nameRef = useRef();
  const pwdRef = useRef();

  console.log(userinfo);

  // 닉네임 변경 버튼 클릭시
  const onNickEditClick = () => {
    setNickBtnMode((num) => {
      return (num + 1) % 3;
    });
    setNickReadOnly(false);
    nickRef.current.focus();
  };

  // 닉네임 중복 검사
  const onNickDupClick = () => {
    setNickBtnMode((num) => {
      return (num + 1) % 3;
    });
    setNickReadOnly(true);
  };

  // 닉네임 변경 저장
  const onNickSaveClick = () => {
    setNickBtnMode((num) => {
      return (num + 1) % 3;
    });

    if (userinfo.role in ["USER", "GUEST"]) {
    } else {
    }
  };

  // 이름 변경 버튼 클릭 시
  const onNameEditClick = () => {
    setNameBtnMode(2);
    setNameReadOnly(false);
    nameRef.current.focus();
  };

  // 바뀐 이름 저장
  const onNameSaveClick = () => {
    setNameBtnMode(0);
    setNameReadOnly(true);
  };

  // 비밀번호 변경 버튼 클릭시
  const onPwdEditClick = () => {
    setPwdBtnMode((num) => {
      return (num + 1) % 3;
    });
    setPwdReadOnly(false);
    pwdRef.current.focus();
  };

  // 비밀번호 확인
  const onPwdDupClick = () => {
    setPwdBtnMode((num) => {
      return (num + 1) % 3;
    });
    setPwdReadOnly(true);
  };

  // 변경된 비밀번호 저장
  const onPwdSaveClick = () => {
    setPwdBtnMode((num) => {
      return (num + 1) % 3;
    });
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
              ref={nickRef}
              name="nickname"
              className="userinfoInput"
              value={state.nickname}
              readOnly={nickReadOnly}
            ></input>
            {nickBtnMode === 0 ? (
              <button className="userinfoEditBtn" onClick={onNickEditClick}>
                {btnMode[0]}
              </button>
            ) : nickBtnMode === 1 ? (
              <button className="userinfoEditBtn" onClick={onNickDupClick}>
                {btnMode[1]}
              </button>
            ) : (
              <button className="userinfoEditBtn" onClick={onNickSaveClick}>
                {btnMode[2]}
              </button>
            )}
          </div>
        </div>
        <div className="userinfoArea">
          <div className="label">이름</div>
          <div className="userinfoEdit">
            <input
              ref={nameRef}
              name="name"
              className="userinfoInput"
              value={state.name}
              readOnly={nameReadOnly}
            ></input>
            {nameBtnMode === 0 ? (
              <button className="userinfoEditBtn" onClick={onNameEditClick}>
                {btnMode[0]}
              </button>
            ) : (
              <button className="userinfoEditBtn" onClick={onNameSaveClick}>
                {btnMode[2]}
              </button>
            )}
          </div>
        </div>
        <div className="userinfoArea">
          <div className="label">비밀번호</div>
          <div className="userinfoEdit">
            <input
              ref={pwdRef}
              name="pwd"
              className="userPwdInput"
              type="password"
              value={state.password}
              readOnly={pwdReadOnly}
            ></input>
            {pwdBtnMode === 0 ? (
              <button className="userinfoEditBtn" onClick={onPwdEditClick}>
                {btnMode[0]}
              </button>
            ) : pwdBtnMode === 1 ? (
              <button className="userinfoEditBtn" onClick={onPwdDupClick}>
                {btnMode[1]}
              </button>
            ) : (
              <button className="userinfoEditBtn" onClick={onPwdSaveClick}>
                {btnMode[2]}
              </button>
            )}
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
