import "../../../style/others/membershipOnly/MembershipOnly.css";

const MembershipContentBasic = ({ setModalOpen }) => {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
        // console.log(modalOpen)
    };

    return (
        <div className="modalContainer">
            <button onClick={closeModal}>
            X
            </button>
            <h1>content</h1>
        </div>
    )
}
export default MembershipContentBasic