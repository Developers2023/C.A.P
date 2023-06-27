import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:3002"
    /*timeout: 1000,
    header:{
      'Authorization':  "2Rg1TKb66Sqln0AUQRmRAblm35C_3EAgukjnyUb3JTdNm76C7",
      'Content-Type': 'application/x-www-form-urlencoded'
    }*/
    
})

export default api;