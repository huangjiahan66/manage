import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

console.log("环境变量", import.meta.env);
import config from "./config";

console.log(config.baseApi);

// axios.get(config.mockApi + "/login").then((res) => {
//   console.log(res);
// });
const app = createApp(App);
app.use(router).use(ElementPlus).mount("#app");
