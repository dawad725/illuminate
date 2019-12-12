import { combineReducers } from "redux";
import formReducer from "./form-reducer"
import productsReducer from "./products-reducer"


const rootReducer = combineReducers({
    form: formReducer,
    products: productsReducer

});

export default rootReducer;