import UserVideoComponent from "./UserVideoComponent";
import "../../../style/media/fanSigning/FanSigningViewer.css"
import { useEffect } from "react";

const FanSignVideo = ({
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
    <div id="sessionPublisher">
      <input
          className="leaveButton"
          type="button"
          id="buttonLeaveSession"
          onClick={handleLeaveSession}
          value="종료하기"
      />
      {mainStreamManager !== undefined ? (
        <div id="main-video" className="col-md-6">
          <UserVideoComponent streamManager={mainStreamManager} />
        </div>
      ) : null}
    </div>
  );
};

export default FanSignVideo;
