import React from "react";
import "../../style/groupfeed/ArtistList.css";
import ArtistProfile from "./ArtistProfile";

const ArtistList = ({ group, artist }) => {
  return (
    <div id="artistList" className="artistList">
      <section id="artistBoard" className="artistBoard">
        {artist.map((it) => (
          <ArtistProfile
            key={it.id}
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
