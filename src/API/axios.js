import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-f783d/us-central1/api",
  baseURL: "https://amazon-api-qodt.onrender.com/clear",
});
export {axiosInstance};