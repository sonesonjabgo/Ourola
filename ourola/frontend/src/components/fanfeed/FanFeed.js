import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import HeaderLoggedIn from '../header/Header_LoggedIn'
import ArtistPageMenu from '../header/ArtistPageMenu'
import CreateFeedButton from "./CreateFeedButton"
import AnnouncementOneline from "../announcement/AnnouncementOneline"
import FanFeedProfile from './FanFeedProfile'
import FanFeedList from './FanFeedList'
import '../../style/fanfeed/FanFeed.css'
import { useLocation } from "react-router-dom";

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
                <FanFeedList />
            </div>
        </div>
        </>
    )
}

export default Fanfeed;