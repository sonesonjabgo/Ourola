import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/ourola_logo.png'
import "../../style/auth/signup.css";

const Signup = () => {
  // 회원가입 폼에서 필요한 상태값들
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // 아이디 중복 확인을 위한 axios 요청
  // 이메일 입력 요구 추가 필요
  const checkDuplicateUsername = () => {
    axios
    .post('/fan/email-duplicate-check', { email })
    .then((response) => {
      if (response.data) {
        // 현재 세션 스토리지에 저장된 값이 새로고침해도 지워지지 않으니
        // 중복값이 있을 때 저장하고 
        // 중복값이 없을 때 지우면 된다.
        alert('아이디가 이미 사용중입니다.')
        sessionStorage.setItem('emailDuplicate', response.data)
      } else {
        sessionStorage.removeItem('emailDuplicate')
      }
    })
    .catch((error) => {
      console.error('서버 요청 에러:', error)
    })
  }

  // 닉네임 중복 확인을 위한 axios 요청
  // 닉네임 중복 확인도 아이디랑 같은 로직
  const checkDuplicateNickname = () => {
    axios
    .post('/fan/nickname-duplicate-check', { username })
    .then((response) => {
      if (response.data) {
        alert('아이디가 이미 사용중입니다.')
        sessionStorage.setItem('nicknameDuplicate', response.data)
      } else {
        sessionStorage.removeItem('nicknameDuplicate')
      }
    })
    .catch((error) => {
      console.error('서버 요청 에러:', error)
    })
  }

  // 생년월일 입력 이벤트 처리
  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };
  
  
  // 비밀번호 입력 이벤트 처리
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    setPasswordsMatch(value === confirmPassword);
  };

  // 비밀번호 확인 입력 이벤트 처리
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    setPasswordsMatch(value === password);
  };

  // 회원가입 정보를 서버에 던지기 전에 체크해야 할 것
  // 아이디, 닉네임 중복확인 정보
  // 비밀번호 비밀번호 확인 일치 여부
  // 모든 값 입력했는 지 여부
  const handleSignup = () => {
    if (password !== confirmPassword) {
        return;
    }

    console.log(email, username, password, confirmPassword)
  };

  return (
    <div className='Container'>
        <div className="SignupHeader">
            <Link to='/' className='navbar-logo'>
                <img className = 'mainLogo' src={mainLogo} alt='OurolaLogo' />
                Ourola
            </Link>
            <h2>회원가입</h2>
        </div>
      <div>
        <label>아이디 (이메일)</label> <br/>
        <input
          className = "inputbox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 입력"
        />
        <button onClick={checkDuplicateUsername}>중복 확인</button>
      </div>
      <div>
        <label>닉네임</label> <br/>
        <input
          className = "inputbox"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="닉네임 입력"
        />
        <button onClick={checkDuplicateNickname}>중복 확인</button>
      </div>
      <div>
        <label>비밀번호</label> <br/>
        <input
          className = "inputbox"
          type="password"
          value={password}
          maxLength = {20}
          onChange={handlePasswordChange}
          placeholder="영문, 숫자, 특수문자를 포함한 6 ~ 20자"
        />
      </div>
      <div>
        <label>비밀번호 확인</label> <br/>
        <input
          className = "inputbox"
          type="password"
          value={confirmPassword}
          maxLength = {20}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div>
        <label>생년월일</label> <br/>
        <input
          className="inputbox"
          type="date"
          value={birthdate}
          onChange={handleBirthdateChange}
        />
      </div>
      


      {!passwordsMatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}

      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
};

export default Signup;