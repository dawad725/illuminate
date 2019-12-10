import { combineReducers } from "redux";
import formReducer from "./form-reducer"
import fetchProducts from "./products-reducer";

const rootReducer = combineReducers({
    form: formReducer,
    products: fetchProducts
});

export default rootReducer;