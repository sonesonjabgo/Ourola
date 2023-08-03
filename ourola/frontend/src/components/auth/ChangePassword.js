import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/auth/loginmodal.module.css';
import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:8000";

const ChangePassword = ({ onClose }) => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const token = sessionStorage.getItem('ToChangeToken')
    
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

    const handleChangePassword = () => {
        if (password.length < 6) {
            alert('비밀번호는 6자리 이상이어야 합니다.')
        } else if (passwordsMatch === false) {
            alert('비밀번호가 일치하지 않습니다.')
        } else {
            const data = {
                'token' : token,
                'newPassword' : password,
            }
            axios.post('/find/modify-password', data)
            .then((res) => {
                // 수정해야함
                console.log(res)
                navigate('/');
            })
            .catch((err) => {
                // 수정해야함
                console.log(data)
                console.log(err)
            })
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={onClose}>
                X
            </button>

            <h1>change password</h1>

            <form onSubmit={handleChangePassword}>
                <input
                type='text'
                className={styles.inputbox}
                placeholder='바꿀 비밀번호'
                value={password}
                onChange={handlePasswordChange}
                />
                <input
                type="text"
                className={styles.inputbox}
                placeholder='비밀번호 확인'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                />
                <button type='submit' className={styles.loginsubmitbutton}>
                    비밀번호 변경
                </button>
            </form>
        </div>
    )
}

export default ChangePassword