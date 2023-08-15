import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";

const OnlineConcertItem = ({ group, concertInfo }) => {
  const path = `/${group}/media/online-concert/enter`;
  // const fileUrl =
  //   "https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/" + state.filePath;

  return (
    <Link
      to={path}
      className="onlineConcertItem"
      state={{ concertInfo: concertInfo }}
    >
      <div className="onlineConcertInfo">
        {/* <div className="onlineConcertImageWrapper">
          <img src={fileUrl} alt=""></img>
        </div> */}
        <div className="text">
          <p>{concertInfo.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default OnlineConcertItem;
