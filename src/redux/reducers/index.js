import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import quantityReducer from './quantityReducer';
import videoListsReducer from './videoListsReducer';

export default combineReducers({
    videoLists: videoListsReducer,
    products: productsReducer,
    category: categoryReducer,
    quantity: quantityReducer,
    cart: cartReducer,
});