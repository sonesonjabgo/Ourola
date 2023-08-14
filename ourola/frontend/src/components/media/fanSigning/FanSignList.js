import axios from "axios";
import { useEffect, useState } from "react";
import FanSignItem from "./FanSignItem";
import "../../../style/media/onlineconcert/OnlineConcertList.css";

const FanSignList = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];
  const [concertList, setConcertList] = useState([]);

  useEffect(() => {
    axios
      .get(`/${group}/onlinecall/list`) // onlinecall
      .then((response) => {
        console.log(response.data);
        setConcertList(response.data);
      })
      .catch((error) => {
        console.log("concert list 호출 오류 :: ", error);
      });
  }, []);

  return (
    <div className="onlineConcertListMain">
      <div className="onlineConcertList">
        <FanSignItem
          keyid={concertList.id}
          text={concertList.title}
          content={concertList.content}
          group={group}
          sessionId={concertList.sessionId}
        />
      </div>
    </div>
  );
};

export default FanSignList;
