import React from "react";
import { Link } from "react-router-dom";
import "../../../style/common/cards/CardItem.css";

const BookMarkItem = ({ src, text, path }) => (
  <Link to={path} className="artist-link">
    <div className="card">
      <img src={src} alt={text} />
      <div className="card-info">
        <p className="text">{text}</p>
      </div>
    </div>
  </Link>
);
export default BookMarkItem;
