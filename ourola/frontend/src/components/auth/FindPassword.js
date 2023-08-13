import React, { useState } from 'react';
import axios from 'axios';
import "../../style/auth/findPassword.css"

import ChangePassword from './ChangePassword'


function FindPassword({ onClose }) {
    const [email, setEmail] = useState('');
    const [certification, setCertification] = useState('');
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

    // 백에 인증번호를 요청하는 절차
    const emailSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
        }

        if (data.email === "") {
            alert('아이디를 입력 해주세요.')
            return;
        } 

        axios.post('/find/password', data)
            .then(() => {
                alert('인증번호가 메일로 전송됐습니다.')
            })
            .catch(() => {
                alert('일치하는 아이디가 없습니다.')
            })
    }


    // 이메일로 받은 인증번호를 입력하고 백에 다시 확인하는 절차
    const certificationSubmit = (e) => {
        e.preventDefault();

        const data = {
            token: certification,
        }
            
        if (data.token === "") {
            alert('인증번호를 입력 해주세요.')
            return;
        } 

        axios.post('/find/verify-token', data)
            .then((res) => {
                // 요청의 값으로 true / false 가 전해짐
                if (res.data === true) {
                    sessionStorage.setItem('ToChangeToken', certification)
                    setShowChangePasswordModal(true);
                } else {
                    alert('인증번호가 일치하지 않습니다.')
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }

    const blockEnterChangePassword = () => {
        setShowChangePasswordModal(false);
    }



    return (
        <div className="container">

            <h1>비밀번호 찾기</h1>

            <button className="close" onClick={onClose}>
                X
            </button>

            <form onSubmit={emailSubmit} className='passwordForm'>
                <input
                type='email'
                className="inputbox"
                placeholder='아이디   ex) abc123@naver.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' className="loginsubmitbutton">
                    인증번호 받기
                </button>
            </form>

            <form onSubmit={certificationSubmit} className='passwordForm'>
                <input
                type='text'
                className="inputbox"
                placeholder='인증번호를 입력하세요'
                value={certification}
                onChange={(e) => setCertification(e.target.value)}
                />
                <button type='submit' className="loginsubmitbutton">
                    인증번호 확인
                </button>
            </form>
            {showChangePasswordModal && (
            <ChangePassword onClose={blockEnterChangePassword}/>
      )}
        </div>
    )        
}
export default FindPassword