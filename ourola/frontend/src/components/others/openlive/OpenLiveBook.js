import "../../../style/others/openlive/OpenLiveBook.css";
import React, { useEffect, useRef } from "react";

const OpenLiveBook = ({
  setModalReserveOpen,
  liveId,
  group,
  title,
  content,
  startFormatDate,
  ticketingDate,
  ticketingEndDate,
  curParticipant,
  maxParticipant,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalReserveOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setModalReserveOpen]);

  return (
    <div
      id="openLiveReserveBook"
      className="openLiveReserveBook"
      ref={modalRef}
    >
      <div id="openLiveReserveBookWrap" className="openLiveReserveBookWrap">
        <div
          id="openLiveReserveBookWrapTitle"
          className="openLiveReserveBookWrapTitle"
        >
          {startFormatDate} {title}
        </div>
        <div>
          신청기간 : {ticketingDate} ~ {ticketingEndDate}
        </div>
      </div>
      <div
        id="openLiveReserveBookWrapContent"
        className="openLiveReserveBookWrapContent"
      >
        {content}
      </div>
    </div>
  );
};

export default OpenLiveBook;
