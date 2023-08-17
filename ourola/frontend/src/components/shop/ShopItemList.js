import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../style/shop/ShopItemList.css'
import ShopItem from './ShopItem'

function ShopItemList({allConcert, allMembership, userRole}) {

  const location = useLocation();
  const group = location.pathname.split("/")[1];

  console.log(allConcert)
  if (!allConcert) {
    return null
  }

  if (!allMembership) {
    return null
  }
  
  console.log(allConcert)
  return (
    <div className="shopCardsContainer">
        <ShopItem src={allMembership.filePath} title={allMembership.title} path={allMembership.id} price={allMembership.price} content={allMembership.content} groupId={allMembership.groupId} isMembership = {true} userRole={userRole} group={group}/>

      {allConcert.map((data, i) => (
        <ShopItem key={i} src={data.filePath} title={data.title} path={data.id} price={data.price} content={data.content} groupId={data.groupId} isMembership={false} userRole={userRole} group={group}/>
      ))}
    </div>
  );
}

export default ShopItemList;