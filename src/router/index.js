import Vue from "vue";
import Router from "vue-router";
import Main from "@/pages/Main.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
  ],
});

export default router;
