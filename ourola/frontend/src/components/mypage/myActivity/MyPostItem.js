import moment from "moment";
import { useEffect, useState } from "react";
import "../../../style/mypage/myActivity/MyPostItem.css";
import likeclick from "../../../assets/icons/like.png";
import notlikeclick from "../../../assets/icons/notlike.png";
import commentclick from "../../../assets/icons/comment.png";
import axios from "axios";

const MyPostItem = ({ item, config }) => {
  console.log(item);

  const FAN = 1;
  const ARTIST = 2;

  const group = item.groupDto.name;
  const type = item.type;
  const id = item.id;

  const [likeCount, setLikeCount] = useState(item.like);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`/${item.id}/comment`, config)
      .then((response) => {
        setComment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(comment);

  const commentCount = comment.length;
  const [nickname, setNickname] = useState("임시닉");
  const createDate = moment(new Date(item.createDate)).format(
    "YYYY.MM.DD HH:mm"
  );

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
    if (type === 1) {
    } else {
      await axios.put(`/${group}/feed/${item.id}/like`, ``, config);

      const like = likeCount + 1;
      const feedLike = !thisFeedLike;

      setThisFeedLike(feedLike);
      setLikeCount(like);
    }
  };

  const wantLikeCancle = async () => {
    await axios.put(`/${group}/feed/${item.id}/like`, ``, config);

    const like = likeCount - 1;
    const feedLike = !thisFeedLike;

    setThisFeedLike(feedLike);
    setLikeCount(like);
  };

  return (
    <div className="myPostItemWrapper">
      <div className="myPostItemHeader">
        <div className="myPostProfileWrapper">
          <div className="myPostFeedProfileImg">
            <img className="myPostProfileImg" src={profileImg} alt=""></img>
          </div>
          <div className="myPostProfileInfo">
            <div className="myPostNickname">{nickname}</div>
            <div className="myPostCreateDate">{createDate}</div>
          </div>
        </div>
      </div>
      <div className="myPostItemBody">
        {fileList.length === 0 ? (
          <div className="myPostContent">{content}</div>
        ) : (
          <img
            className="myPostContentImg"
            src={fileUrl + fileList[0].filePath}
            alt=""
          ></img>
        )}
      </div>
      <div className="myPostItemFooter">
        <div id="artistFeedLike" className="artistFeedLike">
          {thisFeedLike ? (
            <img
              src={likeclick}
              alt="이미지가 없습니다."
              id="artistFeedLikeImg"
              className="artistFeedLikeImg"
              onClick={wantLikeCancle}
            ></img>
          ) : (
            <img
              src={notlikeclick}
              alt="이미지가 없습니다."
              id="artistFeedLikeImg"
              className="artistFeedLikeImg"
              onClick={wantLike}
            ></img>
          )}
          <div id="artistFeedLikeCount" className="artistFeedLikeCount">
            {likeCount}
          </div>
        </div>
        <div id="artistFeedComment" className="artistFeedComment">
          <img
            src={commentclick}
            alt="이미지가 없습니다."
            id="artistFeedCommentImg"
            className="artistFeedCommentImg"
          ></img>
          <div
            id="artistFeedCommentRealCount"
            className="artistFeedCommentRealCount"
          >
            {commentCount} {/*  나중에 댓글 갯수로 수정필요 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostItem;
