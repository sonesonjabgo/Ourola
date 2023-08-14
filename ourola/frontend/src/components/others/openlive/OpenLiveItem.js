import "../../../style/others/openlive/OpenLiveItem.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OpenLiveNotBook from "./OpenLiveNotBook";
import OpenLiveBook from "./OpenLiveBook";
import OpenLiveInfo from "./OpenLiveInfo";

const OpenLiveItem = ({
  id,
  group,
  page,
  openLiveList,
  setOpenLiveList,
  title,
  content,
  startDate,
  ticketingDate,
  ticketingEndDate,
  curParticipant,
  maxParticipant,
  imgFilePath,
}) => {
  const contentItem = content;

  const accessToken = sessionStorage.getItem("Authorization");

  const [userGetLive, setUserGetLive] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    axios
      .get(`/${group}/open-live/participate/${id}`, config)
      .then((response) => {
        setUserGetLive(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  // 나중에 실제 사진으로 수정 필요
  const accessImg =
    "https://i9d204.p.ssafy.io:8001/file/getimg/open-live/" + imgFilePath;
  const startDateParts = startDate.split("T");
  const datePart = startDateParts[0];

  const [date] = [datePart];

  const [year, month, day] = date.split("-");

  const startFormatDate = `${year.slice(2)}.${month}.${day}`;

  const [ticketingDateDayPart, ticketingDatetimePart] =
    ticketingDate.split("T");
  const [ticketingYear, ticketingMonth, ticketingDay] =
    ticketingDateDayPart.split("-");
  const [ticketingHours, ticketingMinutes, ticketingSeconds] =
    ticketingDatetimePart.split(":");
  const ticketingFormatDate = `${ticketingYear.slice(
    2
  )}.${ticketingMonth}.${ticketingDay} ${ticketingHours}:${ticketingMinutes}:${ticketingSeconds}`;

  const [ticketingEndDateDayPart, ticketingEndDatetimePart] =
    ticketingEndDate.split("T");
  const [ticketingEndYear, ticketingEndMonth, ticketingEndDay] =
    ticketingEndDateDayPart.split("-");
  const [ticketingEndHours, ticketingEndMinutes, ticketingEndSeconds] =
    ticketingEndDatetimePart.split(":");
  const ticketingEndFormatDate = `${ticketingEndYear.slice(
    2
  )}.${ticketingEndMonth}.${ticketingEndDay} ${ticketingEndHours}:${ticketingEndMinutes}:${ticketingEndSeconds}`;

  const isTicketingStarted = new Date() >= new Date(ticketingDate);

  const [modalReserveOpen, setModalReserveOpen] = useState(false);

  const openLiveReserveModalOpen = () => {
    setModalReserveOpen(true);
  };

  const [modalCancleOpen, setModalCancleOpen] = useState(false);

  const openLiveReserveModalCancleOpen = () => {
    setModalCancleOpen(true);
  };

  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const openLiveModalInfoOpen = () => {
    setModalInfoOpen(true);
  };

  return (
    <div>
      {isTicketingStarted ? (
        <div>
          {userGetLive ? (
            <div
              id="openLiveItemStartGet"
              className="openLiveItemStartGet"
              onClick={openLiveReserveModalCancleOpen}
            >
              {modalCancleOpen ? (
                <div id="openLiveNotBookWarp" className="openLiveNotBookWarp">
                  <OpenLiveNotBook
                    setModalReserveOpen={setModalReserveOpen}
                    setModalCancleOpen={setModalCancleOpen}
                    setUserGetLive={setUserGetLive}
                    setOpenLiveList={setOpenLiveList}
                    openLiveList={openLiveList}
                    liveId={id}
                    group={group}
                    title={title}
                    content={contentItem}
                    startFormatDate={startFormatDate}
                    ticketingDate={ticketingFormatDate}
                    ticketingEndDate={ticketingEndFormatDate}
                    curParticipant={curParticipant}
                    maxParticipant={maxParticipant}
                  ></OpenLiveNotBook>
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
              <div id="openLiveInfo" className="openLiveInfo">
                <div id="openLiveInfoTitle" className="openLiveInfoTitle">
                  {startFormatDate} {title}
                </div>
                <div id="openLiveInfoEndDate" className="openLiveInfoEndDate">
                  신청기간 : {ticketingFormatDate} ~ {ticketingEndFormatDate}
                </div>
              </div>
              <div id="openLiveInfoImg" className="openLiveInfoImg">
                <img
                  id="openLiveImgProfile"
                  className="openLiveImgProfile"
                  src={accessImg}
                  alt="이미지가 없습니다."
                ></img>
              </div>
            </div>
          ) : (
            <div
              id="openLiveItemStartNotGet"
              className="openLiveItemStartNotGet"
              onClick={openLiveReserveModalOpen}
            >
              {modalReserveOpen ? (
                <div id="openLiveBookWarp" className="openLiveBookWarp">
                  <OpenLiveBook
                    setModalReserveOpen={setModalReserveOpen}
                    setModalCancleOpen={setModalCancleOpen}
                    setUserGetLive={setUserGetLive}
                    setOpenLiveList={setOpenLiveList}
                    openLiveList={openLiveList}
                    liveId={id}
                    group={group}
                    page={page}
                    title={title}
                    content={contentItem}
                    startFormatDate={startFormatDate}
                    ticketingDate={ticketingFormatDate}
                    ticketingEndDate={ticketingEndFormatDate}
                    curParticipant={curParticipant}
                    maxParticipant={maxParticipant}
                  ></OpenLiveBook>
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
              <div id="openLiveInfo" className="openLiveInfo">
                <div id="openLiveInfoTitle" className="openLiveInfoTitle">
                  {startFormatDate} {title}
                </div>
                <div id="openLiveInfoEndDate" className="openLiveInfoEndDate">
                  신청기간 : {ticketingFormatDate} ~ {ticketingEndFormatDate}
                </div>
              </div>
              <div id="openLiveInfoImg" className="openLiveInfoImg">
                <img
                  id="openLiveImgProfile"
                  className="openLiveImgProfile"
                  src={accessImg}
                  alt="이미지가 없습니다."
                ></img>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {modalInfoOpen ? (
            <div id="openLiveInfoWarp" className="openLiveInfoWarp">
              <OpenLiveInfo
                setModalInfoOpen={setModalInfoOpen}
                liveId={id}
                group={group}
                title={title}
                content={contentItem}
                startFormatDate={startFormatDate}
                ticketingDate={ticketingFormatDate}
                ticketingEndDate={ticketingEndFormatDate}
                curParticipant={curParticipant}
                maxParticipant={maxParticipant}
              ></OpenLiveInfo>
            </div>
          ) : (
            <div
              id="openLiveItemNotStart"
              className="openLiveItemNotStart"
              onClick={openLiveModalInfoOpen}
            >
              <div id="openLiveInfo" className="openLiveInfo">
                <div id="openLiveInfoTitle" className="openLiveInfoTitle">
                  {startFormatDate} {title}
                </div>
                <div
                  id="openLIveInfoStartDate"
                  className="openLIveInfoStartDate"
                >
                  신청기간 : {ticketingFormatDate} ~ {ticketingEndFormatDate}
                </div>
              </div>
              <div id="openLiveInfoImg" className="openLiveInfoImg">
                <img
                  id="openLiveImgProfile"
                  className="openLiveImgProfile"
                  src={accessImg}
                  alt="이미지가 없습니다."
                ></img>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OpenLiveItem;
