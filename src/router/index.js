import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ItemView from "../views/ItemView.vue";
import CartView from "../views/CartView.vue"
import RegisterView from "../views/RegisterView"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/item/:id",
    name:"Iiem",
    component: ItemView,
    beforeRouteEnter (to, from, next) {
      window.scrollTo(0, 0);
      next();
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // Khi bạn chuyển đến một route mới, cuộn lên đầu trang
  window.scrollTo(0, 0);
  next();
});

export default router;
