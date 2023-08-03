import React, { useState } from 'react';
import LoginBasic from './LoginBasic';

const Login = ({onLogin}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const showModal = () => {setModalOpen(true)}
    
    return (
        <div>
            <button className="btn-hover color-3" onClick={showModal}>로그인</button>
            {modalOpen && <LoginBasic setModalOpen={setModalOpen} onLogin={onLogin}/>}
        </div>
    )
}

export default Login