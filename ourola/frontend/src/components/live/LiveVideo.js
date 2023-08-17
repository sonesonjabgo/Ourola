import "../../style/live/LiveVideo.css";
import UserVideoComponent from "./UserVideoComponent";

const LiveVideo = ({ sessionId, mainStreamManager }) => {
  return (
    <div id="liveVideoMain">
      <div id="liveVideoBody">
        {mainStreamManager !== undefined ? (
          <div id="main-video" className="main-video">
            <UserVideoComponent streamManager={mainStreamManager} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LiveVideo;
