import "../../../style/others/announcement/Announcement.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementList from "./AnnouncementList";
import { useLocation } from "react-router-dom";

const Announcement = () => {
  const location = useLocation();
  const group = location.state;

  const [loading, setLoding] = useState(true);
  const [announcementList, setAnnouncementList] = useState({});
  const [announcementTotalPages, setAnnouncementTotalPages] = useState(0);
  const [announcementStartIndex, setAnnouncementStartIndex] = useState(0);
  const [announcementEnd, setAnnouncementEnd] = useState(false);
  const accessToken = localStorage.getItem("Authorization");

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`/${group}/announcement/list?page=0`, config)
      .then((response) => {
        setAnnouncementList(response.data.content);
        setAnnouncementTotalPages(response.data.totalPages);
        setAnnouncementStartIndex(
          Number.toFixed((response.data.totalPages - 1) / 5)
        );
        if (response.data.content[0].id <= 35) {
          setAnnouncementEnd(true);
        } else {
          setAnnouncementEnd(false);
        }
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
  }, []);

  console.log(announcementList);
  console.log(announcementTotalPages);
  console.log(announcementStartIndex);
  console.log(announcementEnd);

  const prevClick = () => {
    axios
      .get(
        `/${group}/announcement/list?page=${announcementStartIndex - 5}`,
        config
      )
      .then((response) => {
        setAnnouncementList(response.data.content);
        if (response.data.content[0].id <= 35) {
          setAnnouncementEnd(true);
        } else {
          setAnnouncementEnd(false);
        }
        setAnnouncementStartIndex(announcementStartIndex - 5);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
  };

  const numberClick = (page) => {
    axios
      .get(`/${group}/announcement/list?page=${page - 1}`, config)
      .then((response) => {
        setAnnouncementList(response.data.content);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
  };

  const nextClick = () => {
    axios
      .get(
        `/${group}/announcement/list?page=${announcementStartIndex + 5}`,
        config
      )
      .then((response) => {
        setAnnouncementList(response.data.content);
        if (response.data.content[0].id <= 35) {
          setAnnouncementEnd(true);
        } else {
          setAnnouncementEnd(false);
        }
        setAnnouncementStartIndex(announcementStartIndex + 5);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoding(false);
      });
  };

  return (
    <div id="announcement" className="announcement">
      <div>
        {loading ? (
          <div></div>
        ) : (
          <div>
            <AnnouncementList announcementList={announcementList} />
            <div id="pagingWrapperParent" className="pagingWrapperParent">
              <div id="pagingWrapper" className="pagingWrapper">
                {announcementStartIndex > 0 && (
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
                      (announcementTotalPages - announcementStartIndex) / 5 > 1
                        ? 5
                        : announcementTotalPages - announcementStartIndex,
                  },
                  (_, index) => announcementStartIndex + index + 1
                ).map((page) => (
                  <button
                    id="pagingInnerButton"
                    className="pagingInnerButton"
                    key={page}
                    onClick={() => numberClick(page)}
                  >
                    {page}
                  </button>
                ))}

                {announcementStartIndex + 5 < announcementTotalPages && (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;
