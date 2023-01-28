import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.8:5000/",
  // baseURL: "http://13.232.250.90/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
