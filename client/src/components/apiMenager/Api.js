import axios from 'axios'

export const api = axios.create({
    baseURL: "https://aade-2804-14c-a8-a038-e0ec-65f7-b60-3616.ngrok-free.app"
})

export default api;