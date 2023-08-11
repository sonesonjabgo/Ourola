import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../../../style/common/header/MediaSubNav.css";

const MediaSubNav = ({ group }) => {
    
    const [clickedTab, setClickedTab] = useState("fanSigning");
    
    const handleTabClick = (tabName) => {
        setClickedTab(tabName);
    };

    const isTabActive = (tabName) => {
        return clickedTab === tabName;
    };

    return (
    <div className="mediaSubTab">
        <div className="mediaMenuButtonContainer">
            <Link
            to={`/${group}/fanSigning`}
            className={isTabActive("fanSigning") ? "active" : ""}
            onClick={() => handleTabClick("fanSigning")}
            >
            팬싸인회
            </Link>
            <Link
            to={`/${group}/online-concert/list`}
            className={isTabActive("online-concert") ? "active" : ""}
            onClick={() => handleTabClick("online-concert")}
            >
            온라인콘서트
            </Link>
        </div>
    </div>
    )
}
export default MediaSubNav