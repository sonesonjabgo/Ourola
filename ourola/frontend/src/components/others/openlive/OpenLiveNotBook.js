import "../../../style/others/openlive/OpenLiveNotBook.css";
import React, { useEffect, useRef } from "react";
import axios from "axios";

const OpenLiveNotBook = ({
  setModalReserveOpen,
  setModalCancleOpen,
  setUserGetLive,
  setOpenLiveList,
  openLiveList,
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
    setModalCancleOpen(false);
  };

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
    const realDelete = window.confirm("정말로 취소하시겠습니까?");

    if (!realDelete) {
      return;
    }

    const accessToken = sessionStorage.getItem("Authorization");

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

    const updatedOpenLiveList = openLiveList.map((it) => {
      if (it.id === liveId) {
        return result.data;
      }

      return it;
    });

    setOpenLiveList(updatedOpenLiveList);
    setUserGetLive(false);
    setModalReserveOpen(true);
    setModalCancleOpen(false);
  };

  return (
    <div id="openLiveNotBook" className="openLiveNotBook" ref={modalRef}>
      <div id="openLiveNotBookWrap" className="openLiveNotBookWrap">
        <button
          id="openLiveNotBookClose"
          className="openLiveNotBookClose"
          onMouseUp={closeModal}
        >
          ×
        </button>
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
            style={{ whiteSpace: "pre-line" }}
          >
            {content}
          </div>
        </div>

        <div
          id="openLiveNotBookWrapFooter"
          className="openLiveNotBookWrapFooter"
        >
          <div
            id="openLiveNotBookWrapFooterTicketingDate"
            className="openLiveNotBookWrapFooterTicketingDate"
          >
            신청기간 : {ticketingDate} ~ {ticketingEndDate}
          </div>
          <div>
            <div
              id="openLiveNotBookParticipant"
              className="openLiveNotBookParticipant"
            >
              {curParticipant}등 / {maxParticipant}명
            </div>
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
