import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../style/shop/PurchaseSuccess.css'

const PurchaseFailed = () => {

    const location = useLocation();

    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const group = query.get("group");

    const goToHome = () => {
        navigate(`/${group}/shop`);
      };
      
    return (
        <div className="payment-success-container">
            <h1>결제에 실패했습니다</h1>
            <br></br>
            <p>문제가 발생해 결제가 완료되지 않았습니다. 다시 시도해주십시오.</p>
            <div className="buttons-container">
                <button onClick={goToHome} className="home-button">홈으로</button>
            </div>
        </div>
    );
}

export default PurchaseFailed