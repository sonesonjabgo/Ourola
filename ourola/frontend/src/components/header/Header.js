import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/ourola_logo.png'
import Login from "../auth/Login"
import Singup from "../auth/Singup"

function Header({ isLoggedIn, onLogin }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className = 'mainLogo' src={mainLogo} alt='OurolaLogo' />
                    Ourola
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className="searchbar">
                        {/* <input className="searchbar-input" placeholder={isSearchbarClicked === true ? "" : "아티스트 검색"}></input> */}
                        <input className="searchbar-input" placeholder="아티스트 검색"></input>
                    </div>
                    <div>
                        <img className="searchbarbtn" src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png' />
                    </div>
                </ul>
                <div className="buttons">
                    <Login onLogin={onLogin}/>
                    <Singup/>
                </div>
            </div>
        </nav>
    )
}

export default Header;