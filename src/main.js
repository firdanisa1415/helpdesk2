import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import { AgGridVue } from "ag-grid-vue3";
import VueGoodTablePlugin from "vue-good-table";
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import 'vue-good-table/dist/vue-good-table.css'
// import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Pelaporan from "@/views/admin/DataPelaporan.vue";
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
app.use(VueSweetalert2);
app.use(AgGridVue);
app.use(VueGoodTablePlugin);
app.mount("#app");
