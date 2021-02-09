import React from 'react';
import './cart.css';
import CartContainer from './CartContainer';

Cart.propTypes = {
    
};

function Cart(props) {
    return (
        <div>
            <div className="cart">
                <span className="cart-count">1</span>
                <i className="cart-icon fas fa-shopping-cart"></i>
            </div>
            <CartContainer/>
        </div>
    );
}

export default Cart;