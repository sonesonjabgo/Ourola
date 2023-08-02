import axios from "axios";
import { useEffect, useState } from "react";
import PurchaseItem from "./PurchaseItem";

const PurchaseHistory = ({ config }) => {
  const [list, setList] = useState([]);
  const [loadingPurchase, setLoadingPurchase] = useState(true);

  const url = "http://localhost:8000";

  useEffect(() => {
    axios
      .get(`${url}/user/purchase`, config)
      .then((response) => {
        //console.log(response.data);
        setList(response.data);
        setLoadingPurchase(false);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setLoadingPurchase(false);
      });
  }, []);

  return (
    <div className="purchaseHistoryMain">
      <div className="purchaseTitle">
        <span>구매 내역</span>
      </div>
      <div>
        {loadingPurchase ? <></> : list.map((it) => <PurchaseItem item={it} />)}
      </div>
    </div>
  );
};

export default PurchaseHistory;
