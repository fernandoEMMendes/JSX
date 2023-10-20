import axios from "axios"

const apiBack = axios.create({
    baseURL: "http://localhost:5555"
})

export default apiBack