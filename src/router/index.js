import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue")
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductSelectedView.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue")
    },
  ],
});

export default router;
