import React from 'react';
import './Seafood.css'

const Seafood = ({item}) => {
    return (
        <div>
            <h3>im a sea food</h3>
            <div className='food-item'>
                <div className='menu-img'>
                    <img src={item.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Seafood;