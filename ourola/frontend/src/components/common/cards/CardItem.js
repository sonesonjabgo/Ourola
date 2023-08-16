import React from "react";
import { Link } from "react-router-dom";
import "../../../style/common/cards/CardItem.css";
import axios from "axios";

const Card = ({ src, text, path }) => {
  const token = sessionStorage.getItem("Authorization");
  const headers = { Authorization: `Bearer ${token}` };

  // 그룹 클릭 했을 때 구독 하지 않으면 구독으로
  const checkFollow = () => {
    const data = {
      headers: headers,
    };
    axios.post(`fan/subscribe?group=${path}`, {}, data).catch(() => {
      return null;
    });
  };

  return (
    <Link to={`${path}/fanfeed`} className="groupLink" onClick={checkFollow}>
      <div className="card">
        <img className="fanFeedProfileGroupImg" src={src} alt={text} />
        <div className="cardInfo">
          <p className="text">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
