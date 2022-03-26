import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Seafood.css'

const Seafood = ({item}) => {
    return (
        <div>
            <div className='food-item'>                
                <img src={item.img} alt="" />                
                <div className='item-details'>
                    <small>Food Id: {item.id}</small>
                    <h3 className='food-name'>{item.name}</h3>
                    <h4>Price: ${item.price}</h4>
                    <button className='add-to-cart-btn'>Add To cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Seafood;