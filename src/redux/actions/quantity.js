import { UPDATE_QUANTITY } from "./typeActions";

export const updateQuantity=(quantity)=> async dispatch =>{
    dispatch({
        type: UPDATE_QUANTITY,
        payload: quantity,
    });
};