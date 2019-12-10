import { FETCH_PRODUCTS } from "../actions/fetch-products";


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log("fetchproducts", action)
            return action.payload.data;
        default:
            return state;
    }

}

