import products from '../../apis/productsApi';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './typeActions';

export const fetchProducts = () => async dispatch => {
    const response = await products.get();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
    });
}

export const fetchProduct = (name) => async dispatch => {
    const response = await products.get(`/?name=${name}`);
    dispatch({
        type: FETCH_PRODUCT,
        payload: response.data[0],
    });
}