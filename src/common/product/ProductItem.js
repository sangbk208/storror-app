import React from 'react';
import PropTypes from 'prop-types';
import './product.css';

ProductItem.propTypes = {
    
};

function ProductItem(props) {
    return (
        <div className="product-item">
            <div className="product-item__img" style={{"backgroundImage": `url(https://cdn.shopify.com/s/files/1/0695/8195/products/Orange_back.jpg)`}}></div>
            <footer className="product-item__footer-info">
                <span className="product-item__name">AW20 Blur Odyssey Long Sleeve (Black)</span>
                <span className="product-item__price">£34.99</span>
            </footer>
        </div>
    );
}

export default ProductItem;