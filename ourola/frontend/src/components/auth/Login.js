import React, { useState } from 'react';
import LoginBasic from './LoginBasic';

const Login = ({onLogin}) => {
    //const isLoggedIn = isLoggedIn

    const [modalOpen, setModalOpen] = useState(false)
    //const [isLoggedIn, setLog] = useState(false)

    const showModal = () => {setModalOpen(true)}
    // const onLogin = () => {
    //     return setLog(true)
    // }
    
    return (
        <div>
        <button className="btn-hover color-3" onClick={showModal}>로그인</button>
        {modalOpen && <LoginBasic setModalOpen={setModalOpen} onLogin={onLogin}/>}
        </div>
    )
}

export default Login