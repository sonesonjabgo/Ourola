import "../../style/groupfeed/ArtistFeed.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistFeedItem from "./ArtistFeedItem";

const ArtistFeed = ({ group, artistFeed }) => {
  return (
    <div id="artistFeedList" className="artistFeedList">
      <section id="artistFeedBoard" className="artistFeedBoard">
        {artistFeed.map((it) => (
          <ArtistFeedItem
            key={it.id}
            id={it.id}
            group={group}
            artistId={it.artistDto.id}
            artistProfileId={it.artistDto.profileFileDto.id}
            artistName={it.artistDto.name}
            title={it.title}
            content={it.content}
            like={it.like}
            commentCount={it.commentCount}
            createDate={it.createDate}
          ></ArtistFeedItem>
        ))}
      </section>
    </div>
  );
};

export default ArtistFeed;
