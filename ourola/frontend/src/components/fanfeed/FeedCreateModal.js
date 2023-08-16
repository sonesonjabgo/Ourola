import React, { useRef, useEffect, useState } from 'react';
import styles from '../../style/fanfeed/FeedCreateModal.css';
import FeedCreateModalProfile from './FeedCreateModalProfile'
import FeedCreateInput from './FeedCreateInput'
import FileUploadButton from '../../assets/icons/upload_photo.png'
import axios from 'axios'


const FeedCreateModal = ({state, userInfo, groupInfo, userRole}) => {

    // 모달
    const setModalOpen = state.setModalOpen;
  
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
  
    // textarea 내 작성한 글을 DB로 보내기
    const [content, setContent] = useState();
    const [response, setResponse] = useState(null)
    const getTextData = (textData) => {
      setContent(textData)
    }

    const group = groupInfo[0].name

    const token = sessionStorage.getItem('Authorization')
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    // 파일
    const [file, setFile] = useState(null)

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    // input type="file" 기본 형태의 기능을 이미지가 수행할 수 있도록
    const imageInput = useRef()

    const onClickImageUpload = () => {
      imageInput.current.click()
    }

    // 현재 로그인 중인 유저가 일반 사용자인지, 아티스트 또는 소속사인지 판단해 피드 타입 지정
    const [feedType, setFeedType] = useState()
    useEffect(() => {
      if (userRole === 'USER' || userRole === 'ADMIN') {
        setFeedType(1)
      } else {
        setFeedType(2)
      }
    })

    const submitFeed = async (event) => {
      event.preventDefault()
      console.log(content)

      const formData = new FormData()

      formData.append('content', content)
      formData.append('files', file)
      formData.append('type', feedType)
      axios.post(`${group}/feed/write`, formData, {headers: headers})

        .then((response) => {
          console.log(response.data)
          closeModal()
          window.location.reload()
        })
        .catch((error) => {
          console.error(error)
        })

    }
    
    return (
      <div className="createFeedBackground">
        <button
          className="createFeedClose"
          onClick={closeModal}
        >
          ×
        </button>
        <form onSubmit={submitFeed}>
        <div ref={modalRef} className="createFeedDetail">
          <FeedCreateModalProfile userInfo = {userInfo} userRole = {userRole}/>
          <div className="feedCreateInputContainer">
            <div>
              <FeedCreateInput getTextData={getTextData}/>
            </div>
          </div>
          <div className="feedCreateButtonContainer">
                <input type="file" style={{ display: "none" }} ref={imageInput} onChange={handleFileChange}/>
                <img onClick={onClickImageUpload} className="feedCreateButtonUploadfile" src={FileUploadButton} />
                <button type='submit' className="feedCreateButtonUploadfeed">등록</button>
          </div>
        </div>
        </form>
      </div>
      
    );
  };
export default FeedCreateModal;