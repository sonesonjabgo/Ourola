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
      <button onClick={showModal}>하하</button>
      {modalOpen && (
        <ShopCreateModal state={{ setModalOpen }} />
      )}
    </div>
  );
};

export default OpenShopCreateModal;