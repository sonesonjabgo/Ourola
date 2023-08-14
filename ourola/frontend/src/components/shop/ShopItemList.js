import React from 'react'
import '../../style/shop/ShopItemList.css'
import ShopItem from './ShopItem'

function ShopItemList({allConcert, allMembership, userRole}) {

  console.log(userRole)
  if (!allConcert) {
    return null
  }

  if (!allMembership) {
    return null
  }
  
  return (
    <div className="shopCardsContainer">
        <ShopItem src={allMembership.filePath} title={allMembership.title} path={allMembership.id} price={allMembership.price} content={allMembership.content} groupId={allMembership.groupId} isMembership = {true} userRole={userRole}/>

      {allConcert.map((data, i) => (
        <ShopItem key={i} src={data.filePath} title={data.title} path={data.id} price={data.price} content={data.content} groupId={data.groupId} isMembership={false} userRole={userRole}/>
      ))}
    </div>
  );
}

export default ShopItemList;