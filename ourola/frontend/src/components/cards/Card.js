import React from 'react'
import CardItem from './CardItem';
import  './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src = "../../assets/images/"
                         text = "BTS"
                         label = 'Adventure'
                         path='/services'
                        />    
                    </ul>    
                </div>
            </div>            
        </div>
    );
}

export default Cards;