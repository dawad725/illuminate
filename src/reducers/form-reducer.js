import { SUBMIT_FORM_DATA } from "../actions/submitFormData";


// const DEFAULT_STATE = {
//     question1: '',
//     question2: '',
//     question3: '',
//     question4: '',
//     question5: ''
// }


export default function (state = {}, action) {
    switch (action.type) {
        case SUBMIT_FORM_DATA:
            console.log("form-reducer", action.payload)
            return action.payload.data;
        default:
            return state;
    }

}

