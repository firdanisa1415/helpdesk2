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
import {
  adminRouteLinks,
  baseRouteLinks,
  credsRouteLinks,
} from "./utils/routeLinks";

const routes = [
  {
    path: "/admin",
    redirect: adminRouteLinks.dashboard,
    component: Admin,
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

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");
