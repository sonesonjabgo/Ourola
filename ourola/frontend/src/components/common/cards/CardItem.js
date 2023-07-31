// import React from 'react';
// import { Link } from 'react-router-dom';

// function CardItem(cardinfo) {
//   return (
//     <>
//       <li className='cards__item'>
//         <Link className='cards__item__link' to={cardinfo.path}>
//           <figure className='cards__item__pic-wrap' data-category={cardinfo.label}>
//             <img
//               className='cards__item__img'
//               src={cardinfo.src}
//               alt='Travel Image'
//             />
//           </figure>
//           <div className='cards__item__info'>
//             <h5 className='cards__item__text'>{cardinfo.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// }

// export default CardItem;

import React from 'react';
import { Link } from 'react-router-dom'
import '../../style/cards/CardItem.css'

const Card = ({ src, text, path }) => (
  <Link to={path} className="artist-link">
  <div className="card">
    <img src={src} alt={text} />
    <div className="card-info">
      <p className="text">{text}</p>
    </div>
  </div>
  </Link>
);

export default Card;