import React from 'react'
import CardItem from './CardItem';
import  '../../style/cards/Cards.css';
import Image1 from '../../assets/images/bts_profile.png';

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src={Image1}
                         text="BTS"
                         path='/services'
                        />
                        <CardItem 
                         src={Image1}
                         text="BTS"
                         path='/services'
                        /> 
                    </ul>   
                </div>
            </div>            
        </div>
    );
}

export default Cards;