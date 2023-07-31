import React from "react";
import CardItem from "./CardItem";
import "../../../style/common/cards/Cards.css";
import Image1 from "../../../assets/images/seventeen_profile.jpg";

function FollowingCards() {
  const cardData = [
    {
      src: Image1,
      text: "SEVENTEEN",
      path: "/seventeen/feed",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((data, i) => (
        <CardItem key={i} src={data.src} text={data.text} path={data.path} />
      ))}
    </div>
  );
}

export default FollowingCards;
