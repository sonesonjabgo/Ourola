import React, { useState } from "react";
import "../../style/shop/ShopDeleteModal.css";
import ShopDeleteModal from "./ShopDeleteModal";


const OpenShopDeleteModal = ({ path }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>내가없어져볼게얍</button>
      {modalOpen && (
        <ShopDeleteModal path={path} state={{ setModalOpen }} />
      )}
    </div>
  );
};

export default OpenShopDeleteModal;