import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, editCart } from "../../redux/actions/cart";

CartItem.propTypes = {};

function CartItem(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const handleOnclickRemove = () => {
    dispatch(deleteCart(product.id));
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (!value || parseInt(value) < 1) {
      dispatch(editCart(product, 1));
    } else {
      dispatch(editCart(product, parseInt(value)));
    }
  };

  return (
    <div className="cart-item">
      <div
        data-testid="product-thumbnail-id"
        className="cart-item__product-img"
        style={{ backgroundImage: `url(${product.product.thumbnail})` }}
      ></div>
      <div className="cart-item__content">
        <div className="cart-item__content-top">
          <span className="cart-item__content-name">
            {product.product.name}
          </span>
          <span
            data-testid="remove-button-id"
            onClick={handleOnclickRemove}
            className="cart-item__content-delete"
          >
            Remove
          </span>
        </div>
        <div className="cart-item__content-size">
          {!product.option ? "No size" : product.option}
        </div>
        <div className="cart-item__content-bottom">
          <div className="cart-item__content-quantity">
            <button
              data-testid="decrease-btn"
              onClick={() =>
                product.quantity <= 1
                  ? dispatch(editCart(product, 1))
                  : dispatch(editCart(product, product.quantity - 1))
              }
              className="cart-item__content-btn cart-item__content-btn-countup"
            >
              -
            </button>
            <input
              data-testid="input-id"
              onChange={handleOnChange}
              className="cart-item__content-input"
              type="text"
              value={String(product.quantity)}
            />
            <button
              data-testid="increase-btn"
              onClick={() => dispatch(editCart(product, product.quantity + 1))}
              className="cart-item__content-btn cart-item__content-btn-countdown"
            >
              +
            </button>
          </div>
          <span className="cart-item__content-price">{product.totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
