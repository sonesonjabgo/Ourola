import axios from "axios";
import { useEffect, useState } from "react";
import OnlineConcertItem from "./OnlineConcertItem";
import "../../../style/media/onlineconcert/OnlineConcertList.css";

const OnlineConcertList = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const [concertList, setConcertList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    axios
      .get(`/${group}/online-concert/list`, config)
      .then((response) => {
        // console.log(response);
        setConcertList(response.data);
        setLoadingList(false);
      })
      .catch((error) => {
        console.log("concert list 호출 오류 :: ", error);
        setLoadingList(false);
      });
  }, []);

  // console.log(concertList);

  return (
    <div className="onlineConcertListMain">
      <div className="onlineConcertHeader" style={{ height: "50px" }}>
        {/* <button>콘서트 등록</button> */}
      </div>
      <div className="onlineConcertList">
        {loadingList ? (
          <></>
        ) : (
          concertList.map((it) => (
            <OnlineConcertItem key={it.id} group={group} concertInfo={it} />
          ))
        )}
      </div>
    </div>
  );
};

export default OnlineConcertList;
