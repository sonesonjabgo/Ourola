import React, {useState} from 'react';
import '../../style/notification/notification.css';
import NotificationModal from './NotificationModal'
import NotificationIcon from '../../assets/icons/notification.png'

const OpenNotification = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const showModal = () => {
        setModalOpen(true)
    }
    
    return (
          <div>
            <img onClick={showModal} className="notification-icon" src={NotificationIcon} />
            {modalOpen && (
              <NotificationModal
                state={{ setModalOpen }}
              ></NotificationModal>
            )}
          </div>
      );
    };

export default OpenNotification;