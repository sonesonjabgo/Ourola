import React from 'react';
import ArtistMemberItem from "./ArtistMemberItem";

const ArtistMemberList = ({ artistMember }) => {
  console.log(typeof artistMember);

  return (
    <div id="ArtistMemberList" className="ArtistMemberList">
      <section id="ArtistMemberBoard" className="ArtistMemberBoard">
        {artistMember.map((it) => (
          <ArtistMemberItem
            key={it.id}
            id={it.id}
            profileid={it.profileFileDto.id}
          ></ArtistMemberItem>
        ))}
      </section>
    </div>
  );
};

export default ArtistMemberList;
