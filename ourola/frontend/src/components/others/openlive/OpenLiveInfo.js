import "../../../style/others/openlive/OpenLiveInfo.css";
import React, { useEffect, useRef } from "react";
import axios from "axios";

const OpenLiveInfo = ({
  setModalInfoOpen,
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

  const closeModal = () => {
    setModalInfoOpen(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalInfoOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setModalInfoOpen]);

  return (
    <div id="openLiveInfo" className="openLiveInfo" ref={modalRef}>
      <div id="openLiveInfoWrap" className="openLiveInfoWrap">
        <div id="openLiveInfoWrapHeader" className="openLiveInfoWrapHeader">
          <button
            id="openLiveInfoClose"
            className="openLiveInfoClose"
            onMouseUp={closeModal}
          >
            ×
          </button>
          <div
            id="openLiveInfoWrapHeaderTitle"
            className="openLiveInfoWrapHeaderTitle"
          >
            {startFormatDate} {title}
          </div>
        </div>
        <div id="openLiveInfoWrapContent" className="openLiveInfoWrapContent">
          <div
            id="openLiveInfoWrapContentValue"
            className="openLiveInfoWrapContentValue"
            style={{ whiteSpace: 'pre-line' }}
          >
            {content}
          </div>
        </div>

        <div id="openLiveInfoWrapFooter" className="openLiveInfoWrapFooter">
          <div
            id="openLiveInfoWrapFooterTicketingDate"
            className="openLiveInfoWrapFooterTicketingDate"
          >
            신청기간 : {ticketingDate} ~ {ticketingEndDate}
          </div>
          <div
            id="openLiveInfoWrapFooterTicketingParticipant"
            className="openLiveInfoWrapFooterTicketingParticipant"
          >
            {curParticipant} / {maxParticipant}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLiveInfo;
