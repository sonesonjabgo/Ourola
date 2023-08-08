import React, { useState } from "react";
import "../../style/shop/ShopCreateModal.css";
import ShopCreateModal from "./ShopCreateModal";


const OpenShopCreateModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button className="OpenCreateModalButton" onClick={showModal}>상품 등록</button>
      {modalOpen && (
        <ShopCreateModal state={{ setModalOpen }} />
      )}
    </div>
  );
};

export default OpenShopCreateModal;