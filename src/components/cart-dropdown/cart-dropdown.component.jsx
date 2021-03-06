import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/GlobalContext';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.css';

const CartDropdown = () => {
    const { cartItems, toggleCartHidden } = useContext(Context)
    const navigate = useNavigate();
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {cartItems.length ? (
                    cartItems.map(
                        cartItem => <CartItem key={cartItem.id} item={cartItem} />
                    )
                ) : (<span className='empty-message'>Your cart is empty</span>)}
            </div>
            <CustomButton onClick={() => {navigate('/checkout'); toggleCartHidden()}}>Checkout</CustomButton>
        </div>
    );
};

export default CartDropdown;