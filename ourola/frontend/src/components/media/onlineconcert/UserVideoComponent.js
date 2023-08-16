import React from "react";
import OpenViduVideoComponent from "./openvidu/OvVideo";
import "../../../style/media/onlineconcert/UserVideoComponent.css";

const UserVideoComponent = (props) => {
  return (
    <div className="streamComponentWrapper">
      {props.streamManager !== undefined ? (
        <div className="streamcomponent">
          <OpenViduVideoComponent streamManager={props.streamManager} />
        </div>
      ) : null}
    </div>
  );
};

export default UserVideoComponent;
