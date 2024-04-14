import axios from "axios";

const apiLocal = axios.create({
    baseURL: "http://192.168.1.102:3333"
})

export default apiLocal