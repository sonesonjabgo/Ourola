import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../style/auth/loginmodal.module.css';
import FindEmailResult from './FindEmailResult';

function FindEmail({ onClose }) {
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');
  const [tel, setTel] = useState('');
  const [userId, setUserId] = useState(null);

  const isValidBirthday = (birthday) => {
    // 생년월일 형식을 검증하는 함수 (YYYY-MM-DD 형식)
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(birthday);
  };


  const handleSubmit = () => {
    // 입력값 확인 및 조건 검증
    if (username.trim() === '' || !isValidBirthday(birthday) || tel.length < 10) {
      alert('입력값이 올바르지 않습니다.');
      return; // 요청을 보내지 않음
    }

    const data = {
      name : username,
      birthday : birthday,
      tel : tel,
    }

    axios.post('/find/email', data)
      .then((response)=>{
        const userId = response.data
        setUserId(userId);
      })
      .catch(() => {
        alert('일치하는 정보가 없습니다.')
      })
  }

  return (
    <div className={styles.container}>

      <h1>아이디 찾기</h1>

      <button className={styles.close} onClick={onClose}>
          X
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type='username'
          placeholder='이름'
          className={styles.inputbox}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='birthday'
          placeholder='생년월일 ex) 2000-01-01'
          className={styles.inputbox}
          maxLength='10'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        
        <input
          type='tel'
          placeholder='번호 ex)01011112222'
          className={styles.inputbox}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <button type='submit' className={styles.loginsubmitbutton}>
          제출하기
        </button>
      </form>
      {userId && <FindEmailResult userId={userId} onClose={onClose} />}
    </div>  
  )
};

export default FindEmail;