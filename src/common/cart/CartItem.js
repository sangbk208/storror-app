import React from 'react';
import PropTypes from 'prop-types';

CartItem.propTypes = {
    
};

function CartItem(props) {
    const cover = "https://cdn.shopify.com/s/files/1/0695/8195/products/Hoody_back_300x300_crop_center.jpg?v=1602151564";
    return (
        <div className="cart-item">
            <div className="cart-item__product-img" style={{"backgroundImage": `url(${cover})`}}></div>
            <div className="cart-item__content">
                <div className="cart-item__content-top">
                    <span className="cart-item__content-name">AW20 Triple S Odyssey Cap (Black)</span>
                    <span className="cart-item__content-delete">Remove</span>
                </div>
                <div className="cart-item__content-size">Large</div>
                <div className="cart-item__content-bottom">
                    <div className="cart-item__content-quantity">
                        <button className="cart-item__content-btn cart-item__content-btn-countup">-</button>
                        <input className="cart-item__content-input" value="1" />
                        <button className="cart-item__content-btn cart-item__content-btn-countdown">+</button>
                    </div>
                    <span className="cart-item__content-price">87,96 £</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;