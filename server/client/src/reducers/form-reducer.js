import { SUBMIT_FORM_DATA } from "../actions/submitFormData";


export default function (state = {}, action) {
    switch (action.type) {
        case SUBMIT_FORM_DATA:
            console.log("form-reducer", action.payload)
            return action.payload.data;
        default:
            return state;
    }

}

