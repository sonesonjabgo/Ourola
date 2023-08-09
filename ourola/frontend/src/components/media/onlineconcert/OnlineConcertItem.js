import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";

const OnlineConcertItem = ({ text, group, sessionId, isOpen }) => {
  const path = `/${group}/online-concert/enter`;

  return (
    <Link
      to={path}
      className="onlineConcertItem"
      state={{ sessionId: sessionId, isOpen: isOpen }}
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
