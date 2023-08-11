import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import "../../../style/mypage/purchase/PurchaseItem.css";

const PurchaseItem = ({ item }) => {
  const [purchaseDate, setPurchaseDate] = useState(
    moment().format("YYYY.MM.DD")
  );
  const [groupName, setGroupName] = useState("");
  const [title, setTitle] = useState("");
  const [expiration, setExpiration] = useState(moment().format("YYYY-MM-DD"));
  const [accessImg, setAccessImg] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPurchaseDate(moment(new Date(item.paymentDate)).format("YYYY.MM.DD"));
    if (item.membershipPayDto === null) {
      console.log(item);
      setGroupName(item.onlineConcertDto.groupDto.name);
      setTitle(item.onlineConcertDto.title);
      setAccessImg(
        "https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/" +
          item.onlineConcertDto.filePath
      );
      setExpiration(
        moment(new Date(item.onlineConcertDto.startTime)).format("YYYY-MM-DD")
      );
    } else if (item.onlineConcertDto === null) {
      // console.log(item);
      setGroupName(item.membershipPayDto.groupDto.name);
      setTitle(item.membershipPayDto.title);
      setAccessImg(
        "https://i9d204.p.ssafy.io:8001/file/getimg/shop-main/" +
          item.membershipPayDto.filePath
      );
      let tmp = new Date(item.paymentDate);
      setExpiration(
        moment(tmp.setFullYear(tmp.getFullYear() + 1)).format("YYYY-MM-DD")
      );
    }
  }, []);

  return (
    <div className="productWrap">
      <div className="productItemImage">
        <img className="productImg" src={accessImg} alt={""} />
      </div>
      <div className="productItemContent">
        <div className="productItemContentHeader">{purchaseDate} 구매</div>
        <div className="productItemContentBody">
          <div className="productItemGroupName">
            <p>{groupName}</p>
          </div>
          <div className="productItemTitle">
            <p>{title}</p>
          </div>
        </div>
        <div className="productItemContentFooter">이용기간 | {expiration}</div>
      </div>
    </div>
  );
};

PurchaseItem.defaultProps = {
  purchaseDate: moment().format("YYYY-MM-DD"),
  groupName: "",
  title: "",
  expiration: moment().format("YYYY-MM-DD"),
};
export default PurchaseItem;
