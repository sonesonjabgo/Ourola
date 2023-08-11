import React, { useState, useEffect } from "react";
import "../../style/main/Main_noLoggedIn.css";
import AllCards from "../common/cards/AllCards";
import axios from "axios";

function SearchResult(props) {
  console.log("검색결과", props);

  return (
    <>
      <div className="mainbanner">Ourola</div>
      <div className="groupsNew">검색 결과</div>
      <div className="underline"></div>
      <div className="cardList">
        <AllCards allGroup={props.allGroup} />
      </div>
    </>
  );
}

export default SearchResult;
