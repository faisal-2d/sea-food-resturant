import React, { useEffect, useRef, useState } from 'react';
import Seafood from '../Seafood/Seafood';
import './Shop.css'

const Shop = () => {
    const [seafood, setSeafood] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSeafood(data))
    },[])
    return (
        <div>
            <h3>Please choose your favorite food!</h3>            
            
            <div className='shop-container'>
                <div className='food-container'>
                {
                seafood.map(item =>  <Seafood key={item.id} item={item}></Seafood>) 
                }
                </div>
                <div>
                    <p>This is a cart</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;