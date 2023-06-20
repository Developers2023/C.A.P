import axios from 'axios'

export const api = axios.create({
    baseURL: "https://6a98-2804-14c-a8-a038-eb-c66d-9d8a-6e70.ngrok-free.app"
})

export default api;