import { useState } from 'react';
import LoginBasic from './LoginBasic';

const Login = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const showModal = () => {
        setModalOpen(true)
    }
    
    return (
        <div>
        <button class="btn-hover color-3" onClick={showModal}>로그인</button>
        {modalOpen && <LoginBasic setModalOpen={setModalOpen}/>}
        </div>
    )
}

export default Login