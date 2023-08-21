import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/live/LiveOpen.css";

const LiveOpen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const group = location.state.group;
  const config = location.state.config;

  const [liveTitle, setLiveTitle] = useState("");

  const onChangeTitleInput = (e) => {
    setLiveTitle(e.target.value);
  };

  const onFinishClick = async () => {
    console.log(liveTitle);
    // id, groupDto, artistDto, title, startDate, sessionId;
    const liveDto = {
      id: null,
      groupDto: null,
      artistDto: null,
      title: liveTitle,
      startDate: null,
      sessionId: null,
    };

    console.log(liveDto);

    await axios
      .post(`/${group}/live/write`, liveDto, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("라이브 켜기 에러 :: ", error);
      });

    navigate(`/${group}/live/list`);
  };

  return (
    <div className="liveOpenMain">
      <div className="liveOpenWrapper">
        <div id="liveTitleArea">
          <span>라이브 제목</span>
        </div>
        <input
          id="liveTitleInput"
          name="liveTitle"
          value={liveTitle}
          onChange={onChangeTitleInput}
          placeholder="제목을 입력하세요..."
        ></input>
        <button id="liveTitleSubmitBtn" onClick={onFinishClick}>
          완료
        </button>
      </div>
    </div>
  );
};

export default LiveOpen;
