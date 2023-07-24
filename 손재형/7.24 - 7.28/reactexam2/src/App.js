// import './App.css';

import Container from './Container';
import Counter from './Counter';
import MyHeader from './MyHeader';

function App() {
  
  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5,
  }



  return (
    <Container>
    <div>
      <MyHeader />
      <Counter {...counterProps}/> 
      {/* 스프레드 연산자 ... 을 통하여 한꺼번에 prop 가능 */}
    </div>

    </Container>
  );
}

export default App;
