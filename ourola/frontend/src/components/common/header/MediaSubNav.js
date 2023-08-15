import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import "../../../style/common/header/MediaSubNav.css";

const MediaSubNav = ({ group }) => {

    const location = useLocation();
    const [clickedTab, setClickedTab] = useState(null);
    
    useEffect(() => {
        const tabFromName = location.pathname.split('/')[3]
        if (tabFromName) {
          setClickedTab(tabFromName);
        }
      }, [location.pathname]);

    const isTabActive = (tabName) => {
        return clickedTab === tabName;
    };

    return (
    <div className="mediaSubTab">
        <div className="mediaMenuButtonContainer">
            <Link
            to={`/${group}/media/fanSigning/enter`}
            className={isTabActive("fanSigning") ? "active" : ""}
            >
            팬싸인회
            </Link>
            <Link
            to={`/${group}/media/online-concert/list`}
            className={isTabActive("online-concert") ? "active" : ""}
            >
            온라인콘서트
            </Link>
        </div>
    </div>
    )
}
export default MediaSubNav