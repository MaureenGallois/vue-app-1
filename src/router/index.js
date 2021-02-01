import Vue from "vue";
import VueRouter from "vue-router";
import AnimalPage from "../views/AnimalPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AnimalPage",
    component: AnimalPage
  },
  {
    path: "/AnimalDetail",
    name: "AnimalDetail",
    component: () =>
      import(/* webpackChunkName: "AnimalDetail" */ "../views/AnimalDetail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
