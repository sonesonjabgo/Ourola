import React from "react";
import { Link } from "react-router-dom";
import "../../style/shop/ShopItem.css";

function NumberWithComma ({value}) {
  return (
    <div>\{value?.toLocaleString()}</div>
  )
}

const ShopItem = ({ src, title, path, price, content, groupId, isMembership, userRole, group }) => (
  <Link to = {`/${group}/shop/${path}`} state={{src: src, title: title, price: price, path: path, content: content, groupId: groupId, isMembership: isMembership, userRole: userRole, group: group}} className="groupLink">
    <div className="shopCard">
      <img src={`https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/${src}`} alt={title} />
      <div className="shopCardInfo">
        <div className="shopItemTitle">
         <h3 className="text">{title}</h3>
        </div>
        <div className="shopItemPrice">
         <p className="text"><NumberWithComma value={price} /></p>
        </div>
      </div>
    </div>
  </Link>
);

export default ShopItem;