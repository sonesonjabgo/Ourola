import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";

const OnlineConcertItem = ({ item }) => {
  const state = {
    title: item.title,
    group: item.groupDto.name,
    sessionId: item.sessionId,
    filePath: item.filePath,
  };
  const path = `/${state.group}/media/online-concert/enter`;

  return (
    <Link to={path} className="onlineConcertItem" state={{ concertInfo: item }}>
      <div className="onlineConcertInfo">
        <div className="image"></div>
        <div className="text">
          <p>{state.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default OnlineConcertItem;
