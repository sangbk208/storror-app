// import _ from 'lodash';
import { FETCH_VIDEOLISTS } from '../actions/type';

const videoListsReducer = (state={}, action) =>{
    switch (action.type) {
        case FETCH_VIDEOLISTS:
            return {...state};
        default:
            return state;
    }
}

export default videoListsReducer;