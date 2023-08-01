import axios from "axios";
import { useEffect, useState } from "react";

const PurchaseHistory = ({ config }) => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [onlineConcertList, setOnlineConcertList] = useState([]);
  const [membershipList, setMembershipList] = useState([]);
  const [loadingPurchase, setLoadingPurchase] = useState(true);

  const url = "http://localhost:8000";

  useEffect(() => {
    axios
      .get(`${url}/user/purchase`, config)
      .then((response) => {
        console.log(response.data);
        setPurchaseList(response.data);
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
      {loadingPurchase ? <></> : <></>}
    </div>
  );
};

export default PurchaseHistory;
