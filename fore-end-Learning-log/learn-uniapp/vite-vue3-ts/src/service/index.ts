import { localCache } from "@/utils/cache";
import { BASE_URL, TIME_OUT } from "./config";
import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";
import { TOKEN } from "@/global/constants";

class Request {
  instance: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config) => {
        const token = localCache.getCache(TOKEN);
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  get(config: AxiosRequestConfig) {
    return this.instance.request({
      ...config,
      method: "GET",
    });
  }
  post(config: AxiosRequestConfig) {
    return this.instance.request({
      ...config,
      method: "POST",
    });
  }
  delete(config: AxiosRequestConfig) {
    return this.instance.request({
      ...config,
      method: "DELETE",
    });
  }
  patch(config: AxiosRequestConfig) {
    return this.instance.request({
      ...config,
      method: "PATCH",
    });
  }
}

// 拦截器

export default new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
