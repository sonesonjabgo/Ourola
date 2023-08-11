import { useEffect, useState } from "react";
import MyPageProfile from "./sidebar/MyPageProfile";
import axios from "axios";
import MyPageMenu from "./sidebar/MyPageMenu";
import BookMark from "./bookmark/BookMark";
import PurchaseHistory from "./purchase/PurchaseHistory";

import "../../style/mypage/MyPage.css";

const MyPage = () => {
  const accessToken = localStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const [loadingUserInfo, setLoadingUserInfo] = useState(true);

  // 프로필과 개인정보 수정을 위한 userinfo
  const [userinfo, setUserInfo] = useState({});

  // 북마크 내역
  const [bookmark, setBookMark] = useState([]);

  // 구매 내역
  const [purchseList, setPurchaseList] = useState([]);

  const menu = [
    { id: 1, title: "북마크" },
    { id: 2, title: "구매 내역" },
    { id: 3, title: "개인정보 수정" },
  ];

  // 사용자 프로필 사진과 닉네임을 보여준다.
  useEffect(() => {
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        setUserInfo(response.data);
        setLoadingUserInfo(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoadingUserInfo(false);
      });
  }, []);

  // console.log(userinfo);

  return (
    <div className="myPageHome">
      <div className="myPageHeader">
        <p className="userNickName">{userinfo.nickname}</p>
        <p className="userEmail">{userinfo.email}</p>
      </div>
      <div className="myPageBody">
        <div className="myPageSideBar">
          <div className="myPageProfile">
            {!loadingUserInfo ? (
              <MyPageProfile
                profileId={userinfo.profileFileDto.id}
                nickName={userinfo.nickname}
                registDate={userinfo.registDate}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="myPageMenu">
            <MyPageMenu menu={menu} />
          </div>
        </div>
        <div className="myPageMain">
          <div className="myPageMainTitle">
            <span>구매 내역</span>
          </div>
          <div className="bookmark">
            {/* <BookMark accessToken={accessToken}></BookMark> */}
          </div>
          <div className="purchaseHistory">
            <PurchaseHistory config={config} />
          </div>
          {/* 내가 작성한 포스트, 댓글 내역 */}
          <div className="myPosts"></div>
          <div className="myComments"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
