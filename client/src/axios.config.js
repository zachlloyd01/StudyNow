import Axios from "axios";

let axios = Axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000,
});


export default axios;
