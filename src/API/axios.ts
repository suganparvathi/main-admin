import axios from "axios";

const instance = axios.create({
  // baseURL: "http://52.91.202.83:5000/",
  // baseURL: "http://18.218.223.227:5000",
  baseURL: "http://3.143.53.147:5000/",
  // baseURL: "http://192.168.1.20:5000/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `${localStorage.getItem("token")}`;
  return req;
});

export default instance;
