import { combineReducers } from 'redux';
import plantReducer from '../features/plantSlice';
import cartReducer from '../features/cartSlice'

const rootReducer = combineReducers({
  plants: plantReducer,
  cart: cartReducer
});

export default rootReducer;