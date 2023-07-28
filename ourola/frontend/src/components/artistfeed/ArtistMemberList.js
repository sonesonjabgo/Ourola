import "../../style/artistfeed/ArtistMemberList.css";
import ArtistMemberProfile from "./ArtistMemberProfile";

const ArtistMemberList = ({ artist, artistMember }) => {
  return (
    <div id="ArtistMemberList" className="ArtistMemberList">
      <section id="ArtistMemberBoard" className="ArtistMemberBoard">
        {artistMember.map((it) => (
          <ArtistMemberProfile
            key={it.id}
            artist={artist}
            id={it.id}
            name={it.name}
          ></ArtistMemberProfile>
        ))}
      </section>
    </div>
  );
};

export default ArtistMemberList;
