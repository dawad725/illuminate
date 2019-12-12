import { SEND_BACK_QUERY } from "../actions/send-back-query";


export default function (state = {}, action) {
    switch (action.type) {
        case SEND_BACK_QUERY:
            console.log("fetchproducts", action)
            return action.payload.data;
        default:
            return state;
    }

}

