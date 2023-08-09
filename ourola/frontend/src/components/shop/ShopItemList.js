import React from 'react'
import '../../style/shop/ShopItemList.css'
import ShopItem from './ShopItem'

function ShopItemList({allConcert, allMembership}) {

  if (!allConcert) {
    return null
  }

  if (!allMembership) {
    return null
  }
  
  return (
    <div className="shopCardsContainer">
        <ShopItem src={allMembership.src} title={allMembership.title} path={allMembership.id} price={allMembership.price} content={allMembership.content} groupId={allMembership.groupId} isMembership = {true}/>

      {allConcert.map((data, i) => (
        <ShopItem key={i} src={data.src} title={data.title} path={data.id} price={data.price} content={data.content} groupId={data.groupId} isMembership={false}/>
      ))}
    </div>
  );
}

export default ShopItemList;