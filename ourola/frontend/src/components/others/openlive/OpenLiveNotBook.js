import "../../../style/others/openlive/OpenLiveNotBook.css";
import React, { useEffect, useRef } from "react";
import axios from "axios";

const OpenLiveNotBook = ({
  setModalCancleOpen,
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
        setModalCancleOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setModalCancleOpen]);

  const bookCancle = async () => {
    const accessToken = localStorage.getItem("Authorization");

    const config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };

    const result = await axios.delete(
      `/${group}/open-live/participate/${liveId}/cancel`,
      config
    );

    console.log(result);
  };

  return (
    <div id="openLiveNotBook" className="openLiveNotBook" ref={modalRef}>
      <div id="openLiveNotBookWrap" className="openLiveNotBookWrap">
        <div
          id="openLiveNotBookWrapHeader"
          className="openLiveNotBookWrapHeader"
        >
          <div
            id="openLiveNotBookWrapHeaderTitle"
            className="openLiveNotBookWrapHeaderTitle"
          >
            {startFormatDate} {title}
          </div>
        </div>
        <div
          id="openLiveNotBookWrapContent"
          className="openLiveNotBookWrapContent"
        >
          <div
            id="openLiveNotBookWrapContentValue"
            className="openLiveNotBookWrapContentValue"
          >
            {content}
          </div>
        </div>

        <div
          id="openLiveNotBookWrapFooter"
          className="openLiveNotBookWrapFooter"
        >
          <div
            id="openLiveNotBookWrapHeaderTicketingDate"
            className="openLiveNotBookWrapHeaderTicketingDate"
          >
            신청기간 : {ticketingDate} ~ {ticketingEndDate}
          </div>
          <div>
            {curParticipant} / {maxParticipant}
            <button
              id="openLiveBookCancleButton"
              className="openLiveBookCancleButton"
              onClick={bookCancle}
            >
              신청취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLiveNotBook;
