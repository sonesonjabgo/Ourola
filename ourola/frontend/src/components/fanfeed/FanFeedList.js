import "../../style/groupfeed/ArtistFeed.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FanFeedItem from "./FanFeedItem";

const FanFeedList = ({ group, fanFeed }) => {

  return (
    <div id="artistFeedList" className="artistFeedList">
      <section id="artistFeedBoard" className="artistFeedBoard">
        {fanFeed.map((it) => (
          <FanFeedItem
            key={it.id}
            id={it.id}
            group={group}
            groupId={it.groupDto.id}
            // fanId={it.fanDto.id}
            title={it.title}
            content={it.content}
            like={it.like}
            commentCount={it.commentCount}
            createDate={it.createDate}
          ></FanFeedItem>
        ))}
      </section>
    </div>
  );
};

export default FanFeedList;
