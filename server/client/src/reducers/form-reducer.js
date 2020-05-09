import { SUBMIT_FORM_DATA } from "../actions/submitFormData";


export default function (state = {}, action) {
    switch (action.type) {
        case SUBMIT_FORM_DATA:
            // console.log(SUBMIT_FORM_DATA)
            // console.log("form-reducer", action.payload)
            // console.log("form-reducer-data", action.payload.data)
            if (action.payload && action.payload.data) {
                return JSON.parse(JSON.stringify(action.payload.data));
            }
            return state;
        default:
            return state;
    }

}

