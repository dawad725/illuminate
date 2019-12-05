import axios from "axios";

export const FETCH_FORM_DATA = "fetch_from_data";

const ROOT_URL = "/"

export function fetchDataFromData(question1, question2, question3, question4, question5) {
    const request = axios.post(ROOT_URL, {
        params: {
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5,

        }
    });

    return {
        type: FETCH_FORM_DATA,
        payload: request
    }

}       