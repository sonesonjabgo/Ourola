import "../../../style/others/openlive/OpenLive.css";
import leftarrow from "../../../assets/icons/leftarrow.png";
import rightarrow from "../../../assets/icons/rightarrow.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OpenLiveItem from "./OpenLiveItem";

const OpenLive = () => {
  const pathname = window.location.pathname;
  const group = pathname.split("/")[1];

  const sliceLength = 15;
  const [openLiveList, setOpenLiveList] = useState([]);
  const [openLiveLoading, setOpenLiveLoading] = useState(true);
  const [listLives, setListLives] = useState(-1);
  const [totalPages, setTotalPages] = useState(-1);
  const [currentStartpage, setCurrentStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sliceStartLive, setSliceStartLive] = useState([]);
  const [sliceLive, setSliceLive] = useState([]);

  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDateTime = new Date();

        const response = await axios.get(
          `http://localhost:8000/${group}/open-live/list`,
          config
        );

        const canLiveList = response.data.filter((item) => {
          return new Date(item.ticketingDate) > currentDateTime;
        });

        canLiveList.sort((a, b) => {
          return new Date(a.ticketingDate) - new Date(b.ticketingDate);
        });

        const noLiveList = response.data.filter((item) => {
          return new Date(item.ticketingDate) <= currentDateTime;
        });

        noLiveList.sort((a, b) => {
          return -(new Date(a.ticketingDate) - new Date(b.ticketingDate));
        });

        const combinedList = [...canLiveList, ...noLiveList];

        setListLives(combinedList.length);
        setTotalPages(Math.ceil(combinedList.length / sliceLength));
        setOpenLiveList(combinedList);

        // 여기서 sliceLive 설정
        if (combinedList.length < 3) {
          setSliceLive(combinedList);
        } else {
          setSliceLive(combinedList.slice(0, 3));
        }

        setOpenLiveLoading(false);
      } catch (error) {
        console.error("Error fetching data : ", error);
        setOpenLiveLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(totalPages);

  return (
    <div id="openLive" className="openLive">
      <div id="openLiveTitle" className="openLiveTitle">
        공개방송
      </div>
      {openLiveLoading ? (
        <div></div>
      ) : (
        <div id="openLiveContentWrap" className="openLiveContentWrap">
          {sliceLive.map((it) => (
            <OpenLiveItem
              key={it.id}
              id={it.id}
              title={it.title}
              startDate={it.startDate}
              ticketingDate={it.ticketingDate}
              maxParticipant={it.maxParticipant}
            ></OpenLiveItem>
          ))}
        </div>
      )}
      <div id="pagingButtons" className="pagingButtons">
        {/* <button onClick={prevPage} disabled={currentStartpage === 0}>
          이전
        </button> */}
        {Array.from(
          { length: totalPages - 15 * (currentStartpage - 1) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentStartPage(index + 1)}
              className={currentStartpage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
        {/* <button onClick={nextPage} disabled={currentStartpage === totalPages}>
          다음
        </button> */}
      </div>
    </div>
  );
};

export default OpenLive;
