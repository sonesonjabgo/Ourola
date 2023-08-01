import { useEffect, useState } from "react";
import MyPageProfile from "./sidebar/MyPageProfile";
import axios from "axios";
import "../../style/mypage/MyPage.css";
import MyPageMenu from "./sidebar/MyPageMenu";
import BookMark from "./bookmark/BookMark";
import PurchaseHistory from "./purchase/PurchaseHistory";

const MyPage = () => {
  const [loadingRole, setLoadingRole] = useState(true);
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);

  // 아티스트인지 팬인지 확인하는 변수
  const [role, setRole] = useState("");

  // 프로필과 개인정보 수정을 위한 userinfo
  const [userinfo, setUserInfo] = useState({});

  // 북마크 내역
  const [bookmark, setBookMark] = useState([]);

  // 구매 내역
  const [purchseList, setPurchaseList] = useState([]);

  const backendPort = 8000;
  const url = `http://localhost:${backendPort}`;
  const menu = [
    { id: 1, title: "북마크" },
    { id: 2, title: "구매 내역" },
    { id: 3, title: "개인정보 수정" },
  ];

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDkxMDU5MSwiZW1haWwiOiJ3b253b29AbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIifQ.Z8zmWzsdbGl171mD-tKcLcTnB8Hll9LcHkOuNcw0VSuRpzN6kRg8II5QIj64pXAT-bThin9kl9YDkujOxLYEMA",
      "Content-Type": "application/json",
    },
  };

  // 사용자 프로필 사진과 닉네임을 보여준다.
  useEffect(() => {
    axios
      .get(`${url}/user/role`, config)
      .then((response) => {
        setRole(response.data);
        setLoadingRole(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoadingRole(false);
      });
  }, []);

  if (loadingRole) {
    if (role === "USER") {
      axios
        .get(`${url}/user/userinfo`, config)
        .then((response) => {
          //console.log(response.data);
          setUserInfo(response.data);
          setLoadingUserInfo(false);
        })
        .catch((error) => {
          console.error("Error fetching data : ", error);
          setLoadingUserInfo(false);
        });
    } else if (role === "ARTIST") {
      axios
        .get(`${url}/user/artist/userinfo`, config)
        .then((response) => {
          setUserInfo(response.data);
          setLoadingUserInfo(false);
        })
        .catch((error) => {
          console.error("Error fetching data : ", error);
          setLoadingUserInfo(false);
        });
    }
  }

  //console.log(userinfo);

  return (
    <div className="MyPageHome">
      <div className="myPageSideBar">
        <div className="myPageProfile">
          {!loadingUserInfo ? (
            <MyPageProfile
              profileId={userinfo.profileFileDto.id}
              nickName={userinfo.nickname}
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
        <div className="bookmark">
          <BookMark accessToken={config.headers.Authorization}></BookMark>
        </div>
        <div className="purchaseHistory">
          <PurchaseHistory config={config} />
        </div>
        {/* 내가 작성한 포스트, 댓글 내역 */}
        <div className="myPosts"></div>
        <div className="myComments"></div>
      </div>
    </div>
  );
};

export default MyPage;
