import React from 'react'
import '../../style/fanfeed/FeedCreateModalProfile.css'
import '../../style/fanfeed/FanFeedProfile.css'

const FeedCreateModalProfile = () => {

    const user = {
        name: 'PePe'
    }

    return (
        <>
        <div className='feedCreateModalProfileUserContainer'>
            <div className='feedCreateModalProfileUserImg'></div>
            {user.name}
        </div>
        </>
    )
}

export default FeedCreateModalProfile