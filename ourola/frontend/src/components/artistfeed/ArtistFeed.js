import "../../style/artistfeed/ArtistFeed.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistFeedItem from "./ArtistFeedItem";

const ArtistFeed = ({ artist, artistFeed }) => {
  return (
    <div id="ArtistFeedList" className="ArtistFeedList">
      <section id="ArtistFeedBoard" className="ArtistFeedBoard">
        {artistFeed.map((it) => (
          <ArtistFeedItem
            key={it.id}
            id={it.id}
            artist={artist}
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
