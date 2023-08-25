<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100 min-h-screen">
      <admin-navbar />
      <!-- <header-stats /> -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24 pt-12">
        <div class="min-h-screen">
          <div class="margin-content">
            <router-view />
          </div>
        </div>
        <footer-admin absolute />
      </div>
    </div>
    <slot name="modal"></slot>
  </div>
</template>
<style scoped>
.margin-content {
  margin-top: 4rem;
}
@media (min-width: 768px) {
  .margin-content {
    margin-top: 10rem;
  }
}
</style>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/SidebarManager.vue";
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import { mapActions } from "vuex";
import CookieHandler from "../utils/cookieHandler";
import { credsRouteLinks } from "../utils/routeLinks";
import { useRouter } from "vue-router";
const cookieHandler = new CookieHandler();

export default {
  name: "manager-layout",
  components: {
    AdminNavbar,
    Sidebar,
    // HeaderStats,
    FooterAdmin,
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  setup() {
    const router = useRouter();
    const token = cookieHandler.get("token");
    if (!token) {
      router.push(credsRouteLinks.login);
    }
  },
  mounted() {
    const nrp = cookieHandler.get("nrp");
    this.$store.dispatch("getUser", { nrp });
  },
};
</script>
