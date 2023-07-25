import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(cardinfo) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={cardinfo.path}>
          <figure className='cards__item__pic-wrap' data-category={cardinfo.label}>
            <img
              className='cards__item__img'
              src={cardinfo.src}
              alt='Travel Image'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{cardinfo.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;