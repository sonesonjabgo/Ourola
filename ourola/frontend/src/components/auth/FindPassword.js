import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../style/auth/loginmodal.module.css';

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

        axios.post('/find/password', data)
            .then((response) => {
                console.log(response.data)
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

        axios.post('/find/verify-token', data)
            .then(() => {
                sessionStorage.setItem('ToChangePasswordEmail', email)
                setShowChangePasswordModal(true);
            })
            .catch(() => {
                alert('인증번호가 일치하지 않습니다.')
            })
    }


    return (
        <div className={styles.container}>

            <h1>비밀번호 찾기</h1>

            <button className={styles.close} onClick={onClose}>
                X
            </button>

            <form onSubmit={emailSubmit}>
                <input
                type='email'
                className={styles.inputbox}
                placeholder='아이디 ex)malangkongddeock@naver.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' className={styles.loginsubmitbutton}>
                    인증번호 받기
                </button>
            </form>

            <form onSubmit={certificationSubmit}>
                <input
                type='text'
                className={styles.inputbox}
                placeholder='인증번호를 입력하세요'
                value={certification}
                onChange={(e) => setCertification(e.target.value)}
                />
                <button type='submit' className={styles.loginsubmitbutton}>
                    인증번호 확인
                </button>
            </form>
            {showChangePasswordModal && (
            <ChangePassword onClose={onClose}/>
      )}
        </div>
    )        
}
export default FindPassword