import NotFound from "@/pages/NotFound.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    alias: ["/home"],
    component: HomeView,
  },
  {
    path: "/components",
    name: "components",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/component.vue"),
    children: [
      {
        path: "button",
        name: "button",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../pages/component/buttonComponent.vue"
          ),
      },
      {
        path: "badges",
        name: "badges",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../pages/component/badgesComponent.vue"
          ),
      },
      {
        path: "card",
        name: "card",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../pages/component/cardComponent.vue"
          ),
      },
    ],
  },
  {
    path: "/table",
    name: "table",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/table.vue"),
    children: [
      {
        path: "basic",
        name: "basic",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/table/basic.vue"),
      },
      {
        path: "data",
        name: "data",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/table/data.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
