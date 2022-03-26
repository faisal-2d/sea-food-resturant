import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Seafood from '../Seafood/Seafood';
import './Shop.css'

const Shop = () => {
    const [seafood, setSeafood] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSeafood(data))
    },[]);

    const addToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart)
    }

    return (
        <div>
            <h3>Please choose <span style={{"color":"rgb(211, 19, 83)"}}>your favorite</span> food!</h3>            
            
            <div className='shop-container'>
                <div className='food-container'>
                {
                seafood.map(item =>  <Seafood key={item.id} item={item} addToCart={addToCart}></Seafood>) 
                }
                </div>
                <div className='cart-container'>
                    <h3>Selected Items:</h3>
                    {
                        cart.map(food => <Cart key={food.id} food={food}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;