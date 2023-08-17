import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../style/shop/PurchaseSuccess.css'

const PurchaseSuccess = () => {

    const location = useLocation();
    const group = location.pathname.split("/")[1];

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="payment-success-container">
            <h1>결제 완료!</h1>
            <br></br>
            <p>모든 결제가 완료되었습니다. 감사합니다.</p>
            <div className="buttons-container">
                <button onClick={goToHome} className="home-button">홈으로</button>
            </div>
        </div>
    );
}

export default PurchaseSuccess