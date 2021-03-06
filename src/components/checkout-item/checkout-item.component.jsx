import React, { useContext } from 'react';
import './checkout-item.style.css';
import { Context } from '../../context/GlobalContext';

const CheckoutItem = ({cartItem}) => {
    const { addItem, removeItem, clearItemFromCart } = useContext(Context)
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#x2716;</span>
        </div>
    );
};


export default CheckoutItem;