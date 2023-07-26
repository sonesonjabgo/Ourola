import { useState } from 'react';
import LoginBasic from './LoginBasic';

const Singup = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const showModal = () => {
        setModalOpen(true)
    }
    
    return (
        <div>
        <button className="btn-hover color-3" onClick={showModal}>회원가입</button>
        {modalOpen && <LoginBasic setModalOpen={setModalOpen}/>}
        </div>
    )
}

export default Singup