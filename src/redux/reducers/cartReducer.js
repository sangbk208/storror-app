import _ from 'lodash';
import { ADD_TO_CART, FETCH_CARTS, DELETE_CART, EDIT_CART } from "../actions/typeActions";

const cartReducer = (state={}, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_CARTS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case EDIT_CART:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_CART:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

export default cartReducer;