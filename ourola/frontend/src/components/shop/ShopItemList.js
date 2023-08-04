import React from 'react'
import '../../style/shop/ShopItemList.css'
import ShopItem from './ShopItem'

function ShopItemList({allStuff}) {

  if (!allStuff) {
    return null
  }

  return (
    <div className="shopCardsContainer">
      {allStuff.map((data, i) => (
        <ShopItem key={i} src={data.src} title={data.title} path={data.id} price={data.price} />
      ))}
    </div>
  );
}

export default ShopItemList;