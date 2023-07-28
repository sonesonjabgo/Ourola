// import React from 'react';
// import '../../style/fanfeed/CreateFeedButton.css'

// function CreateFeed () {
//     return (
//         <>
//         <button className="Button-createfeed">당신의 아티스트에게 이야기를 건네보세요</button>
//         </>
//     )
// }

// export default CreateFeed;


import React, {useState} from 'react';
import FeedCreateModal from './FeedCreateModal'
import '../../style/fanfeed/CreateFeedButton.css'

const OpenFeedCreateModal = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const showModal = () => {
        setModalOpen(true)
    }
    
    return (
          <div>
            <button onClick={showModal} className="Button-createfeed">당신의 아티스트에게 이야기를 건네보세요</button>
            {modalOpen && (
              <FeedCreateModal
                state={{ setModalOpen }}
              ></FeedCreateModal>
            )}
          </div>
      );
    };

export default OpenFeedCreateModal;