import axios from "axios";

export const SEND_BACK_QUERY = "send_back_Query";

const ROOT_URL = "http://localhost:8000/products"

export function sendBackQuery(brand, question1, question2, question3, question4, question5) {
    console.log('send back query action', brand, question1)
    const request = axios.post(`${ROOT_URL}`, {
        params: {
            brand: brand,
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5
        }
    });

    console.log('send back request', request)

    return {
        type: SEND_BACK_QUERY,
        payload: request

    }

}       