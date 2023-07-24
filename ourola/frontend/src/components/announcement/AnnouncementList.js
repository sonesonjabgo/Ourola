import "../../style/announcement/AnnouncementList.css";
import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = ({ announcementList }) => {
  return (
    <div className="AnnouncementList">
      <div className="AnnouncementTitle">
        <span className="Title">공지사항</span>
      </div>
      <hr></hr>
      <section className="AnnouncementBoard">
        {announcementList.map((it) => (
          <AnnouncementItem key={it.id} {...it}></AnnouncementItem>
        ))}
      </section>
    </div>
  );
};

export default AnnouncementList;
