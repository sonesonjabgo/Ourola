import styles from '../../style/auth/ModalBasic.module.css';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../../_actions/user_action';

function LoginBasic({setModalOpen}) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    // const dispatch = useDispatch();

    // const [Email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");

    // const onEmailHandler = (event) => {
    //     setEmail(event.currentTarget.value);
    // }
    // const onPasswordHandler = (event) => {
    //     setPassword(event.currentTarget.value);
    // }

    // const onSubmitHandler = (event) => {
    //     // 버튼만 누르면 리로드 되는것을 막아줌
    //     event.preventDefault();

    //     console.log('Email', Email);
    //     console.log('Password', Password);
        
    //     let body = {
    //         email: Email,
    //         password: Password,
    //     }

    //     dispatch(loginUser(body));
    // }


    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>X</button>
            {/* <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <br />
                <button formAction=''>
                    Login
                </button>
            </form> */}
        </div>
    );
}
export default LoginBasic;