import React from 'react'
import "../../style/fanfeed/FanFeedList.css";
import FanFeedItem from "./FanFeedItem"

const FanFeedList = ({ Group, GroupFeed }) => {
    return (
      <div className="GroupFeedList">
        <section className="GroupFeedBoard">
          {GroupFeed ? GroupFeed.map((it) => (
            <FanFeedItem
              key={it.id}
              id={it.id}
              Group={Group}
              GroupId={it.GroupUserDto.id}
              GroupProfileId={it.GroupUserDto.profileFileDto.id}
              GroupName={it.GroupUserDto.name}
              title={it.title}
              content={it.content}
              like={it.like}
              createDate={it.createDate}
            ></FanFeedItem>
          )) : "왜없"}
        </section>
      </div>
    );
  };
  
  export default FanFeedList;
  