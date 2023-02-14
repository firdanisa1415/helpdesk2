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
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";

export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    // HeaderStats,
    FooterAdmin,
  },
};
</script>