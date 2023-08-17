import axios from "axios";
import { useEffect, useState } from "react";
import LiveItem from "./LiveItem";
import "../../style/live/LiveList.css";
import { useNavigate } from "react-router-dom";

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
  const [userInfo, setUserInfo] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLiveExist, setIsLiveExist] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/user/userinfo", config)
      .then((response) => {
        const user = response.data;
        setUserInfo(user);
        if (
          (user.role === "ARTIST" || user.role === "CHANNEL_ADMIN") &&
          user.groupDto.name === group
        ) {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        console.log("사용자 정보 호출 오류 :: ", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/${group}/live/list`, config)
      .then((response) => {
        setLiveList(response.data);
        console.log(response.data);
        if (liveList.length != 0) {
          setIsLiveExist(true);
        }
        setLoadingList(false);
      })
      .catch((error) => {
        console.log("live list 호출 오류 :: ", error);
        setLoadingList(false);
      });
  }, []);

  const onLiveStartClick = () => {
    navigate(`/${group}/live/open`, {
      state: { group: group, config: config },
    });
  };

  return (
    <div className="liveListMain">
      <div className="liveListHeader">
        {isAdmin ? (
          <button
            id="liveStartBtn"
            className="liveStartBtn"
            onClick={onLiveStartClick}
          >
            라이브 켜기
          </button>
        ) : null}
      </div>
      <div className="liveList">
        {loadingList ? (
          <></>
        ) : liveList.length !== 0 ? (
          liveList.map((it) => (
            <LiveItem
              key={it.id}
              group={group}
              liveInfo={it}
              userInfo={userInfo}
            />
          ))
        ) : (
          <div style={{ alignContent: "center" }}>
            <div>진행중인 라이브가 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveList;
