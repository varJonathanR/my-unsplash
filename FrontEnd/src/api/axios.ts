import axios from "axios";

/* const LOCAL_API = "http://localhost:1234/api"; */
const PRODUCTION_API = import.meta.env.PUBLIC_PRODUCTION_API;

const instance = axios.create({
    baseURL: PRODUCTION_API,
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    }
});

export default instance;