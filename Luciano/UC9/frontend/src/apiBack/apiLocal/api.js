import axios from "axios"

const apiLocal = axios.create({
    baseURL: "http://localhost:7602"
})

export default apiLocal