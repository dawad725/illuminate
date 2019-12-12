import { SEND_BACK_QUERY } from "../actions/send-back-query";


export default function (state = {}, action) {
    switch (action.type) {
        case SEND_BACK_QUERY:
            console.log("fetchproducts", action)
            if (action.payload && action.payload.data) {
                return action.payload.data;
            }
            return state;
        default:
            return state;
    }

}

