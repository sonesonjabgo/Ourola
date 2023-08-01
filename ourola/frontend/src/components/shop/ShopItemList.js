import React from 'react'
import '../../style/shop/ShopItemList.css'
import Image1 from '../../assets/images/bak.png'
import ShopItem from './ShopItem'

const ShopItemList = () => {
    const cardData = [
        {
          src: Image1,
          text: 'Bak',
          path: 'bak/detail/',
        },
      ];

    return (
        <div className="cardsContainer">
        {cardData.map((data, i) => (
            <ShopItem key={i} src={data.src} text={data.text} path={data.path} />
        ))}
      </div>
    )
}

export default ShopItemList