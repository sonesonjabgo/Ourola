import React from "react";
import CardItem from "./CardItem";
import "../../../style/common/cards/Cards.css";
import Image1 from "../../../assets/images/bts_profile.png";
import Image2 from "../../../assets/images/blackpink_profile.png";
import Image3 from "../../../assets/images/newjeans_profile.png";
import Image4 from "../../../assets/images/parkboyoung_profile.png";

function NewCards({allGroup}) {

  return (
    <div className="cardsContainer">
      {allGroup.map((data, i) => (
        <CardItem key={i} src={data.path} text={data.name} path={data.name} />
      ))}
    </div>
  );
}

export default NewCards;
