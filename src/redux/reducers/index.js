import {combineReducers} from 'redux';
import videoListsReducer from './videoListsReducer';

export default combineReducers({
    videoLists: videoListsReducer,
});