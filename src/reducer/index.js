import { combineReducers } from "redux";
import { ecommerceReducer } from "./ecommerceReducer";

const reducers = combineReducers({
    ecommerce:ecommerceReducer,
})

export default reducers;  