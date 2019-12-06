import { combineReducers } from "redux";
import formReducer from "./form-reducer"
import savingsPercentageReducer from "./savings-percentage-reducer";

const rootReducer = combineReducers({
    form: formReducer,
    savings: savingsPercentageReducer
});

export default rootReducer;