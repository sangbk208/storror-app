import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../../redux/actions/cart';
import './cart.css';
import CartContainer from './CartContainer';

Cart.propTypes = {
    
};

function Cart(props) {
    const cartProducts = Object.values(useSelector(state => state.cart));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCarts());
    },[dispatch]);
    return (
        <div>
            <label htmlFor="card-input" className="cart">
                <span className="cart-count">{cartProducts.length}</span>
                <i className="cart-icon fas fa-shopping-cart"></i>
            </label>
            <input className="card-input-check" hidden type="checkbox" name="" id="card-input"/>
            <label htmlFor="card-input" className="cart__overlay"></label>
            <CartContainer cartProducts={cartProducts}/>
        </div>
    );
}

export default Cart;