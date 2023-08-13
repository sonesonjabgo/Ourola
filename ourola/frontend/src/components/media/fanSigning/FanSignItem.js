import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";

const FanSignItem = ({ keyid, text, group, sessionId, open }) => {
  const path = `/${group}/media/fanSigning/enter`;

  return (
    <Link
      to={path}
      className="onlineConcertItem"
      state={{ sessionId: sessionId, open: open, callId : keyid }}
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

export default FanSignItem;
