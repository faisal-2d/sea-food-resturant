import React from 'react';

const CartItems = ({item}) => {
    return (
        <div>
            <h3>{item.name}</h3>
        </div>
    );
};

export default CartItems;