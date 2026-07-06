import axios from "axios";


const API = axios.create({
    baseURL : "https://recipe-backend-1-3uxp.onrender.com"
})

export default API