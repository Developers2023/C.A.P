import axios from "axios";

const apiMenager = axios.create({
    baseURL:'http://localhost:3000',
    responseType: 'json'
})

export default apiMenager