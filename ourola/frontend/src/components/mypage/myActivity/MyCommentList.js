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

  return (
    <div className="myCommentList">
      {loadingComment ? (
        <></>
      ) : (
        commentList.map((it) => <MyCommentItem key={it.id} item={it} />)
      )}
    </div>
  );
};

export default MyCommentList;
