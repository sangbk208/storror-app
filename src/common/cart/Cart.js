import React from 'react';
import './cart.css';
import CartContainer from './CartContainer';

Cart.propTypes = {
    
};

function Cart(props) {
    return (
        <div>
            <label for="card-input" className="cart">
                <span className="cart-count">1</span>
                <i className="cart-icon fas fa-shopping-cart"></i>
            </label>
            <input className="card-input-check" hidden type="checkbox" name="" id="card-input"/>
            <label for="card-input" className="cart__overlay"></label>
            <CartContainer/>
        </div>
    );
}

export default Cart;