import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../style/shop/ShopUpdateModal.css'

const ShopUpdateModal = (props) => {
    const setModalOpen = props.state.setModalOpen;

    const closeModal = () => {
      setModalOpen(false);
    };
  
    const modalRef = useRef(null);
  
    useEffect(() => {
      const handler = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setModalOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handler);
  
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [setModalOpen]);


    const token = sessionStorage.getItem('Authorization')
    
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
    }

    // 현재 물품의 정보를 받음
    const path = props

    const [selectedTicketingDate, setSelectedTicketingDate] = useState(path.ticketingTime || "")

    const handleTicketingDateChange = (event) => {
        setSelectedTicketingDate(event.target.value)
    }

    // 달력 통해 오픈 날짜 선택 시 inputValue에도 바로 적용하기
    const [selectedOpenDate, setSelectedOpenDate] = useState(path.startTime || "")

        const handleOpenDateChange = (event) => {
            setSelectedOpenDate(event.target.value)
        }


    // 모달 내 입력값을 담기 위한 상태 변수 설정
    const [inputValue, setInputValue] = useState({
        "title": path.title || "",
        "content": path.content || "",
        "price": path.price || "",
    })

    const [response, setResponse] = useState(null)

    // 변화되는 입력값을 업데이트
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    // 물품이 콘서트일때, 멤버십일때를 구분해 API 요청을 하기 위해 API를 변수로 설정
    const [putApi, setPutApi] = useState();

    const getConcertPutApi = () => {
        const concertPutApi = `shop/seventeen/online-concert/${props.path.path}`
        setPutApi(concertPutApi)
    }

    const getMembershipPutApi = () => {
        const membershipPutApi = `shop/seventeen/membership/${props.path.path}`
        setPutApi(membershipPutApi)
    }

    const [file, setFile] = useState(null)

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    useEffect (() => {
        if (props.path.isMembership) {
            getMembershipPutApi()
        } else {
            getConcertPutApi()
        }
    })

    const navigate = useNavigate()
    
    if (!path) {
        return null
    }

    // POST 요청 실행
    const putRequest = (event) => {

        event.preventDefault()

        const formData = new FormData()

        formData.append('title', inputValue.title)
        formData.append('content', inputValue.content)
        formData.append('price', parseInt(inputValue.price, 10))
        formData.append('startTime', selectedOpenDate)
        formData.append('ticketingTime', selectedTicketingDate)
        formData.append('group_id', path.group_id)
        formData.append('main-file', file)

        // 콘솔 출력용
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }

        axios.put(putApi, formData, { headers: headers })
            .then((response) => {
                setResponse(response.data)
                alert('수정 완료')
                closeModal()
                navigate(-1)
            })
            .catch((error) => {
                console.error('자수정', error)
                alert('제대로 써라')
            })
    }
    if (props.path.isMembership) {
    return (
        <>
        <div className="shopUpdateBackground">
        <button className="shopUpdateClose" onClick={closeModal}>
            ×
        </button>
            <div ref={modalRef} className="shopUpdateDetail">
                <div className="shopUpdateHeader">
                    상품 정보 수정
                </div>
                <form onSubmit={putRequest} className="inputValueContainer">
                    <div className="inputValue">
                    <label htmlFor="title">멤버십 이름</label>
                    <input type="text" id="title" name="title" value={inputValue.title} onChange={handleInputChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="content">멤버십 정보</label>
                    <input type="text" id="content" name="content" value={inputValue.content} onChange={handleInputChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="price">가격</label>
                    <input type="text" id="price" name="price" value={inputValue.price} onChange={handleInputChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="image">썸네일</label>
                        <input type="file" id="image" name="image" onChange={handleFileChange} multiple/>
                    </div>
                    
                    <div className="postButtonContainer">
                    <input type="submit" className="putButton" value="수정"></input>
                    </div>
                </form>
            </div>
        </div>
        </>
    )} else {
        return(
        <div className="shopUpdateBackground">
        <button className="shopUpdateClose" onClick={closeModal}>
            ×
        </button>
            <div ref={modalRef} className="shopUpdateDetail">
                <div className="shopUpdateHeader">
                    상품 정보 수정
                </div>
                <form onSubmit={putRequest} className="inputValueContainer">
                    <div className="inputValue">
                    <label htmlFor="title">콘서트명</label>
                    <input type="text" id="title" name="title" value={inputValue.title} onChange={handleInputChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="content">콘서트 정보</label>
                    <input type="text" id="content" name="content" value={inputValue.content} onChange={handleInputChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="price">가격</label>
                    <input type="text" id="price" name="price" value={inputValue.price} onChange={handleInputChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="ticketingTime">판매 시작 시간</label>
                    <input type="datetime-local" id="ticketingTime" name="ticketingTime" value={selectedTicketingDate} onChange={handleTicketingDateChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="startTime">오픈 시간</label>
                    <input type="datetime-local" id="startTime" name="startTime" value={selectedOpenDate} onChange={handleOpenDateChange}></input>
                    </div>

                    <div className="inputValue">
                    <label htmlFor="image">썸네일</label>
                        <input type="file" id="image" name="image" onChange={handleFileChange} multiple/>
                    </div>

                    <div className="postButtonContainer">
                    <input type="submit" className="putButton" value="수정"></input>
                </div>
                </form>
            </div>
        </div>
    )}
}

export default ShopUpdateModal