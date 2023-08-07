import axios from "axios";
import { useEffect, useState } from "react";
import OnlineConcertItem from "./OnlineConcertItem";
import "../../../style/media/onlineconcert/OnlineConcertList.css";

const OnlineConcertList = () => {
  const group = "seventeen";
  const [concertList, setConcertList] = useState([]);

  useEffect(() => {
    axios
      .get(`/${group}/online-concert/list`)
      .then((response) => {
        setConcertList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("concert list 호출 오류 :: ", error);
      });
  }, []);

  return (
    <div className="onlineConcertListMain">
      <div className="onlineConcertList">
        {concertList.map((it) => (
          <OnlineConcertItem
            text={it.title}
            group={group}
            sessionId={it.sessionId}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineConcertList;
