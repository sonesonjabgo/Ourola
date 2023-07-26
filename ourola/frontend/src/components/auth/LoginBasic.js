import { useState } from 'react';
import axios from 'axios';
import styles from '../../style/auth/ModalBasic.module.css';

function LoginBasic({ setModalOpen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    try {
      // 로그인 데이터를 백엔드로 POST 요청 전송
      const response = await axios.post('http://localhost:8000/login', data);

      // 서버로부터 응답 처리
      if (response.status === 200) {
        // 로그인 성공 시 필요한 작업 수행
        // 예를 들면 로그인 상태 관리, 페이지 이동 등
        console.log(response.headers.get("Authorization"))

      } else {
        // 로그인 실패 시 필요한 작업 수행
        // 예를 들면 에러 메시지 표시 등
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <p className={styles.logintitle}>로그인</p>
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

        {/* <div className={styles.checkbox}>
            <label>
                <input type="checkbox" name="option1" value="value1"/> 아이디 저장
            </label>
            <label>
                <input type="checkbox" name="option1" value="value1"/> 자동 로그인
            </label>
        </div> */}

        <button type='submit' className={styles.loginsubmitbutton}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginBasic;
