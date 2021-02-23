import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import videoListsReducer from './videoListsReducer';

export default combineReducers({
    videoLists: videoListsReducer,
    products: productsReducer,
    category: categoryReducer,
});