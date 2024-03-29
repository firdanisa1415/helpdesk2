import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts
import User from "@/layouts/User.vue";
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Pelaporan from "@/views/admin/DataPelaporan.vue";
import BoardPelaporan from "@/views/admin/BoardPelaporan.vue";
import Board from "@/views/admin/BoardPenugasan.vue";
import Pengguna from "@/views/admin/DataPengguna.vue";
import Backlog from "@/views/admin/Backlog.vue";
import Sprint from "@/views/admin/Sprint.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

import store from "./vuex/store";
import { adminRouteLinks, baseRouteLinks, credsRouteLinks, userRouteLinks } from "./utils/routeLinks";

const routes = [
  {
    path: "/admin",
    redirect: adminRouteLinks.dashboard,
    component: Admin,
    meta: { role_id: 2 },
    children: [
      {
        path: adminRouteLinks.dashboard,
        component: Dashboard,
      },
      {
        path: adminRouteLinks.pelaporan,
        component: Pelaporan,
      },
      {
        path: adminRouteLinks.boardpelaporan,
        component: BoardPelaporan,
      },
      {
        path: adminRouteLinks.backlog,
        component: Backlog,
      },
      {
        path: adminRouteLinks.sprint,
        component: Sprint,
      },
      {
        path: adminRouteLinks.board,
        component: Board,
      },
      {
        path: adminRouteLinks.pengguna,
        component: Pengguna,
      },
    ],
  },
  {
    path: "/user",
    redirect: userRouteLinks.dashboard,
    component: User,
    meta: { role_id: 1 },
    children: [
      {
        path: userRouteLinks.dashboard,
        component: Dashboard,
      },
      {
        path: userRouteLinks.pelaporan,
        component: Pelaporan,
      },
      {
        path: userRouteLinks.boardpelaporan,
        component: BoardPelaporan,
      },
      {
        path: userRouteLinks.backlog,
        component: Backlog,
      },
      {
        path: userRouteLinks.sprint,
        component: Sprint,
      },
      {
        path: userRouteLinks.board,
        component: Board,
      },
      {
        path: userRouteLinks.pengguna,
        component: Pengguna,
      },
    ],
  },
  {
    path: "/auth",
    redirect: credsRouteLinks.login,
    component: Auth,
    children: [
      {
        path: credsRouteLinks.login,
        component: Login,
      },
      {
        path: credsRouteLinks.logout,
        component: Register,
      },
      {
        path: credsRouteLinks.guest,
        component: Register,
      },
    ],
  },
  {
    path: baseRouteLinks.landing,
    component: Landing,
  },
  {
    path: baseRouteLinks.profile,
    component: Profile,
  },
  {
    path: baseRouteLinks.home,
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.role_id)) {
    console.log(to.meta.role_id);
    if (store.state.user.data.user.role_id !== to.meta.role_id) {
      // next({ name: "AccessDenied" }); // Redirect to an 'Access Denied' page
      console.log("accesdenied");
    } else {
      next(); // Allow the navigation
    }
  } else {
    next(); // Allow the navigation
  }
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");
