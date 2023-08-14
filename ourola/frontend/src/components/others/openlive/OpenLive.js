import "../../../style/others/openlive/OpenLive.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OpenLiveItem from "./OpenLiveItem";

const OpenLive = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const sliceLength = 15;
  const [openLiveList, setOpenLiveList] = useState([]);
  const [openLiveTotalPages, setOpenLiveTotalPages] = useState(0);
  const [openLiveStartIndex, setOpenLiveStartIndex] = useState(0);
  const [liveEnd, setLiveEnd] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const [openLiveLoading, setOpenLiveLoading] = useState(true);
  const [page, setPage] = useState(0);

  const accessToken = sessionStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/${group}/open-live/list?page=0`, config)
      .then((response) => {
        setOpenLiveList(response.data.content);
        setOpenLiveTotalPages(response.data.totalPages);
        if (response.data.content[0].id <= sliceLength) {
          setLiveEnd(true);
        } else {
          setLiveEnd(false);
        }
        setOpenLiveLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setOpenLiveLoading(false);
      });
  }, []);

  const prevClick = () => {
    axios
      .get(`/${group}/open-live/list?page=${openLiveStartIndex - 5}`, config)
      .then((response) => {
        setOpenLiveList(response.data.content);
        if (response.data.content[0].id <= sliceLength) {
          setLiveEnd(true);
        } else {
          setLiveEnd(false);
        }
        setOpenLiveStartIndex(openLiveStartIndex - 5);
        setPage(openLiveStartIndex - 5);
        setActiveButton(openLiveStartIndex - 4);
        setOpenLiveLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setOpenLiveLoading(false);
      });
  };

  const numberClick = (page) => {
    axios
      .get(`/${group}/open-live/list?page=${page - 1}`, config)
      .then((response) => {
        setOpenLiveList(response.data.content);
        setPage(page - 1);
        setActiveButton(page);
        setOpenLiveLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setOpenLiveLoading(false);
      });
  };

  const nextClick = () => {
    axios
      .get(`/${group}/open-live/list?page=${openLiveStartIndex + 5}`, config)
      .then((response) => {
        setOpenLiveList(response.data.content);
        if (response.data.content[0].id <= sliceLength) {
          setLiveEnd(true);
        } else {
          setLiveEnd(false);
        }
        setOpenLiveStartIndex(openLiveStartIndex + 5);
        setPage(openLiveStartIndex + 5);
        setActiveButton(openLiveStartIndex + 6);
        setOpenLiveLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setOpenLiveLoading(false);
      });
  };

  return (
    <div id="openLive" className="openLive">
      <div id="openLiveTitle" className="openLiveTitle">
        공방신청
      </div>
      {openLiveLoading ? (
        <div></div>
      ) : (
        <div id="openLiveContentWrap" className="openLiveContentWrap">
          {openLiveList.map((it) => (
            <OpenLiveItem
              key={it.id}
              id={it.id}
              group={group}
              page={page}
              openLiveList={openLiveList}
              setOpenLiveList={setOpenLiveList}
              title={it.title}
              content={it.content}
              startDate={it.startDate}
              ticketingDate={it.ticketingDate}
              ticketingEndDate={it.ticketingEndDate}
              curParticipant={it.curParticipant}
              maxParticipant={it.maxParticipant}
              imgFilePath={it.filePath}
            ></OpenLiveItem>
          ))}
        </div>
      )}
      <div id="pagingButtons" className="pagingButtons">
        {openLiveStartIndex > 0 && (
          <button
            id="pagingInnerButton"
            className="pagingInnerButton"
            onClick={prevClick}
          >
            &lt;
          </button>
        )}

        {Array.from(
          {
            length:
              (openLiveTotalPages - openLiveStartIndex) / 5 > 1
                ? 5
                : openLiveTotalPages - openLiveStartIndex,
          },
          (_, index) => openLiveStartIndex + index + 1
        ).map((page) => (
          <button
            key={page}
            className={`pagingInnerButton ${
              activeButton === page ? "pagingActive" : ""
            }`}
            onClick={() => numberClick(page)}
          >
            {page}
          </button>
        ))}

        {openLiveStartIndex + 5 < openLiveTotalPages && (
          <button
            id="pagingInnerButton"
            className="pagingInnerButton"
            onClick={nextClick}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default OpenLive;
