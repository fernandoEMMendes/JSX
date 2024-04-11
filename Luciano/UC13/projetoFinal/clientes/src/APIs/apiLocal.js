import axios from "axios"

const apiLocal = axios.create({
    baseURL: "http://10.10.10.13:3333"
})

export default apiLocal