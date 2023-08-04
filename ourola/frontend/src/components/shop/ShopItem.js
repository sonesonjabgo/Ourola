import React from "react";
import { Link } from "react-router-dom";
import "../../style/shop/ShopItem.css";

const ShopItem = ({ src, title, path, price }) => (
  <Link to = {`/seventeen/shop/${path}`} state={{src: src, title: title, price: price, path: path}} className="groupLink">
    <div className="shopCard">
      <img src={src} alt={title} />
      <div className="shopCardInfo">
        <h3 className="text">{title}</h3>
        <p className="text">￦{price}</p>
      </div>
    </div>
  </Link>
);

export default ShopItem;