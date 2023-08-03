import React from "react";
import { Link } from "react-router-dom";
import "../../style/shop/ShopItem.css";

const ShopItem = ({ src, title, path, price }) => (
  <Link to={`/seventeen/shop/${path}`} className="groupLink">
    <div className="card">
      <img src={src} alt={title} />
      <div className="cardInfo">
        <p className="text">{title}</p>
        <p className="text">￦{price}</p>

      </div>
    </div>
  </Link>
);

export default ShopItem;