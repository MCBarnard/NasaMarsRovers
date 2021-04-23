import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Curiosity from "../views/Rovers/Curiosity";
import Spirit from "../views/Rovers/Spirit";
import Opportunity from "../views/Rovers/Opportunity";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/curiosity",
    name: "Curiosity",
    component: Curiosity,
  },
  {
    path: "/spirit",
    name: "Spirit",
    component: Spirit,
  },
  {
    path: "/opportunity",
    name: "Opportunity",
    component: Opportunity,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
