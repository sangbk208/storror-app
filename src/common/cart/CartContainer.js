import React from 'react';
import './cart.css';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';

CartContainer.propTypes = {
    
};

function CartContainer(props) {
    return (
        <div className="cart-container">
            <div className="cart-container__header">
                <span className="cart-container__header-title">SHOPPING CART</span>
                <label for="card-input">
                    <i className="cart-container__header-icon fas fa-times"></i>
                </label>
            </div>
            <div className="cart-container__list">
                <CartItem/>
                <CartItem/>
            </div>
            <div className="cart-container__footer">
                <div  className="cart-container__subtotal">
                    <span className="cart-container__subtotal-title">Subtotal:</span>
                    <span className="cart-container__subtotal-amount">109,95 £</span>
                </div>
                <Link to="/" className="cart-container__footer-btn-link">Begin checkout</Link>
            </div>
        </div>
    );
}

export default CartContainer;