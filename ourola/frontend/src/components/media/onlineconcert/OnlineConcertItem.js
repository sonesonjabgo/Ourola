import { Link } from "react-router-dom";
import "../../../style/media/onlineconcert/OnlineConcertItem.css";
import { useEffect, useState } from "react";
import axios from "axios";

const OnlineConcertItem = ({ text, group, sessionId }) => {
  const path = `/${group}/online-concert/view`;

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
