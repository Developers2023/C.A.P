import axios from 'axios'

export const api = axios.create({
    baseURL: "http://10.2.2:3002"
})

export default api;
