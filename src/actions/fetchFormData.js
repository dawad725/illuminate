import axios from "axios";

export const FETCH_FORM_DATA = "fetch_from_data";

const ROOT_URL = "/"

export function fetchFormData(values) {
    console.log('values', values)
    const request = axios.post(`${ROOT_URL}`, values);

    console.log('action.js', request)

    return {
        type: FETCH_FORM_DATA,
        payload: request

    }

}       