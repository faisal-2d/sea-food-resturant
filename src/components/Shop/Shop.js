import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Seafood from '../Seafood/Seafood';
import './Shop.css'

const Shop = () => {
    const [seafood, setSeafood] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSeafood(data))
    },[]);
    return (
        <div>
            <h3>Please choose <span style={{"color":"rgb(211, 19, 83)"}}>your favorite</span> food!</h3>            
            
            <div className='shop-container'>
                <div className='food-container'>
                {
                seafood.map(item =>  <Seafood key={item.id} item={item}></Seafood>) 
                }
                </div>
                <div>
                    <Cart key={seafood.id} seafood={seafood}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;