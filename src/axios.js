import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktokclone-backend-v01.herokuapp.com"
})

export default instance;