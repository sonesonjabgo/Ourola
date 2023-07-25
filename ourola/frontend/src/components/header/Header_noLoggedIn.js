import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/header/Header_noLoggedIn.css';
import mainLogo from '../../assets/images/ourola_logo.png'

import Login from "../auth/Login"
import Singup from "../auth/Singup"

function HeaderNoLoggedIn() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let [isSearchbarClicked, setSearchInput] = useState(false);

    return (
        <>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img className = 'mainLogo' src={mainLogo} alt='OurolaLogo' />
                Ourola
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <div className="searchbar">
                    <input className="searchbar-input" 
                        onFocus = {() => {
                            setSearchInput(true);
                        }}

                        onBlur = {() => {
                            setSearchInput(false);
                        }}
                        placeholder={isSearchbarClicked === true ? "" : "아티스트 검색"}>
                    </input>
                    <div>
                        <img className="searchbarbtn" src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png' />
                    </div>
                </div>
                </ul>
                {/* <button class="btn-hover color-3" onClick={openModal}>로그인</button> */}
                {/* 모달이 클릭되면  */}
                <Login/>
                {/* <button class="btn-hover color-3">회원가입</button> */}
                <Singup/>
            </div>
        </nav>
        </>
    );
}

export default HeaderNoLoggedIn