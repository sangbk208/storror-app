import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import quantityReducer from './quantityReducer';
import videoListsReducer from './videoListsReducer';

export default combineReducers({
    videoLists: videoListsReducer,
    products: productsReducer,
    category: categoryReducer,
    quantity: quantityReducer,
});