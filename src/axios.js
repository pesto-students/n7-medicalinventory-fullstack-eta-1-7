import axios from "axios";

const instance = axios.create({
  baseURL: "https://abdulrashidalaskar.pythonanywhere.com/",
});

export default instance;
