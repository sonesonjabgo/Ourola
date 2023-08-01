import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/ourola_logo.png'
import "../../style/auth/signup.css";

const Signup = () => {
  // 회원가입 폼에서 필요한 상태값들
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);


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


  const handleSignup = () => {
    if (password !== confirmPassword) {
        return;
    }

    console.log(username, email, password, confirmPassword)
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
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="이메일 입력"
        />
      </div>
      <div>
        <label>닉네임</label> <br/>
        <input
          className = "inputbox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="닉네임 입력"
        />
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