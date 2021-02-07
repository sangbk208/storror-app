import React from 'react';
import PropTypes from 'prop-types';
import './button-shop.css';

ButtonShop.propTypes = {
    
};

function ButtonShop(props) {
    return (
        <div className="button-shop">
            <a className="button-shop__link" href="#">
                STORROR STORE
                <i className="button-shop__icon fas fa-long-arrow-alt-right"></i>
                <i className="button-shop__icon fas fa-cart-plus"></i>
            </a>
        </div>
    );
}

export default ButtonShop;