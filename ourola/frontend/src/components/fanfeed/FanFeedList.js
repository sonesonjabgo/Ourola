import React from 'react'
import "../../style/fanfeed/FanFeedList.css";
import FanFeedItem from "./FanFeedItem"

const FanFeedList = ({ artist, artistFeed }) => {
    return (
      <div className="ArtistFeedList">
        <section className="ArtistFeedBoard">
          {artistFeed ? artistFeed.map((it) => (
            <FanFeedItem
              key={it.id}
              id={it.id}
              artist={artist}
              artistId={it.artistUserDto.id}
              artistProfileId={it.artistUserDto.profileFileDto.id}
              artistName={it.artistUserDto.name}
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
  