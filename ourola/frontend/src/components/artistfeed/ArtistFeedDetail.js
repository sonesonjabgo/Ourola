
import React, { useEffect, useRef } from "react";

const ArtistFeedDetail = (props) => {
  const setModalOpen = props.state.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  const { accessImg, artistName, formatTime, title, content, like } =
    props.state;

  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setModalOpen]);

  return (
    <div>
      <div id="ArtistFeedBackGround" className="ArtistFeedBackGround">
        <div id="ArtistFeedModal" className="ArtistFeedModal">
          <div
            id="ArtistFeedContent"
            className="ArtistFeedContent"
            ref={modalRef}
          >
            <div id="ArtistFeedView" className="ArtistFeedView">
              <div
                id="ArtistFeedInfoAndContent"
                className="ArtistFeedInfoAndContent"
              >
                <div id="ArtistFeedHeader" className="ArtistFeedHeader">
                  <div id="ArtistFeedInfo" className="ArtistFeedInfo">
                    <div
                      id="ArtistFeedArtistInfo"
                      className="ArtistFeedArtistInfo"
                    >
                      <div
                        id="ArtistFeedArtistImg"
                        className="ArtistFeedArtistImg"
                      >
                        <div
                          id="ArtistFeedArtistCircleImg"
                          className="ArtistFeedArtistCircleImg"
                        >
                          <div
                            id="ArtistFeedArtistCompact"
                            className="ArtistFeedArtistCompact"
                          >
                            <img
                              id="ArtistImg"
                              className="ArtistImg"
                              src={accessImg}
                              alt="이미지 없음"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="ArtistFeedArtistName"
                      className="ArtistFeedArtistName"
                    >
                      <strong id="ArtistName" className="ArtistName">
                        {artistName}
                      </strong>
                      <span id="formatTime" className="formatTime">
                        {formatTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  id="ArtistFeedDetailContent"
                  className="ArtistFeedDetailContent"
                >
                  <div
                    id="ArtistScrollStart"
                    className="ArtistScrollStart"
                  ></div>
                  <div id="ArtistScrollContent" className="ArtistScrollContent">
                    {content}
                  </div>
                </div>
              </div>
              <div
                id="ArtistFeedDetailFooter"
                className="ArtistFeedDetailFooter"
              >
                <div id="ArtistFeedLikeImg">
                  좋아요 {/*  나중에 좋아요 이미지로 수정필요 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistFeedDetail;
