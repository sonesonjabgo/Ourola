import React from 'react'
import HeaderLoggedIn from '../header/Header_LoggedIn'
import ArtistPageMenu from '../header/ArtistPageMenu_FanFeed'
import '../../style/fanfeed/FanFeed.css'

function Fanfeed () {
    return(
        <>
        <div><HeaderLoggedIn /></div>
        <div><ArtistPageMenu /></div>
        <div className="Content-container">
            <div className="Button-createfeed-container"></div>
                <button className="Button-createfeed"><span>당신의 아티스트에게 이야기를 건네보세요</span></button>
        </div>
        </>
    )
}

export default Fanfeed;