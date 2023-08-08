import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../style/auth/loginmodal.module.css';
import FindEmail from './FindEmail';
import FindPassword from './FindPassword'


function LoginBasic({ setModalOpen, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showFindEmailModal, setShowFindEmailModal] = useState(false);
  const [showFindPasswordModal, setShowFindPasswordModal] = useState(false);

  // 카카오
  const CLIENT_ID = 'bb2a4299b463355d7954dd1c29bc4e90'
  const REDIRECT_URI= 'http://localhost:3000/login/oauth2/code/kakao'

  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const KAKAO_AUTH_URL = 'http://localhost:8000/oauth2/authorization/kakao'

  // 이메일 찾기 모달 열기
  const openFindEmailModal = () => {
    setShowFindEmailModal(true);
  };

  // 이메일 찾기 모달 닫기
  const closeFindEmailModal = () => {
    setShowFindEmailModal(false);
  };

  // 비밀번호 찾기 모달 열기
  const openFindPasswordModal = () => {
    setShowFindPasswordModal(true);
  };

  // 비밀번호 찾기 모달 닫기
  const closeFindPasswordModal = () => {
    setShowFindPasswordModal(false);
  };



  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  // Form submit handler to send login data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 이메일과 비밀번호를 담은 데이터 객체 생성
    const data = {
      email: email,
      password: password,
    };

    console.log(data)

    axios
      .post("/login", data)
      .then((response) => {
        // 현재 백에서 토큰을 headers에 담아서 보내줘서 아래와 같이 작성해야 함.
        const accessToken = response.headers["authorization"];
        
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        // 로그인 성공 시, 부모로 전달된 onLogin 함수 호출하여 isLoggedIn 상태 변경
        onLogin();

        // 로컬 스토리지에 accessToken 저장
        localStorage.setItem("UserEmail", email);
        localStorage.setItem("Authorization", accessToken);

        return response.data;
      })
      .catch((e) => {
        console.log(e);
        // setShowErrorMessage(true);
      });
  };

  return (
    <div className={styles.container}>
      {/* 모달의 X 를 선택하면 모달이 꺼짐 */}
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <p className={styles.logintitle}>로그인</p>

      {/* {showErrorMessage && <p className={styles.errormessage}>아이디 혹은 비밀번호를 잘못 입력 했습니다.</p>} */}
      {showErrorMessage ? (
        <p className={styles.errormessage}>
          아이디 혹은 비밀번호를 잘못 입력 했습니다.
        </p>
      ) : (
        <p></p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className={styles.inputbox}
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.inputbox}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <div className={styles.checkbox}>
          <label>
            <input type="checkbox" name="option1" value="value1" /> 아이디 저장
          </label>
          <label>
            <input type="checkbox" name="option1" value="value1" /> 자동 로그인
          </label>
        </div> */}
        <button type='submit' className={styles.loginsubmitbutton}>
          로그인
        </button>
      </form>
      <div>
          <a href={KAKAO_AUTH_URL}>카카오</a> |
          <a href='https://i9d204.p.ssafy.io:8001/oauth2/authorization/naver'> 카카오</a> |
          <a href='https://i9d204.p.ssafy.io:8001/oauth2/authorization/naver'> 네이버</a> |
          <a href='https://i9d204.p.ssafy.io:8001/oauth2/authorization/google'> 구글</a>
        </div>
      <div>
      <a href='#' onClick={openFindEmailModal}>아이디 찾기</a> |
      {showFindEmailModal && <FindEmail onClose={closeFindEmailModal} />}
      <a href='#' onClick={openFindPasswordModal}> 비밀번호 찾기</a>
      {showFindPasswordModal && <FindPassword onClose={closeFindPasswordModal} />}
      </div>
    </div>
  );
}

export default LoginBasic;
