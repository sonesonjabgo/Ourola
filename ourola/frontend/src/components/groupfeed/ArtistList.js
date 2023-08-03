import React, { useEffect, useState } from "react";
import "../../style/groupfeed/ArtistList.css";
import ArtistProfile from "./ArtistProfile";

const ArtistList = ({ setArtistFeed, group, artist }) => {
  const lengthResult = artist.map((it) => ({
    id: it.id,
    value: false,
  }));

  const [artistFirstState, setArtistFirstState] = useState(lengthResult);

  return (
    <div id="artistList" className="artistList">
      <section id="artistBoard" className="artistBoard">
        {artist.map((it) => (
          <ArtistProfile
            key={it.id}
            setArtistFirstState={setArtistFirstState}
            artistFirstState={artistFirstState}
            setArtistFeed={setArtistFeed}
            group={group}
            id={it.id}
            profileId={it.profileFileDto.id}
            name={it.name}
          ></ArtistProfile>
        ))}
      </section>
    </div>
  );
};

export default ArtistList;
