import {faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState } from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = ({myCart}) => {

    const [shoppingCart, setShoppingCart] = useState([]); 
    useEffect(()=>{
        setShoppingCart(myCart);
    },[myCart]) 



    const chooseOne = () => {
        if((shoppingCart.length>0)){
        const index = parseInt(Math.random()*(shoppingCart.length));
        const choosedItem = [shoppingCart[index]];
        setShoppingCart(choosedItem);
        document.getElementById('title').innerText = "You should choose:";
        }
    }
    const cleatCart = () => {
        const clear = [];
        setShoppingCart(clear);
        document.getElementById('title').innerText = "Choose Items";
    }
    

    
    return (
        <div className='cart-summery'>
            <h3 id='title'>Choose Items:</h3>

            {
                shoppingCart.map(item => <CartItems key={item.id} item={item}></CartItems>)
            }          
            <div>
                <button onClick={chooseOne} className='choose-btn'>Choose One For me <FontAwesomeIcon icon={faCheck} /></button>
                <button onClick={cleatCart} className='add-to-cart-btn'>Choose Again <FontAwesomeIcon icon={faClose} /></button>
            </div>
        </div>
    );
};

export default Cart;