import { createApp } from "vue";
import App from "./App.vue";
import vueCustomElement from "vue-custom-element";
import Vuetify from "vuetify";

createApp(App).use(vueCustomElement);
createApp(App).use(Vuetify);

createApp(App).mount("#app");
