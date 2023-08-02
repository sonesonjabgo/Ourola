import React, { useRef, useEffect, useState } from 'react';
import styles from '../../style/fanfeed/FeedCreateModal.css';
import FeedCreateModalProfile from './FeedCreateModalProfile'
import FeedCreateInput from './FeedCreateInput'
import FileUploadButton from '../../assets/icons/upload_photo.png'
import axios from 'axios'


const FeedCreateModal = (props) => {
    // 모달
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
  
    // textarea 내 작성한 글을 DB로 보내기
    const [content, setContent] = useState('');

    const group = 'seventeen'

    const token = localStorage.getItem('Authorization')
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    const submitFeed = (event) => {
      event.preventDefault()
      // 그룹명 부분 seventeen으로 고정된 상태 - 바꿔줘야 함
      axios.post(`${group}/feed/write`, {content: content, headers: headers})

        .then((response) => {
          setContent('')
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
          <FeedCreateModalProfile />
          <div className="feedCreateInputContainer">
            <div className="feedCreateInput">
              <FeedCreateInput content={content} setContent={setContent}/>
            </div>
          </div>
          <div className="feedCreateButtonContainer">
                <img className="feedCreateButtonUploadfile" src={FileUploadButton} />
                <button type='submit' className="feedCreateButtonUploadfeed">등록</button>
          </div>
        </div>
        </form>
      </div>
      
    );
  };
export default FeedCreateModal;