import axios from "axios";

const instance = axios.create({
    baseURL:"http://abdulrashidalaskar.pythonanywhere.com"
});

export default instance;
