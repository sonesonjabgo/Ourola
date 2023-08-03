// 세븐틴 들어가는 부분에 `{artist}` 가 들어가도록 수정해야 함.

import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { match } from "path-to-regexp";
import "../../../style/common/header/GroupPageMenu.css";

function GroupPageMenu() {
  const activeStyle = {
    color: "white",
  };

  const location = useLocation();
  const isGroupPageMatch = match("/seventeen/:subpath*");
  const isGroupPage = isGroupPageMatch(location.pathname);

  // 상태 변화로 클릭된 탭 하얀색으로
  


  if (isGroupPage) {
    return (
      <>
        <div className="groupPageMenuContainer">
          <div className="groupPageMenuSpacer"></div>
          <div className="groupPageMenuButtonContainer" >
              <NavLink to="/seventeen" activeStyle={activeStyle}>
                팬 피드
              </NavLink>              
              <NavLink to="/seventeen/group"  activeStyle={activeStyle}>
                아티스트 피드
              </NavLink>
              <div className="groupPageMenuButton">라이브</div>
              <NavLink to="/seventeen/fanSigning"  activeStyle={activeStyle}>
                미디어
              </NavLink>              
              <NavLink to="/seventeen/announcement"  activeStyle={activeStyle}>
                Others
              </NavLink>
              <NavLink to="/seventeen/shop"  activeStyle={activeStyle}>
                Shop
              </NavLink>
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
