import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5200",
});

export default axiosInstance;
