import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../../redux/actions/cart';
import './checkout.css';
import CheckoutHeader from './checkoutHeader/CheckoutHeader';
import CheckoutInfo from './checkoutInfo/CheckoutInfo';
import CheckoutProduct from './checkoutProduct/CheckoutProduct';

Checkout.propTypes = {
    
};

function Checkout(props) {

    const checkoutProducts = Object.values(useSelector(state => state.cart));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCarts());
    },[dispatch]);

    return (
        <div className="checkout">
            <CheckoutHeader/>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 c-12 m-12">
                        <CheckoutInfo checkoutProducts={checkoutProducts}/>
                    </div>
                    <div className="col l-6 c-12 m-12">
                        <CheckoutProduct checkoutProducts={checkoutProducts}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;