import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.9:80/",
});

instance.interceptors.request.use((req: any) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export default instance;
