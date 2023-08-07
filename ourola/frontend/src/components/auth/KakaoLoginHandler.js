import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const KakaoLoginHandler = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    // const navigate = useNavigate();

    useEffect(() => {
      console.log(code)
    })


    return (
        <div className="LoginHandeler">
          <div className="notice">
            <p>로그인 중입니다.</p>
            <p>잠시만 기다려주세요.</p>
            <div className="spinner"></div>
          </div>
        </div>
    );
}

export default KakaoLoginHandler;