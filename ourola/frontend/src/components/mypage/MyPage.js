import { useEffect, useState, useRef } from "react";
import MyPageProfile from "./sidebar/MyPageProfile";
import axios from "axios";
import "../../style/mypage/MyPage.css";
import MyPageMenu from "./sidebar/MyPageMenu";
import BookMark from "./bookmark/BookMark";

const MyPage = () => {
  const [loadingRole, setLoadingRole] = useState(true);
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);
  const [role, setRole] = useState("");
  const [userinfo, setUserInfo] = useState({});
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
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDg4NzkxMCwiZW1haWwiOiJ3b253b29AbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIifQ.PlGs16elzjOOy3Du96xWDb9__dqF58FSu6p06qliKIYPvfpOEXO7O4Xyxw2do-ezWKOnjfRS0K04Rme1zkZszA",
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
        <div className="purchaseHistory"></div>
        {/* 내가 작성한 포스트, 댓글 내역 */}
        <div className="myPosts"></div>
        <div className="myComments"></div>
      </div>
    </div>
  );
};

export default MyPage;
