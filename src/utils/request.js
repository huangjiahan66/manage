/**
 * axios二次封装
 */
import axios from "axios";
import config from "./../config";
import { ElMessage } from "element-plus";
import router from "./../router";

const TOKEN_INVALID = "Token认证失败，请重新登录";
const NETWORK_ERROR = "网络请求异常，请稍后重试";

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

// 请求拦截
service.interceptors.request.use((req) => {
  // const headers = req.headers;
  // const { token = "" } = storage.getItem("userInfo") || {};
  // if (!headers.Authorization) headers.Authorization = "Bearer " + token;
  return req;
});

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else if (code === 500001) {
    ElMessage.error(TOKEN_INVALID);
    setTimeout(() => {
      router.push("/login");
    }, 1500);
    return Promise.reject(TOKEN_INVALID);
  } else {
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});
/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  let isMock = config.mock;
  if (typeof options.mock != "undefined") {
    isMock = options.mock;
  }
  // 如果是生产环境 baseurl 用线上环境
  if (config.env === "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    // 走mock 还是走接口
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }

  return service(options);
}

export default request;
