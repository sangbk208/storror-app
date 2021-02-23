import products from '../../apis/productsApi';
import { FETCH_PRODUCTS } from './typeActions';

export const fetchProducts = () => async dispatch => {
    const response = await products.get();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
    });
}