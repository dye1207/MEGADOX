import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  function increase(){
    setCount(count +1)
    // setCount((prevValue) => (prevValue + 1))
  }

  function decrease(){
    setCount((prevValue) => (prevValue - 1))
  }

  return (
    <div>
        <h1>리엑트 복습</h1>
        <h3>함수 기반 Hooks 연습</h3>
        <hr />
        <h3>
          현재 숫자의 값: <span style={{fontSize: "30px"}}>{count}</span>
        </h3>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
