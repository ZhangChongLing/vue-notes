import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next(); //如果匹配到正确跳转
});

export default router;
