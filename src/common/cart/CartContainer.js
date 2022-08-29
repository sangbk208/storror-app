import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

CartContainer.propTypes = {};

const newTotalPrice = (totalPrice) => {
  totalPrice = totalPrice.replace(" ", "").replace("£", "").replace(",", ".");
  return Math.round(Number(totalPrice) * 100) / 100;
};

function CartContainer(props) {
  const { cartProducts } = props;

  const currentTotalPrice = () => {
    const array = cartProducts.map((item) => {
      return newTotalPrice(item.totalPrice);
    });
    return Math.round(array.reduce((a, b) => a + b, 0) * 100) / 100;
  };

  const renderListCartItem = () => {
    return cartProducts.map((item) => {
      return <CartItem key={item.id} product={item} />;
    });
  };

  return (
    <div className="cart-container">
      <div className="cart-container__header">
        <span className="cart-container__header-title">SHOPPING CART</span>
        <label htmlFor="card-input">
          <i className="cart-container__header-icon fas fa-times"></i>
        </label>
      </div>
      <div className="cart-container__list">{renderListCartItem()}</div>
      <div className="cart-container__footer">
        <div className="cart-container__subtotal">
          <span className="cart-container__subtotal-title">Subtotal:</span>
          <span className="cart-container__subtotal-amount">
            {String(currentTotalPrice()) + " £"}
          </span>
        </div>
        <Link to="/checkout" className="cart-container__footer-btn-link">
          Begin checkout
        </Link>
      </div>
    </div>
  );
}

export default CartContainer;
