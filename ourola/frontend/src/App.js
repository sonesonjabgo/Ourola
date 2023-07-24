import { Link } from "react-router-dom";

function App() {
  const artist = "BTS";

  return (
    <div id="App" className="App">
      {/* <Header></Header> 아마 전체 페이지에 다 들어가지 않을까?*/}
      <Link to="/announcement" state={artist}>
        공지사항
      </Link>
      {/* <Footer></Footer> 아마 전체 페이지에 다 들어가지 않을까?*/}
    </div>
  );
}

export default App;
