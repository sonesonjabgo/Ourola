import "../../../style/others/openlive/OpenLiveItem.css";
import reserved from "../../../assets/icons/reserved.png";
import notreserved from "../../../assets/icons/notreserved.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

const OpenLiveItem = ({
  id,
  group,
  title,
  startDate,
  ticketingDate,
  ticketingEndDate,
  maxParticipant,
  imgFilePath,
}) => {
  const accessToken = localStorage.getItem("Authorization");

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

  return (
    <div>
      {isTicketingStarted ? (
        <div>
          {userGetLive ? (
            <div id="openLiveItemStartGet" className="openLiveItemStartGet">
              <div id="openLiveInfo" className="openLiveInfo">
                <div id="openLiveInfoTitle" className="openLiveInfoTitle">
                  {startFormatDate} {title}
                </div>
                <div id="openLiveInfoEndDate" className="openLiveInfoEndDate">
                  티켓팅 끝나는 시간 : {ticketingEndFormatDate}
                </div>
              </div>
              <div
                id="openLiveInfoReserveWrap"
                className="openLiveInfoReserveWrap"
              >
                <img
                  id="openLiveInfoReserve"
                  className="openLiveInfoReserve"
                  src={reserved}
                  alt="이미지가 없습니다."
                ></img>
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
            >
              <div id="openLiveInfo" className="openLiveInfo">
                <div id="openLiveInfoTitle" className="openLiveInfoTitle">
                  {startFormatDate} {title}
                </div>
                <div id="openLiveInfoEndDate" className="openLiveInfoEndDate">
                  티켓팅 끝나는 시간 : {ticketingEndFormatDate}
                </div>
              </div>
              <div
                id="openLiveInfoReserveWrap"
                className="openLiveInfoReserveWrap"
              >
                <img
                  id="openLiveInfoReserve"
                  className="openLiveInfoReserve"
                  src={notreserved}
                  alt="이미지가 없습니다."
                ></img>
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
        <div id="openLiveItemNotStart" className="openLiveItemNotStart">
          <div id="openLiveInfo" className="openLiveInfo">
            <div id="openLiveInfoTitle" className="openLiveInfoTitle">
              {startFormatDate} {title}
            </div>
            <div id="openLIveInfoStartDate" className="openLIveInfoStartDate">
              티켓팅 시작 시간 : {ticketingFormatDate}
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
  );
};

export default OpenLiveItem;
