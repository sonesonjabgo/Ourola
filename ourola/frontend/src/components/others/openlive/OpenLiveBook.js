import "../../../style/others/openlive/OpenLiveBook.css";
import React, { useEffect, useRef } from "react";
import axios from "axios";

const OpenLiveBook = ({
  setModalReserveOpen,
  setModalCancleOpen,
  setUserGetLive,
  setOpenLiveList,
  openLiveList,
  liveId,
  group,
  page,
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
    setModalReserveOpen(false);
  };

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

  const book = async () => {
    const accessToken = sessionStorage.getItem("Authorization");

    const config = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };

    const result = await axios.put(
      `/${group}/open-live/participate/${liveId}`,
      {},
      config
    );

    if (result.data === false) {
      const newOpenLive = await axios.get(
        `/${group}/open-live/list?page=${page}`,
        config
      );

      setOpenLiveList(newOpenLive.data.content);
      setUserGetLive(false);
      setModalReserveOpen(true);
    } else {
      const updatedOpenLiveList = openLiveList.map((it) => {
        if (it.id === liveId) {
          return result.data;
        }

        return it;
      });

      setOpenLiveList(updatedOpenLiveList);
      setUserGetLive(true);
      setModalReserveOpen(false);
      setModalCancleOpen(true);
    }
  };
  return (
    <div id="openLiveBook" className="openLiveBook" ref={modalRef}>
      <div id="openLiveBookWrap" className="openLiveBookWrap">
        <div id="openLiveBookWrapHeader" className="openLiveBookWrapHeader">
          <div>
            <button
              id="openLiveBookClose"
              className="openLiveBookClose"
              onMouseUp={closeModal}
            >
              ×
            </button>
          </div>
          <div
            id="openLiveBookWrapHeaderTitle"
            className="openLiveBookWrapHeaderTitle"
          >
            {startFormatDate} {title}
          </div>
        </div>
        <div id="openLiveBookWrapContent" className="openLiveBookWrapContent">
          <div
            id="openLiveBookWrapContentValue"
            className="openLiveBookWrapContentValue"
            style={{ whiteSpace: "pre-line" }}
          >
            {content}
          </div>
        </div>

        <div id="openLiveBookWrapFooter" className="openLiveBookWrapFooter">
          {curParticipant === maxParticipant ? (
            <div
              id="openLiveBookWrapFooterMaxTicketingDate"
              className="openLiveBookWrapFooterMaxTicketingDate"
            >
              신청기간 : {ticketingDate} ~ {ticketingEndDate}
            </div>
          ) : (
            <div
              id="openLiveBookWrapFooterTicketingDate"
              className="openLiveBookWrapFooterTicketingDate"
            >
              신청기간 : {ticketingDate} ~ {ticketingEndDate}
            </div>
          )}
          <div>
            {curParticipant === maxParticipant ? (
              <div
                id="openLiveBookMaxParticipant"
                className="openLiveBookMaxParticipant"
              >
                인원이 마감되었습니다.
              </div>
            ) : (
              <div
                id="openLiveBookParticipantWrap"
                className="openLiveBookParticipantWrap"
              >
                <div
                  id="openLiveBookParticipant"
                  className="openLiveBookParticipant"
                >
                  {curParticipant}명 / {maxParticipant}명
                </div>
                <button
                  id="openLiveBookButton"
                  className="openLiveBookButton"
                  onClick={book}
                >
                  신청
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLiveBook;
