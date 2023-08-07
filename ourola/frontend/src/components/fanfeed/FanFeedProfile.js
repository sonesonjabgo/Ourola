import React from 'react'
import '../../style/fanfeed/FanFeedProfile.css'

function FanFeedProfile (groupInfo) {

    const user = {
        name: 'PePe'
    }


    return (
        <>
        <div className='fanFeedProfileGroupContainer'>
            <img className='fanFeedProfileGroupImg' src={`https://i9d204.p.ssafy.io:8001/file/getimg/group-img/${groupInfo.groupInfo[0].filePath}`} />
            <div className='fanFeedProfileGroupNamespace'>
                {groupInfo.groupInfo[0].name}
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