import axios from 'axios'

export const api = axios.create({
    baseUrl: "http://localhost3000/",
    responseType: "JSON"
})