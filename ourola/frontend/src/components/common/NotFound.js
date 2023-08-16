import React from "react";
import { Link } from "react-router-dom";
import "../../style/common/NotFound.css";
import mainLogo from "../../assets/images/ourola_logo.png";

function NotFound() {
  return (
    <div>
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">페이지를 찾을 수 없습니다.</h1>
          <p className="not-found-description">
            페이지가 존재하지 않거나 접근할 수 없습니다.
          </p>
          <div>
            <Link to="/">
              <img
                className="not-found-image"
                src={mainLogo}
                alt="OurolaLogo"
              />{" "}
              <div>홈으로 돌아가기</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
