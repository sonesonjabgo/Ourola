import { useState } from "react";

const OnlineConcertEnter = ({ onJoinSession }) => {
  const [state, setState] = useState({
    userName: "",
    sessionId: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onJoinSession(state.userName, state.sessionId);
    setState({ userName: "", sessionId: "" });
  };

  return (
    <div id="join">
      <div id="img-div">
        <img
          src="resources/images/openvidu_grey_bg_transp_cropped.png"
          alt="OpenVidu logo"
        />
      </div>
      <div id="join-dialog" className="jumbotron vertical-center">
        <h1> Join a video session </h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <p>
            <label>Participant: </label>
            <input
              className="form-control"
              type="text"
              id="userName"
              value={state.userName}
              onChange={handleChangeState}
              required
            />
          </p>
          <p>
            <label> Session: </label>
            <input
              className="form-control"
              type="text"
              id="sessionId"
              value={state.sessionId}
              onChange={handleChangeState}
              required
            />
          </p>
          <p className="text-center">
            <input
              className="btn btn-lg btn-success"
              name="commit"
              type="submit"
              value="JOIN"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default OnlineConcertEnter;
