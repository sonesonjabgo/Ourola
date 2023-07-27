import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLoggedIn from '../header/Header_LoggedIn'
import ArtistPageMenu from '../header/ArtistPageMenu_FanFeed'
import CreateFeedButton from "./CreateFeedButton"
import AnnouncementOneline from "../announcement/AnnouncementOneline"
import FanFeedProfile from './FanFeedProfile'
import FanFeedFeedList from './FanFeedFeedList'
import '../../style/fanfeed/FanFeed.css'

function Fanfeed () {
    return(
        <>
        <div className="FanFeed-Header">
            <div><HeaderLoggedIn /></div>
            <div><ArtistPageMenu /></div>
        </div>
        <div className="Content-container">
            <div className="Button-createfeed-container">
                <CreateFeedButton />
            </div>
            <Link to='/announcement'>
            <div className="OnelineAnnouncement-container">
                <AnnouncementOneline />
            </div>
            </Link>
            <div className='Fanfeed-profile-container'>
                <FanFeedProfile />
            </div>
            <div className='Fanfeed-feed-container'>
                <FanFeedFeedList />
            </div>
        </div>
        </>
    )
}

export default Fanfeed;