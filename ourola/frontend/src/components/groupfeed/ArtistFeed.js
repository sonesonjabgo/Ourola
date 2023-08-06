import "../../style/groupfeed/ArtistFeed.css";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import ArtistFeedItem from "./ArtistFeedItem";
import { format } from "date-fns";

const CustomDatePickerHeader = ({ date, decreaseMonth, increaseMonth }) => {
  const yearAndMonth = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="custom-datepicker-header">
      <button className="custom-datepicker-prev" onClick={decreaseMonth}>
        {"<"}
      </button>
      <div className="custom-datepicker-title">{yearAndMonth}</div>
      <button className="custom-datepicker-next" onClick={increaseMonth}>
        {">"}
      </button>
    </div>
  );
};

const ArtistFeed = ({ setArtistFeed, artistFilter, group, artistFeed }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [initStartDate, setInitStartDate] = useState(new Date());
  const [initEndDate, setInitEndDate] = useState(new Date());

  useEffect(() => {
    if (artistFeed.length > 0) {
      let initialMinDate = new Date(artistFeed[0].createDate);
      let initialMaxDate = new Date(artistFeed[0].createDate);

      for (const feedItem of artistFeed) {
        const feedDate = new Date(feedItem.createDate);

        if (feedDate < initialMinDate) {
          initialMinDate = feedDate;
        }
        if (feedDate > initialMaxDate) {
          initialMaxDate = feedDate;
        }
      }

      setStartDate(
        new Date(
          Date.UTC(
            initialMinDate.getUTCFullYear(),
            initialMinDate.getUTCMonth(),
            initialMinDate.getUTCDate()
          )
        )
      );
      setEndDate(
        new Date(
          Date.UTC(
            initialMaxDate.getUTCFullYear(),
            initialMaxDate.getUTCMonth(),
            initialMaxDate.getUTCDate()
          )
        )
      );
      setInitStartDate(
        new Date(
          Date.UTC(
            initialMinDate.getUTCFullYear(),
            initialMinDate.getUTCMonth(),
            initialMinDate.getUTCDate()
          )
        )
      );
      setInitEndDate(
        new Date(
          Date.UTC(
            initialMaxDate.getUTCFullYear(),
            initialMaxDate.getUTCMonth(),
            initialMaxDate.getUTCDate()
          )
        )
      );
    }
  }, [artistFeed]);

  const CustomInput = ({ value, onClick }) => (
    <button id="datePicker" className="datePicker" onClick={onClick}>
      {value}
    </button>
  );

  const onClickDateFilter = async () => {
    const formatStartDate = format(startDate, "yyyyMMdd");
    const formatEndDate = format(endDate, "yyyyMMdd");

    const result = await axios.get(
      `/${group}/feed/filter/date?startDate=${formatStartDate}&endDate=${formatEndDate}`
    );

    if (artistFilter !== -1) {
      const artistFilterData = result.data.filter(
        (it) => it.artistDto.id === artistFilter
      );

      setArtistFeed(artistFilterData);
    } else {
      setArtistFeed(result.data);
    }
  };

  return (
    <div id="artistFeedList" className="artistFeedList">
      <div id="artistDateFilterWarp" className="artistDateFilterWarp">
        <div id="artistDateWarp" className="artistDateWarp">
          <div id="artistStartDate" className="artistStartDate">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput />}
              dateFormat="yyyy.MM.dd"
              minDate={initStartDate}
              maxDate={initEndDate}
              renderCustomHeader={(props) => (
                <CustomDatePickerHeader {...props} />
              )}
              locale={ko}
            />
          </div>
          <div id="artistStartBetween" className="artistStartBetween">
            -
          </div>
          <div id="artistEndDate" className="artistEndDate">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              customInput={<CustomInput />}
              dateFormat="yyyy.MM.dd"
              minDate={initStartDate}
              maxDate={initEndDate}
              renderCustomHeader={(props) => (
                <CustomDatePickerHeader {...props} />
              )}
              locale={ko}
            />
          </div>
          <div
            id="artistDateFilterButtonWarp"
            className="artistDateFilterButtonWarp"
          >
            <button
              id="artistDateFilterButton"
              className="artistDateFilterButton"
              onClick={onClickDateFilter}
            >
              조회
            </button>
          </div>
        </div>
      </div>
      <section id="artistFeedBoard" className="artistFeedBoard">
        {artistFeed.map((it) => (
          <ArtistFeedItem
            key={it.id}
            id={it.id}
            group={group}
            artistId={it.artistDto.id}
            artistProfileId={it.artistDto.profileFileDto.id}
            artistName={it.artistDto.name}
            title={it.title}
            content={it.content}
            like={it.like}
            commentCount={it.commentCount}
            createDate={it.createDate}
          ></ArtistFeedItem>
        ))}
      </section>
    </div>
  );
};

export default ArtistFeed;
