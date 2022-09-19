import { createApp } from "vue";
import { createPinia } from "pinia";
import { worker } from "./mocks/browser";

import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

worker.start({
  onUnhandledRequest: "bypass",
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
