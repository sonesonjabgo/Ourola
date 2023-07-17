import React, {useState} from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0); // count가 state, setCount로 변화 가능 & 인자로 초깃값 설정

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick = {onIncrease}>+</button>
            <button onClick = {onDecrease}>-</button>
        </div>
    );
};

export default Counter;