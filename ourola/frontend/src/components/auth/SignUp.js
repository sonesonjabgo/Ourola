import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../style/auth/signup.css";

const Signup = () => {
  // 회원가입 폼에서 필요한 상태값들
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // 회원가입하고 메인페이지로 보내기 위한 history 객체 가져오기
  const navigate = useNavigate();

  // 아이디 중복 확인을 위한 axios 요청
  const checkDuplicateUsername = () => {
    // 이메일 형식 확인
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('이메일 형식이 아닙니다.')
      return;
    }
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
        alert('사용할 수 있는 아이디입니다.')
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
    .post('/fan/nickname-duplicate-check', { nickname })
    .then((response) => {
      if (response.data) {
        alert('닉네임이 이미 사용중입니다.')
        sessionStorage.setItem('nicknameDuplicate', response.data)
      } else {
        alert('사용할 수 있는 닉네임입니다.')
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

  const handleSignup = () => {
    // 회원가입 정보를 서버에 던지기 전에 체크해야 할 것
    // 아이디, 닉네임 중복확인 정보
    // 비밀번호 비밀번호 확인 일치 여부
    // 모든 값 입력했는 지 여부
    
    // 세션에서 emailDuplicate과 nicknameDuplicate을 가져옵니다.
    const emailDuplicate = sessionStorage.getItem('emailDuplicate');
    const nicknameDuplicate = sessionStorage.getItem('nicknameDuplicate');

    // 모든 조건 검사
    if (emailDuplicate === null && nicknameDuplicate === null && passwordsMatch === true) {
      // 모든 조건을 만족했다면 axios 요청
      const signupData = {
        name : username,
        email : email,
        nickname : nickname,
        password : password,
        birthday : birthdate,
      };
      
      axios.post('/fan/sign-up', signupData)
      // axios 요청까지 성공하면 로그인 전 메인페이지로 보내기
      .then(() => {
        navigate('/');
      })
    } else {
      alert('정확한 정보를 입력 해주세요.')
    }
  };

  return (
    <div className='container'>
      <div className='signupContainer'>
      <h1>회원가입</h1>
      <div>
          <label>이름</label> <br/>
          <input
            className="inputBox"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="이름 입력"
          />
      </div>
        <div>
          <label>아이디 (이메일)</label> <br/>
          <input
            className = "inputBox"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 입력"
          />
          <button onClick={checkDuplicateUsername} className='doubleCheckButton'>중복 확인</button>
        </div>
        <div>
          <label>닉네임</label> <br/>
          <input
            className = "inputBox"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임 입력"
          />
          <button onClick={checkDuplicateNickname} className='doubleCheckButton'>중복 확인</button>
        </div>
        <div>
          <label>비밀번호</label> <br/>
          <input
            className = "inputBox"
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
            className = "inputBox"
            type="password"
            value={confirmPassword}
            maxLength = {20}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <label>생년월일</label> <br/>
          <input
            className="inputBox"
            type="date"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
        </div>
        


        {!passwordsMatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}

        <button onClick={handleSignup} className='signupSubmitButton'>회원가입</button>
      </div>
  </div>
  );
};

export default Signup;