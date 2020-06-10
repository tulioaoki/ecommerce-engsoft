import { combineReducers } from 'redux';
import REDUCER_CART from './cart'
import REDUCER_ADMIN_PRODUCTS from './admin'

export default combineReducers({
    REDUCER_CART,
    REDUCER_ADMIN_PRODUCTS,
});
