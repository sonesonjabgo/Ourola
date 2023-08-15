import axios from "axios";
import { useEffect, useState } from "react";
import FanSignItem from "./FanSignItem";
import "../../../style/media/onlineconcert/OnlineConcertList.css";

const FanSignList = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];
  const [callList, setCallList] = useState([]);

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/${group}/onlinecall/list`, config) // onlinecall
      .then((response) => {
        setCallList(response.data);
      })
      .catch((error) => {
        console.log("concert list 호출 오류 :: ", error);
      });
  }, []);

  return (
    <div className="onlineConcertListMain">
      <div className="onlineConcertList">
        {callList ? (
          <FanSignItem
          keyid={callList.id}
          text={callList.title}
          content={callList.content}
          group={group}
          sessionId={callList.sessionId}
        />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FanSignList;
