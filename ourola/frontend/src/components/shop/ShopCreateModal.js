import React, {useState} from 'react'
import axios from 'axios'

const ShopCreateModal = () => {
    const token = localStorage.getItem('Authorization')
    
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }

    // 모달 내 입력값을 담기 위한 상태 변수 설정
    const [inputValue, setInputValue] = useState({
        "title": "",
        "content": "",
        "price": "",
        "startTime": "",
        "ticketingTime": "",
    })

    const [response, setResponse] = useState(null)

    // 변화되는 입력값을 업데이트
    const handleInputChange = (event) => {
        const { valueName, value } = event.target

        setInputValue({
            ...inputValue,
            [valueName]: value
        })
    }

    // POST 요청 실행
    const postRequest = () => {
        axios.post('shop/seventeen/online-concert', { inputValue, headers: headers})
            .then((response) => {
                setResponse(response.data)
            })
            .catch((error) => {
                console.error('하하 또 망했지', error)
            })
    }

    return (
        <>
        <div className="inputValueContainer">
            <label htmlFor="title">콘서트명</label>
            <input type="text" id="title" name="title" value={inputValue.title} onChange={handleInputChange}></input>

            <label htmlFor="content">콘서트 정보</label>
            <input type="text" id="content" name="content" value={inputValue.content} onChange={handleInputChange}></input>

            <label htmlFor="price">가격</label>
            <input type="text" id="price" name="price" value={inputValue.price} onChange={handleInputChange}></input>

            <label htmlFor="ticketingTime">판매 시작 시간</label>
            <input type="date" id="ticketingTime" name="ticketingTime" value={inputValue.ticketingTime} onChange={handleInputChange}></input>

            <label htmlFor="startTime">오픈 시간</label>
            <input type="date" id="startTime" name="startTime" value={inputValue.startTime} onChange={handleInputChange}></input>
        </div>
        </>
    )
}