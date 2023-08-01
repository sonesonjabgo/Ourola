import React from 'react'
import '../../style/fanfeed/FanFeedProfile.css'

function FanFeedProfile () {

    const user = {
        name: 'PePe'
    }

    const Group = {
        name: 'SEVENTEEN'
    }

    return (
        <>
        <div className='FanFeedProfile-Group-container'>
            <div className='FanFeedProfile-Group-namespace'>
                {/* 임시로 지정, DB 연결 필요 */}
                {Group.name}
            </div>
        </div>
        {/* 마이페이지 구현 후 연결 필요 */}
        <div className='FanFeedProfile-user-container'>
            <div className='FanFeedProfile-user-img'></div>
            {user.name}
            <div className='FanFeedProfile-user-underline'></div>
        </div>
        </>
    )
}

export default FanFeedProfile;