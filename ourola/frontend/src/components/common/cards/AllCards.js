import React from "react";
import NoLoggedCard from "./NoLoggedCard";
import "../../../style/common/cards/Cards.css";

function NewCards({ allGroup, showModal }) {

  if (!allGroup) {
    return null
  }

  return (
    <div className="cardsContainer">
      {allGroup.map((data, i) => (
        <NoLoggedCard key={i} src={`https://i9d204.p.ssafy.io:8001/file/getimg/group-img/${data.filePath}`} text={data.name} showModal={showModal} />
      ))}
    </div>
  );
}

export default NewCards;
