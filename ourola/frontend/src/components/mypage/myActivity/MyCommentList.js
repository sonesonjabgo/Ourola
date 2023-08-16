import axios from "axios";
import { useEffect, useState } from "react";
import MyCommentItem from "./MyCommentItem";

const MyCommentList = ({ config }) => {
  const [commentList, setCommentList] = useState([]);
  const [loadingComment, setloadingComment] = useState(true);

  useEffect(() => {
    axios
      .get(`/user/comments`, config)
      .then((response) => {
        setCommentList(response.data);
        setloadingComment(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setloadingComment(false);
      });
  }, []);

  const onRemove = (feedId, commentId) => {
    const newCommentList = commentList.filter((it) => it.id !== commentId);
    setCommentList(newCommentList);

    axios
      .delete(`/${feedId}/comment/${commentId}`, config)
      .then((response) => {
        console.log("삭제 성공!", response);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  };

  commentList.sort((a, b) => b.id - a.id);

  return (
    <div className="myCommentList">
      {loadingComment ? (
        <></>
      ) : (
        commentList.map((it) => (
          <MyCommentItem key={it.id} item={it} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default MyCommentList;
