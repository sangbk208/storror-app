import React from 'react';
import CartItem from '../../../common/cart/CartItem';
import './checkout-product.css';

CheckoutProduct.propTypes = {
    
};

const newTotalPrice = (totalPrice) =>{
    totalPrice = totalPrice.replace(' ','');
    totalPrice = totalPrice.replace('£','');
    totalPrice = totalPrice.replace(',','.');
    return Math.round((Number(totalPrice)) * 100) / 100;
};

function CheckoutProduct(props) {
    const {checkoutProducts} = props;

    const currentTotalPrice = () =>{
        const array = checkoutProducts.map((item) =>{
           return newTotalPrice(item.totalPrice);
        });
        return Math.round((array.reduce((a, b) => a + b, 0)) * 100) / 100;
    };

    const renderListCartItem = () =>{
        return checkoutProducts.map((item) =>{
            return (
                <CartItem key={item.id} product={item}/>
            );
        });
    };

    return (
        <div className="checkout-product">
            <div className="checkout-product__list">
                {renderListCartItem()}
            </div>
            
            <div  className="cart-container__subtotal">
                <span className="cart-container__subtotal-title">Subtotal:</span>
                <span className="cart-container__subtotal-amount">{String(currentTotalPrice())+' £'}</span>
            </div>
           
        </div>
    );
}

export default CheckoutProduct;