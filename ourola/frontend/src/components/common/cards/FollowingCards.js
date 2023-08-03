import React from "react";
import CardItem from "./CardItem";
import "../../../style/common/cards/Cards.css";

function FollowingCards({subGroup}) {

  if (!subGroup) {
    return null
  }


  return (
    <div className="cardsContainer">
      {subGroup.map((data, i) => (
        <CardItem key={i} src={`https://i9d204.p.ssafy.io:8001/file/getimg/group-img/${data.filePath}`} text={data.name} path={data.name} />
      ))}
    </div>
  );
}

export default FollowingCards;
