import React from 'react'
import '../../style/shop/ShopItem.css'
import { Link } from 'react-router-dom'

const ShopItem = ({path, src, text}) => {
    return (
        <>
        <Link to={path} className="stuffDetailLink">
        <div className="card">
            <img src={src} alt={text} />
            <div className="cardInfo">
                <p className="text">{text}</p>
            </div>
        </div>
        </Link>
        </>
    )
}

export default ShopItem