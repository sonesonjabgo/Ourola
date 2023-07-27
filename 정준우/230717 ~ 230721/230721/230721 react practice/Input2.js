import React, {useState} from 'react'

const Counter = () => {

    const [txtValue, setTxtValue] = useState('')

    const onChange = (event) => {
        setTxtValue(event.target.value)
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" />
            </div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Counter