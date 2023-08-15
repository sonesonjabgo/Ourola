import UserVideoComponent from "./UserVideoComponent";
import "../../../style/media/onlineconcert/OnlineConcertVideo.css";
import { useEffect } from "react";

const FanSignVideo = ({
  sessionId,
  mainStreamManager,
  onLeaveSession,
  onSwitchCamera,
}) => {
  
  const handleLeaveSession = () => {
    onLeaveSession();
  };
  
  const handleSwitchCamera = () => {
    onSwitchCamera();
  };
  
  return (
    <div id="session">
      <div id="session-header">
        <h1 id="session-title">{sessionId}</h1>
        <input
          className="btn btn-large btn-danger"
          type="button"
          id="buttonLeaveSession"
          onClick={handleLeaveSession}
          value="Leave session"
        />
        <input
          className="btn btn-large btn-success"
          type="button"
          id="buttonSwitchCamera"
          onClick={handleSwitchCamera}
          value="Switch Camera"
        />
      </div>

      {mainStreamManager !== undefined ? (
        <div id="main-video" className="col-md-6">
          <UserVideoComponent streamManager={mainStreamManager} />
        </div>
      ) : null}
    </div>
  );
};

export default FanSignVideo;
