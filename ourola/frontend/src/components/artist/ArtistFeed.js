import "../../style/artist/ArtistFeed.css";
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
            artistId={it.artistUserDto.id}
            artistProfileId={it.artistUserDto.profileFileDto.id}
            artistName={it.artistUserDto.name}
            title={it.title}
            content={it.content}
            like={it.like}
            createDate={it.createDate}
          ></ArtistFeedItem>
        ))}
      </section>
    </div>
  );
};

export default ArtistFeed;
