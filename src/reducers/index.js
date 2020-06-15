import { combineReducers } from 'redux';
import REDUCER_CART from './cart'
import REDUCER_FAVORITES from './favorites'
import REDUCER_ADMIN_PRODUCTS from './admin'
import REDUCER_CATEGORIES from './categories'

export default combineReducers({
    REDUCER_CART,
    REDUCER_ADMIN_PRODUCTS,
    REDUCER_CATEGORIES,
    REDUCER_FAVORITES,
});
