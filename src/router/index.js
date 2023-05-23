import Vue from "vue";
import Router from "vue-router";
import Main from "@/pages/Main.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "cover",
    //   component: ,
    // },
    {
      path: "/",
      name: "main",
      component: Main,
    },
    // {
    //   path: "/Final",
    //   name: "Final",
    //   component: ,
    // },
  ],
});

export default router;
