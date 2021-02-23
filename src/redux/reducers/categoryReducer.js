
import _ from 'lodash';
import { FETCH_CATEGORY } from '../actions/typeActions';

const categoryReducer = (state = {}, action) =>{
    switch (action.type) {
        case FETCH_CATEGORY:
            return {..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
};

export default categoryReducer;

