import axios from "axios";

export const SUBMIT_FORM_DATA = "submit_form_data";

const ROOT_URL = "/api/submit"

export function submitFormData(values) {
    console.log('values', values)
    const request = axios.post(`${ROOT_URL}`, values);

    // request.then()

    console.log('action.js', request)

    return {
        type: SUBMIT_FORM_DATA,
        payload: request

    }

}       