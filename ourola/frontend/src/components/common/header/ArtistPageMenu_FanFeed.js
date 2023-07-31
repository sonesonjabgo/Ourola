import React, { useState } from "react";
import "../../../style/common/header/ArtistPageMenu.css";

function ArtistPageMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let [isSearchbarClicked, setSearchInput] = useState(false);

  return (
    <>
      <div className="ArtistPageMenu-container">
        <div className="ArtistPageMenu-spacer"></div>
        <div className="ArtistPageMenu-button-container">
          <div className="ArtistPageMenu-button now">팬 피드</div>
          <div className="ArtistPageMenu-button">아티스트 피드</div>
          <div className="ArtistPageMenu-button">라이브</div>
          <div className="ArtistPageMenu-button">미디어</div>
          <div className="ArtistPageMenu-button">Others</div>
          <div className="ArtistPageMenu-button">Shop</div>
        </div>
        <div className="ArtistPageMenu-spacer"></div>
      </div>
    </>
  );
}
export default ArtistPageMenu;
