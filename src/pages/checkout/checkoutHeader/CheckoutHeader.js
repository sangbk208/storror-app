import React from 'react';
import './checkout-header.css';

CheckoutHeader.propTypes = {
    
};

function CheckoutHeader(props) {
    return (
        <div className="checkout-header">
            <img className="checkout-header__logo" alt="logo" src="https://cdn.shopify.com/s/files/1/0695/8195/t/6/assets/logo.png?100"/>
        </div>
    );
}

export default CheckoutHeader;