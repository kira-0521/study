import { createRouter, createWebHistory } from "vue-router";
import Input from "../views/Input.vue";

const routes = [
  {
    path: "/",
    name: "Input",
    component: Input
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
