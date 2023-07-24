import React,{useState} from "react"
import OddEvenResult from "./OddEvenResult"

const Counter = (props) => {
    
    // console.log(props)
    // props 인자 안에 부모 컴포넌트에서 보낸 데이터가 담김
    // ex props.intialValue


    // 0에서 출발 --> useState의 인자 0을 의미 count로 들어감
    // 1씩 증가하고
    // 1씩 감소하는
    // count 상태
    
    const [count, setCount] = useState(0)


    const onIncrease = () => {
        setCount(count + 1)
    }

    const onDecrease = () => {
        setCount(count - 1)
    }



    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    )
}

export default Counter