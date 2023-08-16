import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const KakaoLoginHandler = () => {
    // const code = new URL(window.location.href).searchParams.get("code");
    // const navigate = useNavigate();

    const accessToken = new URL(window.location.href).searchParams.get("accessToken");
    const refreshToken = new URL(window.location.href).searchParams.get("refreshToken");
    const email = new URL(window.location.href).searchParams.get("email");
    const navigate = useNavigate();

    useEffect(() => {
      // console.log(window.location.href);
      // const searchParams = new URLSearchParams(window.location.href);
      // console.log(searchParams);
      // const accessToken = searchParams.get('Access')
      
      // console.log(code)
      // console.log(accessToken, refreshToken);
      localStorage.setItem("RefreshToken", refreshToken);
      sessionStorage.setItem("UserEmail", email);
      sessionStorage.setItem("Authorization", accessToken);
      navigate('/')
    })


    return (
        <div className="LoginHandeler">
          <div className="notice">
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <p>로그인 중입니다.</p>
            <p>잠시만 기다려주세요.</p>
            <div className="spinner"></div>
          </div>
        </div>
    );
}

export default KakaoLoginHandler;