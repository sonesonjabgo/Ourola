import "../../style/groupfeed/ArtistFeedComment.css";

const ArtistFeedComment = ({ id, artistDto, fanDto, createDate, content }) => {
  const backendPort = 8000;

  let accessImg = "http://localhost:" + backendPort + "/file/getimg";
  let name = "";

  if (artistDto === null) {
    accessImg += "/profile?id=" + fanDto.profileFileDto.id;
    name = fanDto.name;
  } else {
    accessImg += "/artist-profile?id=" + artistDto.profileFileDto.id;
    name = artistDto.name;
  }

  const dateObj = new Date(createDate);

  const year = dateObj.getFullYear().toString().substr(-2);
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  const hour = dateObj.getHours().toString().padStart(2, "0");
  const minute = dateObj.getMinutes().toString().padStart(2, "0");

  const formatTime = `${year}.${month}.${day} ${hour}:${minute}`;

  return (
    <div id="artistFeedComment" className="artistFeedComment">
      <div id="artistFeedCommentHeader" className="artistFeedCommentHeader">
        <div
          id="artistFeedCommentHeaderInfo"
          className="artistFeedCommentHeaderInfo"
        >
          <div
            id="artistFeedCommentHeaderProfileWrapper"
            className="artistFeedCommentHeaderProfileWrapper"
          >
            <div
              id="artistFeedCommentHeaderProfile"
              className="artistFeedCommentHeaderProfile"
            >
              <div
                id="artistFeedCommentHeaderImgWrapper"
                className="artistFeedCommentHeaderImgWrapper"
              >
                <img
                  id="artistFeedCommentHeaderImg"
                  className="artistFeedCommentHeaderImg"
                  src={accessImg}
                  alt="이미지 없음"
                ></img>
              </div>
            </div>
          </div>
          <div
            id="artistFeedCommentHeaderNameCommentWrapper"
            className="artistFeedCommentHeaderNameCommentWrapper"
          >
            <div
              id="artistFeedCommentHeaderNameWrapper"
              className="artistFeedCommentHeaderNameWrapper"
            >
              <strong
                id="artistFeedCommentHeaderName"
                className="artistFeedCommentHeaderName"
              >
                {name}
              </strong>
            </div>
            <div
              id="artistFeedCommentHeaderDateWrapper"
              className="artistFeedCommentHeaderDateWrapper"
            >
              <span
                id="artistFeedCommentHeaderDate"
                className="artistFeedCommentHeaderDate"
              >
                {formatTime}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id="artistFeedCommentBodyCommentWrapper"
          className="artistFeedCommentBodyCommentWrapper"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default ArtistFeedComment;
