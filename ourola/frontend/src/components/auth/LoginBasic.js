import { useState } from 'react';
import axios from 'axios';
import styles from '../../style/auth/loginmodal.module.css';

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

    axios.post('/login', data).then(response => {
        const { accessToken } = response.data;
        console.log(response)
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log(axios.defaults.headers)
    }).catch((e) => {
        console.log(e.response.data);
        return "이메일 혹은 비밀번호를 확인하세요.";
    });
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
