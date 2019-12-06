import { FETCH_FORM_DATA } from "../actions/fetchFormData";


const DEFAULT_STATE = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
}


export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_FORM_DATA:
            console.log("form-reducer", action.payload.data)
            return action.payload.data;
        default:
            return state;
    }

}