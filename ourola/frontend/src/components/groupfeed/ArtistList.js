import React, { useEffect, useState } from "react";
import "../../style/groupfeed/ArtistList.css";
import ArtistProfile from "./ArtistProfile";

const ArtistList = ({ setArtistFeed, group, artist }) => {
  const lengthResult = artist.map((it) => ({
    id: it.id,
    value: false,
  }));

  const [artistFirstState, setArtistFirstState] = useState(lengthResult);

  const [currentStartpage, setCurrentStartPage] = useState(1);
  const [sliceArtist, setSliceArtist] = useState([]);

  const sliceLength = 6;
  const artists = artist.length;
  const totalPages = Math.ceil(artists / sliceLength);

  useEffect(() => {
    if (currentStartpage === totalPages) {
      setSliceArtist(artist.slice(0, artists));
    } else {
      setSliceArtist(artist.slice(0, sliceLength));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevPage = () => {
    if (currentStartpage - 1 === totalPages) {
      setSliceArtist(
        artist.slice((currentStartpage - 2) * sliceLength, artists)
      );
    } else {
      setSliceArtist(
        artist.slice(
          (currentStartpage - 2) * sliceLength,
          (currentStartpage - 2) * sliceLength + sliceLength
        )
      );
    }

    setCurrentStartPage(currentStartpage - 1);
  };

  const nextPage = () => {
    if (currentStartpage + 1 === totalPages) {
      setSliceArtist(artist.slice(currentStartpage * sliceLength, artists));
    } else {
      setSliceArtist(
        artist.slice(
          currentStartpage * sliceLength,
          currentStartpage * sliceLength + sliceLength
        )
      );
    }

    setCurrentStartPage(currentStartpage + 1);
  };

  return (
    <div id="artistList" className="artistList">
      <section id="artistBoard" className="artistBoard">
        {currentStartpage !== 1 && (
          <button id="prevButton" className="prevButton" onClick={prevPage}>
            &lt;
          </button>
        )}
        {sliceArtist.map((it) => (
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
        {currentStartpage !== totalPages && (
          <button id="nextButton" className="nextButton" onClick={nextPage}>
            &gt;
          </button>
        )}
      </section>
    </div>
  );
};

export default ArtistList;
