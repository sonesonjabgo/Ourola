import React from "react";
import { Link } from "react-router-dom";
import "../../../style/common/cards/CardItem.css";

const NoLoggedCard = ({ src, text, showModal }) => (
  <div className="groupLink" onClick={showModal}>
    <div className="card">
      <img className="fanFeedProfileGroupImg" src={src} alt={text} />
      <div className="cardInfo">
        <p className="text">{text}</p>
      </div>
    </div>
  </div>
);

export default NoLoggedCard;
