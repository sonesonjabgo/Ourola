import UserVideoComponent from "./UserVideoComponent";
import "../../../style/media/onlineconcert/OnlineConcertVideo.css";

const OnlineConcertVideo = ({ sessionId, mainStreamManager }) => {
  return (
    <div id="onlineConcertVideoMain">
      <div id="onlineConcertVideoBody">
        {mainStreamManager !== undefined ? (
          <div id="main-video" className="main-video">
            <UserVideoComponent streamManager={mainStreamManager} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OnlineConcertVideo;
