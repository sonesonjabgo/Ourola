import axios from "axios";
import { useEffect, useState } from "react";
import MyPostItem from "./MyPostItem";

const MyPostList = ({ config }) => {
  const [postList, setPostList] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
    axios
      .get(`/user/posts`, config)
      .then((response) => {
        setPostList(response.data);
        setLoadingPost(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoadingPost(false);
      });
  }, []);

  postList.sort((a, b) => b.id - a.id);

  return (
    <div className="myPostList">
      {loadingPost ? (
        <></>
      ) : (
        postList.map((it) => (
          <MyPostItem
            key={it.id}
            setPostList={setPostList}
            item={it}
            config={config}
          />
        ))
      )}
    </div>
  );
};

export default MyPostList;
