import AnnouncementList from "./components/announcement/AnnouncementList";

function App() {
  const dummyAnnouncement = [
    {
      id: 1,
      title: "테스트 1",
      content: "예쁜 프론트 기원",
      createTime: "2023-07-22",
    },
    {
      id: 2,
      title: "테스트 2",
      content: "예쁜 프론트 기원2",
      createTime: "2023-07-23",
    },
    {
      id: 3,
      title: "테스트 3",
      content: "예쁜 프론트 기원3",
      createTime: "2023-07-24",
    },
  ];

  return (
    <div className="App">
      <AnnouncementList announcementList={dummyAnnouncement}></AnnouncementList>
    </div>
  );
}

export default App;
