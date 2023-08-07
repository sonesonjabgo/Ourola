import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const OnlineConcertItem = ({ text, group, sessionId }) => {
  const path = `/${group}/online-concert/enter`;
  const accessToken = localStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        console.log(response.data);
        setNickname(response.data.nickname);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  return (
    <Link
      to={path}
      className="onlineConcertItem"
      state={{ sessionId: sessionId, group: group, nickname: nickname }}
    >
      <div className="onlineConcertInfo">
        <div className="image"></div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default OnlineConcertItem;
