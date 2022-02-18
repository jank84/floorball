import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VuesticPlugin) // <-

app.mount("#app");




