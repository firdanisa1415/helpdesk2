import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Pelaporan from "@/views/admin/DataPelaporan.vue";
import Board from "@/views/admin/BoardPenugasan.vue";
import Penugasan from "@/views/admin/DataPenugasan.vue";
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

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/pelaporan",
        component: Pelaporan,
      },
      {
        path: "/admin/backlog",
        component: Backlog,
      },
      {
        path: "/admin/sprint",
        component: Sprint,
      },
      {
        path: "/admin/board",
        component: Board,
      },
      {
        path: "/admin/penugasan",
        component: Penugasan,
      },
      {
        path: "/admin/pengguna",
        component: Pengguna,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
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
app.mount("#app");
