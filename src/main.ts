import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { VuesticPlugin } from "vuestic-ui"; // material ui
import "vuestic-ui/dist/vuestic-ui.css"; // material ui
import 'material-design-icons-iconfont/dist/material-design-icons.min.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VuesticPlugin); // material ui

app.mount("#app");
