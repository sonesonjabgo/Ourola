const MyPageProfile = ({ profileId, nickName }) => {
  const backendPort = 8000;
  const url =
    `http://localhost:${backendPort}/file/getimg/profile?id=` + profileId;

  //console.log(url);
  return (
    <div>
      <img className="profileImg" src={url} alt=""></img>
      <div>{nickName}</div>
    </div>
  );
};

export default MyPageProfile;
