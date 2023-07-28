import React from 'react'
import '../../style/fanfeed/FeedCreateModalProfile.css'
import '../../style/fanfeed/FanFeedProfile.css'

const FeedCreateModalProfile = () => {

    const user = {
        name: 'PePe'
    }

    return (
        <>
        <div className='FeedCreateModalProfile-user-container'>
            <div className='FeedCreateModalProfile-user-img'></div>
            {user.name}
        </div>
        </>
    )
}

export default FeedCreateModalProfile