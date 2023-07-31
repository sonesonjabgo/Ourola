import { useEffect, useState } from "react";
import MyPageProfile from "./profile/MyPageProfile";
import axios from "axios";

const MyPage = () => {
  const [role, setRole] = useState("");
  const [userinfo, setUserInfo] = useState({});
  const backendPort = 8000;
  const url = `http://localhost:${backendPort}`;

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDgxNTMzMCwiZW1haWwiOiJ3b253b29AbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIifQ.Z78ThFn6YZYj7yI9CViNe-mWuLPmtq_2FdamK3rpKQxQu-M57EhS4IKG6s8a9YKB9hCBo7eRG13V0OOoWZMjsA",
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
        .then((response) => {})
        .catch();
    } else if (role === "Artist") {
    }
  });

  return (
    <div className="MyPageHome">
      <div className="mypage-side-bar">
        <div className="mypage-profile">
          <MyPageProfile config={config} />
        </div>
        <div className="mypage-menu"></div>
      </div>
      <div className="mypage-main"></div>
    </div>
  );
};

export default MyPage;
