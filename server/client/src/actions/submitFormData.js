import axios from "axios";

export const SUBMIT_FORM_DATA = "submit_form_data";

const ROOT_URL = "/api/submit"

export function submitFormData(values) {

    const request = axios.post(`${ROOT_URL}`, values);

    return {
        type: SUBMIT_FORM_DATA,
        payload: request

    }

}       