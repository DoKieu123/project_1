import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'
import baseDailog from '@/components/UI/baseDailog.vue'

const app =createApp(App);
const pinia = createPinia();
app.component('base-dialog' ,baseDailog)
app.use(pinia)
app.use(router)
app.mount("#app");
