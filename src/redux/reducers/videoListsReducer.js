// import _ from 'lodash';

import { FETCH_VIDEOLISTS } from "../actions/typeActions";

const videoListsReducer = (state=[], action) =>{
    switch (action.type) {
        case FETCH_VIDEOLISTS:
            console.log(action.payload);
            return [...action.payload];
        default:
            return state;
    }
}

export default videoListsReducer;