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
    const [deleteApi, setDeleteApi] = useState();

    const getConcertDeleteApi = () => {
        const concertDeleteApi = `shop/seventeen/online-concert/${props.path.path}`
        setDeleteApi(concertDeleteApi)
    }

    const getMembershipDeleteApi = () => {
        const membershipDeleteApi = `shop/seventeen/membership/${props.path.path}`
        setDeleteApi(membershipDeleteApi)
    }

    console.log(props.path.path)
    useEffect (() => {
        if (props.path.isMembership) {
            getMembershipDeleteApi()
        } else {
            getConcertDeleteApi()
        }
    })

    const navigate = useNavigate()

    if (!path) {
        return null
    }

    // POST 요청 실행
    const deleteRequest = () => {

        axios.delete(deleteApi, { headers: headers })
            .then((response) => {
                setResponse(response.data)
                alert('삭제되었습니다')
                closeModal()
                navigate(-1)
            })
            .catch((error) => {
                if (error.response) {
                    // 서버가 응답을 반환한 경우
                    console.error('Error response:', error.response.data);
                } else if (error.request) {
                    // 요청이 만들어졌지만 응답을 받지 못한 경우
                    console.error('No response:', error.request);
                } else {
                    // 그 외의 오류
                    console.error('Error:', error.message);
                }
                alert('삭제 실패');
            });
    }

    return (
        <>
        <div className="shopDeleteBackground">
            <button className="shopDeleteClose" onClick={closeModal}>
                ×
            </button>
            <div ref={modalRef} className="shopDeleteDetail">
                <div className="shopDeleteHeader">
                    상품 삭제
                </div>
                
                <div className="inputValueContainer">
                    삭제?
                    <div className="shopDeleteButtonContainer">
                        <button onClick={deleteRequest}>삭제함</button>
                        <button onClick={closeModal}>ㅈㅅ</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopUpdateModal