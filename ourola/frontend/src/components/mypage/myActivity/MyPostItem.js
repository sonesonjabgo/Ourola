import moment from "moment";
import { useEffect, useState } from "react";
import "../../../style/mypage/myActivity/MyPostItem.css";
import likeclick from "../../../assets/icons/like.png";
import notlikeclick from "../../../assets/icons/notlike.png";
import commentclick from "../../../assets/icons/comment.png";
import bookmarkempty from "../../../assets/icons/bookmarkempty.png";
import bookmarkfill from "../../../assets/icons/bookmarkfill.png";
import axios from "axios";
import MyPostDetail from "./MyPostDetail";
import openedBin from "../../../assets/icons/opened_bin.png";
import closedBin from "../../../assets/icons/closed_bin.png";

const MyPostItem = ({ setPostList, item, config }) => {
  const FAN = 1;
  const ARTIST = 2;

  const group = item.groupDto.name;
  const type = item.type;
  const id = item.id;
  const files = item.fileList;

  const [likeCount, setLikeCount] = useState(item.like);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(`/${id}/comment`, config);
        const modifiedData = response.data.map((it) => {
          const getDate = it.createDate.split("T", 2);
          getDate[1] = getDate[1].split(".", 1);

          const [year, month, day] = getDate[0].split("-");
          const [hour, minute] = getDate[1][0].split(":");

          const formatTime = `${year.slice(
            2
          )}.${month}.${day} ${hour}:${minute}`;

          return {
            ...it,
            createDate: formatTime,
          };
        });

        setComment(modifiedData);
      } catch (error) {
        console.error("Error fetching data : ", error);
      }
    };

    const fetchLike = async () => {
      try {
        const response = await axios.get(`/${group}/feed/${id}/like`, config);
        setThisFeedLike(response.data);
      } catch (error) {
        console.error("Error fetching data : ", error);
      }
    };

    const fetchBookmark = async () => {
      try {
        const response = await axios.get(
          `/${group}/feed/${id}/bookmark`,
          config
        );
        setThisFeedBookmark(response.data);
      } catch (error) {
        console.error("Error fetching data : ", error);
      }
    };

    fetchComment();
    fetchLike();
    fetchBookmark();
  }, []);

  const commentCount = comment.length;
  const nickname =
    item.fanDto === null ? item.artistDto.nickname : item.fanDto.nickname;
  const formatTime = moment(new Date(item.createDate))
    .subtract(9, "hours")
    .format("YYYY.MM.DD HH:mm");

  const content = item.content;
  const fileList = item.fileList;
  const fileUrl = "https://i9d204.p.ssafy.io:8001/file/getimg/feed-img/";

  const profileUrl = "https://i9d204.p.ssafy.io:8001/file/getimg/profile?id=";
  const profileImg =
    type === FAN
      ? profileUrl + item.fanDto.profileFileDto.id
      : profileUrl + item.artistDto.profileFileDto.id;

  const [thisFeedLike, setThisFeedLike] = useState(false);

  const wantLike = async () => {
    await axios.put(`/${group}/feed/${item.id}/like`, ``, config);

    const like = likeCount + 1;
    const feedLike = !thisFeedLike;

    setThisFeedLike(feedLike);
    setLikeCount(like);
  };

  const wantLikeCancle = async () => {
    await axios.put(`/${group}/feed/${item.id}/like`, ``, config);

    const like = likeCount - 1;
    const feedLike = !thisFeedLike;

    setThisFeedLike(feedLike);
    setLikeCount(like);
  };

  const [thisFeedBookmark, setThisFeedBookmark] = useState(false);

  useEffect(() => {
    axios
      .get(`/${group}/feed/${id}/bookmark`, config)
      .then((response) => {
        setThisFeedBookmark(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wantBookmark = async () => {
    await axios.put(`/${group}/feed/${id}/bookmark`, ``, config);

    const feedBookmark = !thisFeedBookmark;

    setThisFeedBookmark(feedBookmark);
  };

  const wantBookmarkCancle = async () => {
    await axios.put(`/${group}/feed/${id}/bookmark`, ``, config);

    const feedBookmark = !thisFeedBookmark;

    setThisFeedBookmark(feedBookmark);
  };

  let userInfo = null;

  if (item.artistDto === null) {
    userInfo = item.fanDto;
  } else {
    userInfo = item.artistDto;
  }

  const deleteRequest = (event) => {
    event.preventDefault();

    axios
      .delete(`${group}/feed/remove/${id}`, config)
      .then((response) => {
        alert("피드가 삭제되었습니다");
        setPostList((artistFeed) =>
          artistFeed.filter((feed) => feed.id !== id)
        );
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답을 반환한 경우
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          // 요청이 만들어졌지만 응답을 받지 못한 경우
          console.error("No response:", error.request);
        } else {
          // 그 외의 오류
          console.error("Error:", error.message);
        }
        alert("삭제 실패");
      });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    document.getElementById("navbar").style.zIndex = 1;
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const openModalClickFunction = (event) => {
    showModal();
    setScrollPosition(window.pageYOffset);
    window.scrollTo(0, 120);
    document.body.style.overflow = "hidden";
  };

  const [openBin, setOpenBin] = useState(closedBin);

  return (
    <div>
      {modalOpen ? (
        <MyPostDetail
          state={{
            setModalOpen,
            setComment,
            setThisFeedLike,
            setLikeCount,
            setThisFeedBookmark,
            id,
            group,
            profileImg,
            nickname,
            formatTime,
            content,
            thisFeedLike,
            thisFeedBookmark,
            likeCount,
            commentCount,
            comment,
            scrollPosition,
            files,
          }}
        ></MyPostDetail>
      ) : (
        <div className="myPostItemWrapper">
          <div className="myPostItemHeader">
            <div className="myPostProfileWrapper">
              <div className="myPostFeedProfileImg">
                <img className="myPostProfileImg" src={profileImg} alt=""></img>
              </div>
              <div className="myPostProfileInfo">
                <div className="myPostNickname">{nickname}</div>
                <div className="myPostCreateDate">{formatTime}</div>
              </div>
            </div>
            {userInfo ? (
              <div id="artistFeedBlank" className="artistFeedBlank">
                {thisFeedBookmark ? (
                  <img
                    src={bookmarkfill}
                    alt="이미지가 없습니다."
                    id="artistFeedBookmarkImg"
                    className="artistFeedBookmarkImg"
                    onClick={wantBookmarkCancle}
                  ></img>
                ) : (
                  <img
                    src={bookmarkempty}
                    alt="이미지가 없습니다."
                    id="artistFeedBookmarkImg"
                    className="artistFeedBookmarkImg"
                    onClick={wantBookmark}
                  ></img>
                )}
              </div>
            ) : null}
          </div>
          <div className="myPostItemBody" onClick={openModalClickFunction}>
            {fileList.length === 0 ? (
              <div className="myPostContent">{content}</div>
            ) : (
              <div>
                <div className="myPostImgContainer">
                  <img src={fileUrl + fileList[0].filePath} alt=""></img>
                </div>
                <br></br>
                {content}
              </div>
            )}
            <br></br>
          </div>
          <div className="myPostItemFooter">
            <div className="myFeedFooterInfo">
              <div id="myFeedLike" className="myFeedLike">
                {thisFeedLike ? (
                  <img
                    src={likeclick}
                    alt="이미지가 없습니다."
                    id="myFeedLikeImg"
                    className="myFeedLikeImg"
                    onClick={wantLikeCancle}
                  ></img>
                ) : (
                  <img
                    src={notlikeclick}
                    alt="이미지가 없습니다."
                    id="myFeedLikeImg"
                    className="myFeedLikeImg"
                    onClick={wantLike}
                  ></img>
                )}
                <div id="myFeedLikeCount" className="myFeedLikeCount">
                  {likeCount}
                </div>
              </div>
              <div id="myFeedComment" className="myFeedComment">
                <img
                  src={commentclick}
                  alt="이미지가 없습니다."
                  id="myFeedCommentImg"
                  className="myFeedCommentImg"
                ></img>
                <div
                  id="myFeedCommentRealCount"
                  className="myFeedCommentRealCount"
                >
                  {commentCount}
                </div>
              </div>
            </div>
            <img
              className="deleteBin"
              src={openBin}
              onClick={deleteRequest}
              onMouseOver={() => setOpenBin(openedBin)}
              onMouseOut={() => setOpenBin(closedBin)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPostItem;
