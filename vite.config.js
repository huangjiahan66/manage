import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    // host: "localhost",
    port: 8080,
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      "/api": {
        // 代理请求之后的请求地址
        target: "http://api-manager.marsview.cc",
        // 跨域
        changeOrigin: true,
      },
    },
  },

  plugins: [vue()],
});
