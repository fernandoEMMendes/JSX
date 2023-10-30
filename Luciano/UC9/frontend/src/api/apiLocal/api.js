import axios from "axios"

const apiLocal = axios.create({
    baseURL: "http://localhost:7602",
    Headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
})

export default apiLocal