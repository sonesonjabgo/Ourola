import "../../style/groupfeed/ArtistFeed.css";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import FanFeedItem from "./FanFeedItem";

const FanFeedList = ({ userInfo, userRole }) => {
  const [fanFeed, setFanFeed] = useState([]);
  const [loadingFeed, setLodingFeed] = useState(true);

  const location = useLocation();
  const group = location.pathname.split("/")[1];

  // 피드 삭제 시 리렌더링
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('리-렌더링')
  }, [count])

  // 현재 접속 중인 페이지의 그룹 전체 피드 불러오기
  useEffect(() => {
    axios
      .get(`/${group}/feed/fan`)
      .then((response) => {
        setFanFeed(response.data);
        setLodingFeed(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLodingFeed(false);
      });
  }, []);

  return (
    <div id="artistFeedList" className="artistFeedList">
      <section id="artistFeedBoard" className="artistFeedBoard">
        {fanFeed.map((it) => (
          <FanFeedItem
            key={it.id}
            id={it.id}
            group={group}
            groupId={it.groupDto.id}
            artistId={it.artistDto?.id}
            fanId={it.fanDto?.id}
            profileId={it.fanDto?.profileFileDto?.id}
            title={it.title}
            content={it.content}
            like={it.like}
            commentCount={it.commentCount}
            createDate={it.createDate}
            files={it.fileList}
            userInfo={userInfo}
            count={count}
            setCount={setCount}
            setFanFeed={setFanFeed}
            userRole = {userRole}
          ></FanFeedItem>
        ))}
      </section>
    </div>
  );
};

export default FanFeedList;
