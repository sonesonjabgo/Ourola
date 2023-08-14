import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../../../style/common/header/OthersSubNav.css";

const OthersSubNav = ({ group }) => {
    const [clickedTab, setClickedTab] = useState("announcement");

    const handleTabClick = (tabName) => {
        setClickedTab(tabName);
    };

    const isTabActive = (tabName) => {
        return clickedTab === tabName;
    };

    return (
        <div className="othersSubTab">
            <div className="othersMenuButtonContainer">
                <Link
                to={`/${group}/others/announcement`}
                className={isTabActive("announcement") ? "active" : ""}
                onClick={() => handleTabClick("announcement")}
                >
                공지사항
                </Link>
                <Link
                to={`/${group}/others/openlive`}
                className={isTabActive("openlive") ? "active" : ""}
                onClick={() => handleTabClick("openlive")}
                >
                공방신청
                </Link>
                {/* <Link
                to={`/${group}/others/membershipOnly`}
                className={isTabActive("membershipOnly") ? "active" : ""}
                onClick={() => handleTabClick("membershipOnly")}
                >
                멤버쉽
                </Link> */}
            </div>
        </div>
        )
}
export default OthersSubNav