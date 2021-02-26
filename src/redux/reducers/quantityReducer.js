import { UPDATE_QUANTITY } from "../actions/typeActions";

const quantityReducer = (state = 1, action) =>{
    switch (action.type) {
        case UPDATE_QUANTITY:
            return action.payload;
        default:
            return state;
    }
};

export default quantityReducer;