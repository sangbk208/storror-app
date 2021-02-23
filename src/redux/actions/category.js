import products from '../../apis/productsApi';
import { FETCH_CATEGORY } from "./typeActions";

export const fetchCategory = (type)=> async dispatch =>{
    const response = await products.get(`/?type=${type}`);
    dispatch({
        type: FETCH_CATEGORY,
        payload: response.data,
    });
};