import PurchaseHistory from "./PurchaseHistory";
import "../../../style/mypage/purchase/Purchase.css";

const Purchase = ({ config }) => {
  return (
    <div className="purchaseMain">
      <div className="purchaseMainTitle">
        <span className="titleText">구매 내역 </span>
        <span className="purchaseSortBtnArea">
          <button className="purchaseSortBtn membership">멤버십</button>
          <button className="purchaseSortBtn onlineConcert">
            온라인 콘서트
          </button>
        </span>
      </div>
      <div className="purchaseBody">
        <PurchaseHistory config={config} />
      </div>
    </div>
  );
};

export default Purchase;
