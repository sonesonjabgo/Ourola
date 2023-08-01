import React from "react";
import { Link } from "react-router-dom";
import "../../../style/common/cards/CardItem.css";

const Card = ({ src, text, path }) => (
  <Link to={path} className="groupLink">
    <div className="card">
      <img src={src} alt={text} />
      <div className="cardInfo">
        <p className="text">{text}</p>
      </div>
    </div>
  </Link>
);

export default Card;
