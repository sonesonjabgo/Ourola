import React, { useState } from "react";
import "../../style/shop/ShopUpdateModal.css";
import ShopUpdateModal from "./ShopUpdateModal";


const OpenShopUpdateModal = ({ shopItem }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>하하</button>
      {modalOpen && (
        <ShopUpdateModal shopItem={shopItem} state={{ setModalOpen }} />
      )}
    </div>
  );
};

export default OpenShopUpdateModal;