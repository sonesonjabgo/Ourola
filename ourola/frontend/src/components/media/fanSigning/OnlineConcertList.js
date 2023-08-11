import axios from "axios";
import { useEffect, useState } from "react";
import OnlineConcertItem from "./OnlineConcertItem";
import "../../../style/media/onlineconcert/OnlineConcertList.css";

const OnlineConcertList = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];
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
            key={it.id}
            text={it.title}
            group={group}
            sessionId={it.sessionId}
            open={it.open}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineConcertList;
