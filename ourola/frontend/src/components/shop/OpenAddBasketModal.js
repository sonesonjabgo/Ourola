import React, { useState } from "react";
import AddBasketModal from "./AddBasketModal";


const OpenShopCreateModal = ({ path }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button className="OpenCreateModalButton" onClick={showModal}>장바구니에 추가</button>
      {modalOpen && (
        <AddBasketModal state={{ setModalOpen }} path={path}/>
      )}
    </div>
  );
};

export default OpenShopCreateModal;