import axios from "axios";
import { useEffect, useState } from "react";
import BookmarkItem from "./BookmarkItem";
import "../../../style/mypage/bookmark/BookmarkList.css";

const BookmarkList = ({ config }) => {
  const [bookmarkList, setBookmarkList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    axios
      .get(`/user/bookmark`, config)
      .then((response) => {
        setBookmarkList(response.data);
        setLoadingList(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoadingList(false);
      });
  }, []);

  bookmarkList.sort((a, b) => b.id - a.id);

  return (
    <div className="bookmarkList">
      {loadingList ? (
        <></>
      ) : (
        bookmarkList.map((it) => (
          <BookmarkItem
            setBookmarkList={setBookmarkList}
            key={it.id}
            item={it}
          />
        ))
      )}
    </div>
  );
};

export default BookmarkList;
