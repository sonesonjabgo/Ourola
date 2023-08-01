import axios from "axios";
import { useEffect, useState } from "react";

const MyPageProfile = ({ profile, name }) => {
  const [profileImg, setProfileImg] = useState([]);

  const backendPort = 8000;
  const url = `http://localhost:${backendPort}`;

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTY5MDg4NzkxMCwiZW1haWwiOiJ3b253b29AbmF2ZXIuY29tIiwicm9sZSI6IlVTRVIifQ.PlGs16elzjOOy3Du96xWDb9__dqF58FSu6p06qliKIYPvfpOEXO7O4Xyxw2do-ezWKOnjfRS0K04Rme1zkZszA",
      "Content-Type": "application/json",
    },
  };

  // useEffect(() => {
  //   axios
  //     .get(`${url}/file/getimg/profile`, config)
  //     .then((response) => {
  //       console.log(response);
  //       setProfileImg(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   return profileImg.current;
  // }, []);

  return (
    <div className="">
      {profileImg ? (
        <img src={(`${url}/file/getimg/profile`, config)} alt="" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default MyPageProfile;
