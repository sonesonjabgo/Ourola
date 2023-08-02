import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { match } from "path-to-regexp";
import "../../../style/common/header/GroupPageMenu.css";

function GroupPageMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const activeStyle = {
    color: "white",
  };

  const location = useLocation();
  const isGroupPageMatch = match("/seventeen/:subpath*");
  const isGroupPage = isGroupPageMatch(location.pathname);

  const isFanFeed = location.pathname.startsWith("/seventeen") && !location.pathname.startsWith("/seventeen/shop");
  const isShop = location.pathname.startsWith("/seventeen/shop");

  let [isSearchbarClicked, setSearchInput] = useState(false);

  if (isGroupPage) {
    return (
      <>
        <div className="groupPageMenuContainer">
          <div className="groupPageMenuSpacer"></div>
          <div className="groupPageMenuButtonContainer">
              <NavLink
                to="/seventeen"
                style={isFanFeed ? activeStyle : {}}
              >
                팬 피드
              </NavLink>
            <div className="groupPageMenuButton">아티스트 피드</div>
            <div className="groupPageMenuButton">라이브</div>
            <div className="groupPageMenuButton">미디어</div>
            <div className="groupPageMenuButton">Others</div>
            <div className="groupPageMenuButton">
              <NavLink to="/seventeen/shop" style={isShop ? activeStyle : {}}>
                Shop
              </NavLink>
            </div>
          </div>
          <div className="groupPageMenuSpacer"></div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
export default GroupPageMenu;
