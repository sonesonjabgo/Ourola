import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../style/auth/loginmodal.module.css";
import FindEmail from "./FindEmail";
import FindPassword from "./FindPassword";
import { useCookies } from "react-cookie";
import kakaologo from "../../socialLoginLogo/kakao.png";
import googlelogo from "../../socialLoginLogo/google.png";
import naverlogo from "../../socialLoginLogo/naver.png";

function Login({ onLogin, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showFindEmailModal, setShowFindEmailModal] = useState(false);
  const [showFindPasswordModal, setShowFindPasswordModal] = useState(false);

  // 자동 로그인 관련
  // 쿠키에 이메일 저장해두고 사용
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberEmail"]);

  // 저장된 쿠키값 있으면 체크박스 true, 아이디 값 셋팅
  useEffect(() => {
    if (cookies.rememberEmail !== undefined) {
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
  }, []);

  // 해당 함수 실행될 때 checkbox 체크 여부를 확인하고 쿠키에 아이디를 저장하거나 지움
  const handleOnChange = (e) => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie("rememberEmail", email, 3);
    } else {
      removeCookie("rememberEmail");
    }
  };

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

  // Form submit handler to send login data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 이메일과 비밀번호를 담은 데이터 객체 생성
    const data = {
      email: email,
      password: password,
    };

    axios
      .post("/login", data)
      .then((response) => {
        // 현재 백에서 토큰을 headers에 담아서 보내줘서 아래와 같이 작성해야 함.
        const accessToken = response.headers["authorization"];
        const refreshToken = response.headers["authorization-refresh"];

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        // 로컬 스토리지에 refreshToken 저장
        localStorage.setItem("RefreshToken", refreshToken);

        // 세션 스토리지에 accessToken 저장
        sessionStorage.setItem("UserEmail", email);
        sessionStorage.setItem("Authorization", accessToken);

        // 로그인 성공 시, 부모로 전달된 onLogin 함수 호출하여 isLoggedIn 상태 변경
        onLogin();
        closeModal();
        // 아이디 저장 체크 여부 확인하여 저장
        if (isRemember && email !== "") {
          setCookie("rememberEmail", email, 3);
        } else {
          removeCookie("rememberEmail");
        }

        return response.data;
      })
      .catch(() => {
        setShowErrorMessage(true);
      });
  };

  const closeOnBackgroundClick = (e) => {
    if (e.target.classList.contains(styles.loginBackGround)) {
      closeModal();
    }
  };

  return (
    <div className={styles.loginBackGround} onClick={closeOnBackgroundClick}>
      <div className={styles.loginBackGround}>
        <div className={styles.container}>
          {/* 모달의 X 를 선택하면 모달이 꺼짐 */}
          <button className={styles.close} onClick={closeModal}>
            X
          </button>
          <p className={styles.logintitle}>로그인</p>

          {showErrorMessage && (
            <p className={styles.errormessage}>
              아이디 혹은 비밀번호를 잘못 입력 했습니다.
            </p>
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
            <div className={styles.checkbox}>
              <label>
                <input
                  type="checkbox"
                  onChange={handleOnChange}
                  checked={isRemember}
                />{" "}
                아이디 저장
              </label>
              {/* <label>
            <input type="checkbox" name="option1" value="value1" /> 자동 로그인
          </label> */}
            </div>
            <button type="submit" className={styles.loginsubmitbutton}>
              로그인
            </button>
          </form>
          <div className={styles.loginothersdiv}>
            <div className={styles.socialLogin}>
              <a href="https://i9d204.p.ssafy.io:8001/oauth2/authorization/kakao">
                {" "}
                <img className={styles.loginModalImg} src={kakaologo} />
              </a>
              {/* <a href="https://i9d204.p.ssafy.io:8001/oauth2/authorization/naver">
                {" "}
                <img src={naverlogo} />
              </a> */}
              <a href="https://i9d204.p.ssafy.io:8001/oauth2/authorization/google">
                {" "}
                <img className={styles.loginModalImg} src={googlelogo} />
              </a>
            </div>
            <div>
              <a href="#" onClick={openFindEmailModal}>
                아이디 찾기
              </a>{" "}
              |
              {showFindEmailModal && (
                <FindEmail onClose={closeFindEmailModal} />
              )}
              <a href="#" onClick={openFindPasswordModal}>
                {" "}
                비밀번호 찾기
              </a>
              {showFindPasswordModal && (
                <FindPassword onClose={closeFindPasswordModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
