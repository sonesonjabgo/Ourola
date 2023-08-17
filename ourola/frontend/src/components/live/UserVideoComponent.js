import React from "react";
import "../../style/live/UserVideoComponent.css";
import OpenViduVideoComponent from "components/media/onlineconcert/openvidu/OvVideo";

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
