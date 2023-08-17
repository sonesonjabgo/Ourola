// 세븐틴 들어가는 부분에 `{artist}` 가 들어가도록 수정해야 함.

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../style/common/header/GroupPageMenu.css";

import MediaSubNav from "./MediaSubNav";
import OthersSubNav from "./OthersSubNav";

function GroupPageMenu() {
  // 클릭이 되면 상태변화를 시켜 active class를 추가시킴
  // nav 클릭하면 handleTabClick이 실행되고 해당 페이지 이름이
  // clickedTab에 들어감
  // isTabActive를 통해 clickedTab과 tabName이 같은 지 확인하게 되고
  // 탭이 하얗게 변한다.
  const location = useLocation();
  const group = location.pathname.split("/")[1];

  const [clickedTab, setClickedTab] = useState(null);

  useEffect(() => {
    const tabFromName = location.pathname.split("/")[2];
    if (tabFromName) {
      setClickedTab(tabFromName);
    }
  }, [location.pathname]);

  const isTabActive = (tabName) => {
    return clickedTab === tabName;
  };

  if (
    group.length !== 0 &&
    group !== "signup" &&
    group !== "NotFound" &&
    group !== "mypage"
  ) {
    return (
      <>
        <div id="groupPageMenuContainer" className="groupPageMenuContainer">
          <div className="groupPageMenuSpacer"></div>
          <div className="groupPageMenuButtonContainer">
            <Link
              to={`/${group}/fanfeed`}
              className={isTabActive("fanfeed") ? "active" : ""}
            >
              팬 피드
            </Link>

            <Link
              to={`/${group}/group`}
              className={isTabActive("group") ? "active" : ""}
            >
              아티스트 피드
            </Link>

            <Link
              to={`/${group}/live/list`}
              className={isTabActive("live") ? "active" : ""}
            >
              라이브
            </Link>

            <Link
              to={`/${group}/media/fanSigning/enter`}
              className={isTabActive("media") ? "active" : ""}
            >
              미디어
            </Link>

            <Link
              to={`/${group}/others/announcement`}
              className={isTabActive("others") ? "active" : ""}
            >
              Others
            </Link>

            <Link
              to={`/${group}/shop`}
              className={isTabActive("shop") ? "active" : ""}
            >
              Shop
            </Link>
          </div>
          <div className="groupPageMenuSpacer"></div>
        </div>
        {/* 서브 네비게이션 바 */}
        {isTabActive("media") && <MediaSubNav group={group} />}
        {isTabActive("others") && <OthersSubNav group={group} />}
      </>
    );
  } else {
    return null;
  }
}
export default GroupPageMenu;
