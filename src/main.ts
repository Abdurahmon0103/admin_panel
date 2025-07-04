import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App);
app.component("apexchart", VueApexCharts);
app.use(router).mount("#app");
