// import Vue from "vue";
import { createApp } from "vue";
import App from "./App";
import router from "./routes/index.js";

// vue에서 사용하기 위한 use 메서드체이닝
createApp(App).use(router).mount("#app");
