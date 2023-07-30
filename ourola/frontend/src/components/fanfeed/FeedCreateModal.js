import React, { useRef, useEffect } from 'react';
import styles from '../../style/fanfeed/FeedCreateModal.css';
import FeedCreateModalProfile from './FeedCreateModalProfile'
import FeedCreateInput from './FeedCreateInput'
import FileUploadButton from '../../assets/icons/upload_photo.png'


const NotificationModal = (props) => {
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
  
    return (
      <div className="CreateFeed-background">
        <button
          className="CreateFeed-close"
          onClick={closeModal}
        >
          ×
        </button>

        <div ref={modalRef} className="CreateFeed-detail">
          <FeedCreateModalProfile />
          <div className="FeedCreateInput-container">
            <div className="FeedCreateInput">
              <FeedCreateInput />
            </div>
          </div>
          <div className="FeedCreate-button-container">
                <img className="FeedCreate-button-uploadfile" src={FileUploadButton} />
                <button className="FeedCreate-button-uploadfeed">등록</button>
          </div>
        </div>
      </div>
    );
  };
export default NotificationModal;