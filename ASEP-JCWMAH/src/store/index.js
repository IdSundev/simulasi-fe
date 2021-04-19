import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import transactionReducer from "./reducers/transactionReducer";

const reducer = combineReducers({ productReducer, cartReducer, transactionReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
