import React, { useState } from "react";
import "../../style/shop/ShopUpdateModal.css";
import ShopUpdateModal from "./ShopUpdateModal";


const OpenShopUpdateModal = ({ path }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>하하</button>
      {modalOpen && (
        <ShopUpdateModal path={path} state={{ setModalOpen }} />
      )}
    </div>
  );
};

export default OpenShopUpdateModal;