import React, { useState, useEffect } from "react";
import "../../style/main/Main_noLoggedIn.css";
import AllCards from "../common/cards/AllCards";
import axios from "axios";
import NotFollowingCards from "components/common/cards/NotFollowingCards";

function SearchResult(props) {
  console.log("검색결과", props);
  const accessToken = sessionStorage.getItem("Authorization");

  return (
    <>
      <div>
        {" "}
        {/* 하나의 최상위 요소로 감싸기 */}
        {accessToken ? (
          <>
            <div className="mainbanner">Ourola</div>
            <div className="groupsNew">검색 결과</div>
            <div className="underline"></div>
            <div className="cardList">
              <NotFollowingCards notSubGroup={props.allGroup} />
            </div>
          </>
        ) : (
          <>
            <div className="mainbanner">Ourola</div>
            <div className="groupsNew">검색 결과</div>
            <div className="underline"></div>
            <div className="cardList">
              <AllCards allGroup={props.allGroup} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SearchResult;
