import _ from 'lodash';
import uuid from 'react-uuid';
import { ADD_TO_CART, EDIT_CART, FETCH_CARTS, DELETE_CART } from "./typeActions";
// import _uniqueId from 'lodash/uniqueId';

const newPrice = (price, quantity) =>{
    price = price.replace(' ','');
    price = price.replace('£','');
    price = price.replace(',','.');
    return String(Math.round((Number(price)*quantity) * 100) / 100) + " £";
};

export const addToCart = (selectProduct) =>{
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    if (!cartProducts){
        localStorage["cart"] = JSON.stringify([{...selectProduct, id: uuid()}]); 
    } else {
        let product = cartProducts.filter(item => 
            item.idProduct === selectProduct.idProduct
        );
        if (product.length === 0){
            localStorage["cart"] = JSON.stringify([...cartProducts,{...selectProduct, id: uuid()}]); 
        } else{
            let productEdit = product.filter(item => item.option === selectProduct.option);
            if (productEdit.length === 0){
                localStorage["cart"] = JSON.stringify([...cartProducts,{...selectProduct,  id: uuid()}]);
            } else{
                const index = cartProducts.indexOf(productEdit[0]);
                const newQuantity = cartProducts[index].quantity + selectProduct.quantity;
                cartProducts[index].quantity = newQuantity;
                cartProducts[index].totalPrice = newPrice(selectProduct.product.price, newQuantity);
                localStorage["cart"] = JSON.stringify([...cartProducts]);
            }
        }
    }
    let newCartProducts = JSON.parse(localStorage.getItem("cart"));
    return {
        type: ADD_TO_CART,
        payload: newCartProducts,
    }
}

export const fetchCarts = () =>{
    return {
        type: FETCH_CARTS,
        payload: JSON.parse(localStorage.getItem("cart")),
    }
}

export const deleteCart = (id) =>{
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    localStorage["cart"] = JSON.stringify(Object.values(_.omit({..._.mapKeys(cartProducts, 'id')}, id)));
    return {
        type: DELETE_CART,
        payload: id,
    }
}

// Edit cart 
export const editCart = (editProduct, quantity) =>{
    // console.log(product);
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    const index = _.findKey(cartProducts, editProduct);
    // const newQuantity = cartProducts[index].quantity + editProduct.quantity;
    cartProducts[index].quantity = quantity;
    cartProducts[index].totalPrice = newPrice(editProduct.product.price, quantity);
    localStorage["cart"] = JSON.stringify([...cartProducts]);

    return {
        type: EDIT_CART,
        payload: JSON.parse(localStorage.getItem("cart"))[index],
    }
}

