import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../components/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Welcome,
    },
    {
      path: "/client",
      name: "client",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ClientView.vue"),
    },
    {
      path: "/addClient",
      name: "addClient",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddClientView.vue"),
    },
    {
      path: "/showClient",
      name: "showClient",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ShowClientView.vue"),
    },
    {
      path: "/updateClient",
      name: "updateClient",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UpdateClientView.vue"),
    },
    {
      path: "/destroyClient",
      name: "destroyClient",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DestroyClientView.vue"),
    },
  ],
});

export default router;
