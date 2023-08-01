import React from "react";
import "../../style/main/Main_noLoggedIn.css";
import NewCards from "../common/cards/NewCards";

function MainNoLoggedIn() {
  return (
    <>
      <div className="mainbanner">Ourola</div>
      <div className="groupsNew">당신의 오로라에 새로운 색을 더해보세요</div>
      <div className="underline"></div>
      <div className="cardList">
        <NewCards />
      </div>
    </>
  );
}

export default MainNoLoggedIn;
