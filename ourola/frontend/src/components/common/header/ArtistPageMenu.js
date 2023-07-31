import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import { match } from 'path-to-regexp'
import '../../style/header/ArtistPageMenu.css'

function ArtistPageMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const activeStyle = {
        color: 'white',
    }

    const location = useLocation()
    const isArtistPageMatch = match('/seventeen/:subpath*')
    const isArtistPage = isArtistPageMatch(location.pathname)

    const isFanFeed = location.pathname.startsWith('/seventeen/feed')
    const isShop = location.pathname.startsWith('/seventeen/shop')

    let [isSearchbarClicked, setSearchInput] = useState(false);
    
    if (isArtistPage) {
    return (
        <>
        <div className="ArtistPageMenu-container">
            <div className="ArtistPageMenu-spacer"></div>
            <div className="ArtistPageMenu-button-container">
                <div className="ArtistPageMenu-button now">
                <NavLink to="/seventeen/feed" style = {isFanFeed ? activeStyle : {}}>
                    팬 피드
                    </NavLink>
                </div>
                <div className="ArtistPageMenu-button">
                    아티스트 피드
                </div>
                <div className="ArtistPageMenu-button">
                    라이브
                </div>
                <div className="ArtistPageMenu-button">
                    미디어
                </div>
                <div className="ArtistPageMenu-button">
                    Others
                </div>
                <div className="ArtistPageMenu-button">
                    <NavLink to="/seventeen/shop" style = {isShop ? activeStyle : {}}>
                    Shop
                    </NavLink>
                </div>
            </div>
            <div className="ArtistPageMenu-spacer"></div>
        </div> 
        </>
    );
    } else {
        return null;
    }
}
export default ArtistPageMenu;