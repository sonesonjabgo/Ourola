import axios from "axios";
import { useEffect, useState } from "react";
import PurchaseItem from "./PurchaseItem";
import "../../../style/mypage/purchase/PurchaseHistory.css";

const PurchaseHistory = ({ config }) => {
  const [list, setList] = useState([]);
  const [loadingPurchase, setLoadingPurchase] = useState(true);

  useEffect(() => {
    axios
      .get(`/user/purchase`, config)
      .then((response) => {
        console.log(response.data);
        setList(response.data);
        setLoadingPurchase(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoadingPurchase(false);
      });
  }, []);

  return (
    <div className="purchaseHistory">
      {loadingPurchase ? (
        <></>
      ) : (
        list.map((it) => <PurchaseItem key={it.id} item={it} />)
      )}
    </div>
  );
};

export default PurchaseHistory;
