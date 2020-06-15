import { combineReducers } from 'redux';
import REDUCER_CART from './cart'
import REDUCER_FAVORITES from './favorites'

export default combineReducers({
    REDUCER_CART,
    REDUCER_FAVORITES,
});
