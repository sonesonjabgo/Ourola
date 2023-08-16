import React, { useState, useEffect } from 'react'
import '../../style/fanfeed/FeedCreateModalProfile.css'

const FeedCreateModalProfile = ({userInfo, userRole}) => {

    const [profileImg, setProfileImg] = useState();

    console.log(userInfo)

    // 일반 사용자 프로필 사진 가져오기
    const getFanPic = () => {
      const getFanImg = "https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=" + userInfo.profileFileDto.id;
      setProfileImg(getFanImg)
    }
  
    // 아티스트 또는 소속사 프로필 사진 가져오기
    const getArtistPic = () => {
      const getArtistImg = "https://i9d204.p.ssafy.io:8001/file/getimg/artist-profile?id=" + userInfo.profileFileDto.id;
      setProfileImg(getArtistImg)
    }
  
    // 사용자가 배정받은 역할에 따라 다른 함수 실행
    useEffect(() => {
      if (userRole !== "ARTIST" && userRole !== "CHANNEL_ADMIN") {
        getFanPic()
      } else {
        getArtistPic()
      }
    }, [])

    return (
        <>
        <div className="feedCreateModalProfileContainer">
            <div className='feedCreateModalProfileUserImgContainer'>
              {userInfo.profileFileDto ? (
                <img className="feedCreateModalProfileUserImg" src={profileImg}/>) :
                (<img className="feedCreateModalProfileUserImg" src={`https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=1`}/>)}
            </div>
            <div className="feedCreateModalProfileUsername">
            {userInfo.nickname}
            </div>
        </div>
        </>
    )
}

export default FeedCreateModalProfile