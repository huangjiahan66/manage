import { createApp } from "vue";
import App from "./App.vue";
// import store from "./store";
import router from "./router";

import request from "./utils/request";
import storage from "./utils/storage";
// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import api from "./api";
import config from "./config";
import store from "./store";

const app = createApp(App);

app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$api = api;
app.use(router).use(ElementPlus).use(store).mount("#app");
