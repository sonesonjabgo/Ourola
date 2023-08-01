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
      <div className="createFeedBackground">
        <button
          className="createFeedClose"
          onClick={closeModal}
        >
          ×
        </button>

        <div ref={modalRef} className="createFeedDetail">
          <FeedCreateModalProfile />
          <div className="feedCreateInputContainer">
            <div className="feedCreateInput">
              <FeedCreateInput />
            </div>
          </div>
          <div className="feedCreateButtonContainer">
                <img className="feedCreateButtonUploadfile" src={FileUploadButton} />
                <button className="feedCreateButtonUploadfeed">등록</button>
          </div>
        </div>
      </div>
    );
  };
export default NotificationModal;