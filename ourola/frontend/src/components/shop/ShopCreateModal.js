import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import '../../style/shop/ShopCreateModal.css'

const ShopCreateModal = (props) => {
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

    // 콘서트와 멤버십 물품 추가 화면 나누기
    const [whatKind, setWhatKind] = useState('membership');
    const wannaPostConcert = () => {
        setWhatKind('concert')
    }
    const wannaPostMembership = () => {
        setWhatKind('membership')
    }

    const token = sessionStorage.getItem('Authorization')
    
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
    }

    // 달력 통해 티케팅 날짜 선택 시 inputValue에도 바로 적용하기
    const [selectedTicketingDate, setSelectedTicketingDate] = useState('')

    const handleTicketingDateChange = (event) => {
        setSelectedTicketingDate(event.target.value)
    }

    // 달력 통해 오픈 날짜 선택 시 inputValue에도 바로 적용하기
    const [selectedOpenDate, setSelectedOpenDate] = useState('')

        const handleOpenDateChange = (event) => {
            setSelectedOpenDate(event.target.value)
        }


    // 모달 내 입력값을 담기 위한 상태 변수 설정
    const [inputValue, setInputValue] = useState({
        "title": "",
        "content": "",
        "price": "",
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

    // 파일
    const [file, setFile] = useState(null)

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    // POST 요청 실행
    const [postApi, setPostApi] = useState()

    useEffect (() => {
        if (whatKind === 'membership') {
            setPostApi(`shop/seventeen/membership`)
        } else (
            setPostApi('shop/seventeen/online-concert')
        )
    })

    const postRequest = (event) => {

        event.preventDefault()

        const formData = new FormData()

        formData.append('title', inputValue.title)
        formData.append('content', inputValue.content)
        formData.append('price', parseInt(inputValue.price, 10))
        formData.append('startTime', selectedOpenDate)
        formData.append('ticketingTime', selectedTicketingDate)
        formData.append('main-file', file)
        
        axios.post(postApi, formData, {headers: headers})
            .then((response) => {
                setResponse(response.data)
                closeModal()
                window.location.reload()
            })
            .catch((error) => {
                console.error('하하 또 망했지', error)

                if (error.response && error.response.status === 400) {
                    alert('이미 멤버십이 등록되어 있습니다')
                    closeModal()
                } else {
                    alert('비어있는 칸을 모두 채워주세요')
                }
            })
    }

    return (
        <>
        <div className="shopCreateBackground">
        <button className="shopCreateClose" onClick={closeModal}>
            ×
        </button>
            <div ref={modalRef} className="shopCreateDetail">
                <div className="shopCreateHeader">
                    상품 등록
                    <div className="chooseWhatKind">
                    <span onClick={wannaPostMembership}>멤버십</span> | <span onClick={wannaPostConcert}>콘서트</span>
                    </div>
                </div>

        {whatKind === 'membership' ? (
                <form onSubmit={postRequest} className="inputValueContainer">
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
                    <input type="submit" className="createButton" value="등록"></input>
                    </div>
                </form>
        
        ) : (

                <form onSubmit={postRequest} className="inputValueContainer">
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
                    <input type="submit" className="postButton" value="등록"></input>
                </div>
                </form>
        )
        }
            </div>
        </div>  
        </>
    )
}

export default ShopCreateModal