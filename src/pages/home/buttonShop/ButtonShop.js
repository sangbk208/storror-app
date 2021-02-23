import React from 'react';
import {Link} from 'react-router-dom';
import './button-shop.css';

ButtonShop.propTypes = {
    
};

function ButtonShop(props) {
    return (
        <div className="button-shop">
            <Link to="/parkour-store" className="button-shop__link" href="#">
                STORROR STORE
                <i className="button-shop__icon fas fa-long-arrow-alt-right"></i>
                <i className="button-shop__icon fas fa-cart-plus"></i>
            </Link>
        </div>
    );
}

export default ButtonShop;