import axios from 'axios'

export const api = axios.create({
    baseURL: "https://pallium.serveo.net"
})

export default api;