import React from "react";
import CardItem from "./CardItem";
import "../../../style/common/cards/Cards.css";

function FollowingCards({subGroup}) {

  if (!subGroup) {
    return null
  }

  console.log(subGroup)
  return (
    <div className="cardsContainer">
      {subGroup.map((data, i) => (
        <CardItem key={i} src={data.path} text={data.name} path={data.name} />
      ))}
    </div>
  );
}

export default FollowingCards;
