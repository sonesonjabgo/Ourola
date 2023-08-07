import React from 'react'
import '../../style/fanfeed/FanFeedProfile.css'

function FanFeedProfile (groupInfo) {

    const user = {
        name: 'PePe'
    }

    console.log(groupInfo)
    return (
        <>
        <div className='fanFeedProfileGroupContainer'>
            <div className='fanFeedProfileGroupNamespace'>
                {/* 임시로 지정, DB 연결 필요 */}
                
            </div>
        </div>
        {/* 마이페이지 구현 후 연결 필요 */}
        <div className='fanFeedProfileUserContainer'>
            <div className='fanFeedProfileUserImg'></div>
            {user.name}
            <div className='fanFeedProfileUserUnderline'></div>
        </div>
        </>
    )
}

export default FanFeedProfile;