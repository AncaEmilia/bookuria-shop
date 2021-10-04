import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cart";
import { userReducer } from "./reducers/user";

const rootReducer = combineReducers({
    cart: cartReducer, 
    user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;