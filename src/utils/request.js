import axios from "axios";
import config from "./../config";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 5000,
});
//请求拦截器
service.interceptors.request.use((req) => {
  return req;
});

// 响应拦截器
service.interceptors.response.use((res) => {
  return res;
});
