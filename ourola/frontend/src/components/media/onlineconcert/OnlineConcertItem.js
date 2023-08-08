import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";

const OnlineConcertItem = ({ text, group, sessionId }) => {
  const path = `/${group}/online-concert/enter`;

  return (
    <Link
      to={path}
      className="onlineConcertItem"
      state={{ sessionId: sessionId }}
    >
      <div className="onlineConcertInfo">
        <div className="image"></div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default OnlineConcertItem;
