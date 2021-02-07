import React from 'react';
import './cart.css';

Cart.propTypes = {
    
};

function Cart(props) {
    return (
        <div className="cart">
            <span className="cart-count">1</span>
            <i className="cart-icon fas fa-shopping-cart"></i>
        </div>
    );
}

export default Cart;