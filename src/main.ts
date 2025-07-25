import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
axios.defaults.baseURL = "http://89.169.45.43:5000";
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App);
app.component("apexchart", VueApexCharts);
app.use(router);
app.use(createPinia());
app.mount("#app");
