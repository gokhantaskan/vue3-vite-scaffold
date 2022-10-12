import "./assets/styles/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app
  .use(router)
  .use(pinia)
  .mount("#app");
