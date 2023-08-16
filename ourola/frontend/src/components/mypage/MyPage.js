import { useEffect, useState } from "react";
import MyPageProfile from "./sidebar/MyPageProfile";
import axios from "axios";
import MyPageMenu from "./sidebar/MyPageMenu";
import Bookmark from "./bookmark/Bookmark";
import Purchase from "./purchase/Purchase";

import "../../style/mypage/MyPage.css";
import UserInfo from "./userinfo/UserInfo";
import MyActivity from "./myActivity/MyActivity";

const MyPage = () => {
  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const [loadingUserInfo, setLoadingUserInfo] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("북마크");

  // 프로필과 개인정보 수정을 위한 userinfo
  const [userinfo, setUserInfo] = useState({});

  // 북마크 내역
  const [bookmark, setBookMark] = useState([]);

  // 구매 내역
  const [purchseList, setPurchaseList] = useState([]);

  const menu = [
    { id: 1, title: "북마크" },
    { id: 2, title: "구매 내역" },
    { id: 3, title: "계정 설정" },
    { id: 4, title: "내 활동" },
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

  const onMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="myPageHome">
      <div className="myPageHeader"></div>
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
            <MyPageMenu menu={menu} onMenuClick={onMenuClick} />
          </div>
        </div>
        <div className="myPageMain">
          {selectedMenu === menu[0].title ? <Bookmark config={config} /> : null}
          {selectedMenu === menu[1].title ? <Purchase config={config} /> : null}
          {selectedMenu === menu[2].title ? (
            <UserInfo userinfo={userinfo} config={config} />
          ) : null}
          {selectedMenu === menu[3].title ? (
            <MyActivity config={config} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
