import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../style/auth/loginmodal.module.css';

function LoginBasic({ setModalOpen, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

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

    axios.post('/login', data)
      .then(response => {
       // 현재 백에서 토큰을 headers에 담아서 보내줘서 아래와 같이 작성해야 함.
        const accessToken  = response.headers['authorization'];

       // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${ accessToken }`;
        
        // 로그인 성공 시, 부모로 전달된 onLogin 함수 호출하여 isLoggedIn 상태 변경
        onLogin();

        // 로컬 스토리지에 accessToken 저장
        localStorage.setItem('Authorization', accessToken);

        return response.data;
    }).catch((e) => {
        console.log(e.response.data);
        setShowErrorMessage(true);
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
      {showErrorMessage ? <p className={styles.errormessage}>아이디 혹은 비밀번호를 잘못 입력 했습니다.</p> : <p></p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          className={styles.inputbox}
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className={styles.inputbox}
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" name="option1" value="value1"/> 아이디 저장
            </label>
            <label>
                <input type="checkbox" name="option1" value="value1"/> 자동 로그인
            </label>
        </div>

        <a href='https://i9d204.p.ssafy.io:8001/oauth2/authorization/kakao'>카카오</a>

        <button type='submit' className={styles.loginsubmitbutton}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginBasic;
