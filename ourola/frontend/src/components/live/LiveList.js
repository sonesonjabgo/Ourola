import axios from "axios";
import { useEffect, useState } from "react";
import LiveItem from "./LiveItem";
import "../../style/live/LiveList.css";

const LiveList = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const accessToken = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  const [liveList, setLiveList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    axios
      .get(`/${group}/live/list`, config)
      .then((response) => {
        // console.log(response);
        setLiveList(response.data);
        console.log(response.data);
        setLoadingList(false);
      })
      .catch((error) => {
        console.log("live list 호출 오류 :: ", error);
        setLoadingList(false);
      });
  }, []);

  // console.log(concertList);

  return (
    <div className="liveListMain">
      <div className="liveList">
        {loadingList ? (
          <></>
        ) : (
          liveList.map((it) => (
            <LiveItem key={it.id} group={group} liveInfo={it} />
          ))
        )}
      </div>
    </div>
  );
};

export default LiveList;
