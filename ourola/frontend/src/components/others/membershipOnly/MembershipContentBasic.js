import "../../../style/others/membershipOnly/MembershipOnly.css";

const MembershipContentBasic = ({ title, closeModal }) => {
    return (
        <div className="modalContainer">
            <button onClick={closeModal}>
            X
            </button>
            <h1>{title}</h1>
        </div>
    )
}
export default MembershipContentBasic