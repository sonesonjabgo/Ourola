import React from 'react'
import '../../style/shop/ShopItem.css'
import { Link } from 'react-router-dom'

const ShopItem = ({path, src, text}) => {
    return (
        <>
        <Link to={path} className="artist-link">
        <div className="card">
            <img src={src} alt={text} />
            <div className="card-info">
                <p className="text">{text}</p>
            </div>
        </div>
        </Link>
        </>
    )
}

export default ShopItem