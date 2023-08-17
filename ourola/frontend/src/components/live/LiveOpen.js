import { useLocation } from "react-router-dom";

const LiveOpen = () => {
  const location = useLocation();

  return (
    <div className="liveOpenMain">
      <div className="">
        <div id="liveTitle">제목</div>
        <input></input>
      </div>
    </div>
  );
};

export default LiveOpen;
