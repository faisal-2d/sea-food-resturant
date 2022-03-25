import React, { useEffect, useRef, useState } from 'react';
import Seafood from '../Seafood/Seafood';

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
            
            {
              seafood.map(item =>  <Seafood key={item.id} item={item}></Seafood>) 
            }
        </div>
    );
};

export default Shop;