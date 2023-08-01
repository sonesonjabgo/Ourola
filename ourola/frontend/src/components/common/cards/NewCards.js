import React from "react";
import CardItem from "./CardItem";
import "../../../style/common/cards/Cards.css";
import Image1 from "../../../assets/images/bts_profile.png";
import Image2 from "../../../assets/images/blackpink_profile.png";
import Image3 from "../../../assets/images/newjeans_profile.png";
import Image4 from "../../../assets/images/parkboyoung_profile.png";

function NewCards() {
  const cardData = [
    {
      src: Image1,
      text: "BTS",
      path: "/bts/feed",
    },
    {
      src: Image2,
      text: "BLACKPINK",
      path: "/blackpink/feed",
    },
    {
      src: Image3,
      text: "NewJeans",
      path: "/newjeans/feed",
    },
    {
      src: Image4,
      text: "Park Boyoung",
      path: "/parkboyoung/feed",
    },
  ];

  return (
    <div className="cardsContainer">
      {cardData.map((data, i) => (
        <CardItem key={i} src={data.src} text={data.text} path={data.path} />
      ))}
    </div>
  );
}

export default NewCards;
