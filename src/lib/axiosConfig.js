import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://accounts.mobisoft.com.tr/web",
});

export default axiosConfig;
