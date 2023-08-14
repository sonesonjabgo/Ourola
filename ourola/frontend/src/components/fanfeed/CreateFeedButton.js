import React, {useState} from 'react';
import FeedCreateModal from './FeedCreateModal'
import '../../style/fanfeed/CreateFeedButton.css'

const OpenFeedCreateModal = ({groupInfo, userInfo, userRole}) => {
    const [modalOpen, setModalOpen] = useState(false)

    const showModal = () => {
        setModalOpen(true)
    }
    
    return (
          <div>
            <button onClick={showModal} className="buttonCreatefeed">당신의 아티스트에게 이야기를 건네보세요</button>
            {modalOpen && (
              <FeedCreateModal
                state={{ setModalOpen }}
                groupInfo = {groupInfo}
                userInfo = {userInfo}
                userRole = {userRole}
              ></FeedCreateModal>
            )}
          </div>
      );
    };

export default OpenFeedCreateModal;