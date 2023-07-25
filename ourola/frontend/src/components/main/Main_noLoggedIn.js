import React from 'react';
import '../../style/main/Main_noLoggedIn.css'
import Cards from '../../components/cards/Cards'

function MainNoLoggedIn () {
    return (
        <>
        <div className="mainbanner">
            Ourola
        </div>
        <div className="artists-new">
            당신의 오로라에 새로운 색을 더해보세요
        </div>
        <div className="underline"></div>
        <div className="new-list"><Cards /></div>
        </>
    )
}

export default MainNoLoggedIn