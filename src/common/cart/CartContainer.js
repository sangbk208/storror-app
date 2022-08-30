import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { currentTotalPrice } from "../../helper/mix";

CartContainer.propTypes = {};

function CartContainer(props) {
  const { cartProducts } = props;

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
      <div data-testid="cart-product-list-id" className="cart-container__list">
        {renderListCartItem()}
      </div>
      <div className="cart-container__footer">
        <div className="cart-container__subtotal">
          <span className="cart-container__subtotal-title">Subtotal:</span>
          <span className="cart-container__subtotal-amount">
            {String(currentTotalPrice(cartProducts)) + " £"}
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
