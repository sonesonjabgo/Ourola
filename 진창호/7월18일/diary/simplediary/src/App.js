import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const diaryList = [
  {
    id : 1,
    author : "진창호",
    content : "안녕하세여!!!",
    emotion : 5,
    created_date : new Date().getTime()
  },
  {
    id : 2,
    author : "최가연",
    content : "난 하이볼이 좋아!",
    emotion : 3,
    created_date : new Date().getTime()
  },
  {
    id : 3,
    author : "최영창",
    content : "배포 안하는 중!",
    emotion : 2,
    created_date : new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList = {diaryList}></DiaryList>
    </div>
  );
}

export default App;
