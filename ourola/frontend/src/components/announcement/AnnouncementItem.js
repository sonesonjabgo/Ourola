const AnnouncementItem = ({ id, title, content, createTime }) => {
  return (
    <div className="AnnouncementItem">
      <a href="*" class="Title">
        {title}
      </a>
      <div class="Date">{createTime}</div>
      <hr></hr>
    </div>
  );
};

export default AnnouncementItem;
