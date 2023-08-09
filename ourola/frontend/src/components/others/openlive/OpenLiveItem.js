import "../../../style/others/openlive/OpenLiveItem.css";

const OpenLiveItem = ({
  id,
  title,
  startDate,
  ticketingDate,
  maxParticipant,
}) => {
  return (
    <div id="openLiveItem" className="openLiveItem">
      <div id="openLiveInfo" className="openLiveInfo">
        <div id="openLiveDate" className="openLiveDate">
          {title}
        </div>
        <div id="openLiveTitle" className="openLiveTitle">
          {title}
        </div>
      </div>
      <div id="openLiveImg" className="openLiveImg"></div>
    </div>
  );
};

export default OpenLiveItem;
