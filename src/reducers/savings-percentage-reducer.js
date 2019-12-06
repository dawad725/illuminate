import { SUBMIT_FORM_DATA } from "../actions/submitFormData";






export default function (state = null, action) {
    switch (action.type) {
        case SUBMIT_FORM_DATA:
            console.log("form-reducer", action)
            return action.payload.data;
        default:
            return state;
    }

}

