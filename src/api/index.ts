import axios from "axios";
import store from "../store";

const baseURL = "http://localhost:3000";
const instance = axios.create({
  baseURL: baseURL,
});
instance.interceptors.request.use(
  (config: any) => {
    config.headers["token"] = `${localStorage.getItem("token")}`;
    config.headers["content-type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status || 0;
    const resBaseURL = error?.response?.config?.baseURL;
    if (resBaseURL === baseURL && status === 401) {
      if (localStorage.getItem("token")) {
        store.dispatch("logout");
        window.location.assign("/");
        return Promise.reject(error);
      } else {
        store.dispatch("logout");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
