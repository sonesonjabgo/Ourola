import UserVideoComponent from "./UserVideoComponent";
import "../../../style/media/fanSigning/FanSigningViewer.css"
import { useEffect } from "react";

const FanSignVideo = ({
  mainStreamManager,
}) => {
  console.log(mainStreamManager)
  return (
    <div id="sessionSubscriber">
      {mainStreamManager !== undefined ? (
        <div id="main-video" className="col-md-6">
          <UserVideoComponent streamManager={mainStreamManager} />
        </div>
      ) : null}
    </div>
  );
};

export default FanSignVideo;
