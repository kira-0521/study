import { createRouter, createWebHistory } from "vue-router";
const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const Input = () =>
  import(/* webpackChunkName: "Input" */ "../views/Input.vue");
const Graph = () =>
  import(/* webpackChunkName: "Graph" */ "../views/Graph.vue");
const Login = () =>
  import(/* webpackChunkName: "Login" */ "../views/Login.vue");
const Register = () =>
  import(/* webpackChunkName: "Register" */ "../views/Register.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/input",
    name: "Input",
    component: Input
  },
  {
    path: "/graph",
    name: "Graph",
    component: Graph
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
