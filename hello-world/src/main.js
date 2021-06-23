import { createApp } from "vue";
import App from "./App.vue";
import vueCustomElement from "vue-custom-element";

createApp(App).use(vueCustomElement);

createApp(App).mount("#app");
