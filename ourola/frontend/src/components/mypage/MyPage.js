import { useEffect, useState } from "react";
import MyPageProfile from "./profile/MyPageProfile";
import axios from "axios";
import "../../style/mypage/MyPage.css";

const MyPage = () => {
  const [role, setRole] = useState("");
  const [userinfo, setUserInfo] = useState({});
  const backendPort = 8000;
  const url = `http://localhost:${backendPort}`;

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDg4NzkxMCwiZW1haWwiOiJ3b253b29AbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIifQ.PlGs16elzjOOy3Du96xWDb9__dqF58FSu6p06qliKIYPvfpOEXO7O4Xyxw2do-ezWKOnjfRS0K04Rme1zkZszA",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`${url}/user/role`, config)
      .then((response) => {
        setRole(response.data);
      })
      .catch("Error :: Failed to get role");

    if (role === "USER") {
      axios
        .get(`${url}/user/userinfo`, config)
        .then((response) => {
          //console.log(response.data);
          setUserInfo(response.data);
        })
        .catch("Error :: Failed to get fan info");
    } else if (role === "ARTIST") {
      axios
        .get(`${url}/user/artist/userinfo`, config)
        .then((response) => {
          setUserInfo(response.data);
        })
        .catch("Error :: Failed to get artist info");
    }
  }, []);

  return (
    <div className="MyPageHome">
      <div className="myPageSideBar">
        <div className="myPageProfile">
          <MyPageProfile
            profile={userinfo.profileFileDto}
            name={userinfo.name}
          />
        </div>
        <div className="myPageMenu"></div>
      </div>
      <div className="myPageMain"></div>
    </div>
  );
};

export default MyPage;
