import React, { useEffect, useState } from "react";
import axios from "axios";
import ArtistMemberList from "./ArtistMemberList";
import { useLocation } from "react-router-dom";

const Artist = () => {
  const location = useLocation();
  const artist = location.state;
  const backendPort = 8000;

  const [loading, setLoding] = useState(true);
  const [artistMember, setartistMembert] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${backendPort}/artist/${artist}/memberList`)
      .then((response) => {
        setartistMembert(response.data);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(artistMember);

  return (
    <div id="Artist" className="Artist">
      {loading ? <div></div> : <ArtistMemberList artistMember={artistMember} />}
    </div>
  );
};

export default Artist;
