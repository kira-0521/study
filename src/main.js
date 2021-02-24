import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/studyapp-29cc7/databases/(default)/documents";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
