import { useState } from 'react';
import "../../../style/others/membershipOnly/MembershipOnly.css";

import MembershipContentBasic from "./MembershipContentBasic";


const MembershipContent = ({ title, subtitle }) => {
    const imageUrl = "https://via.placeholder.com/400"

    const [modalOpen, setModalOpen] = useState(false)
    const showModal = () => {setModalOpen(true)}
    

    return (
        <div className="contentCard" onClick={showModal}>
            <img src={imageUrl} alt="Placeholder"/>
            <p>{title}</p>
            <p>{subtitle}</p>
            {modalOpen && <MembershipContentBasic setModalOpen={setModalOpen}/>}
        </div>
    )
}

export default MembershipContent