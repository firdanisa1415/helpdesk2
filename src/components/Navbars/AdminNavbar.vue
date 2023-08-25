<template>
  <!-- Navbar -->
  <nav class="hidden md:flex fixed top-0 left-0 w-full z-2 bg-blue-500 md:flex-row md:flex-nowrap md:justify-start items-center p-4">
    <div class="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4">
      <!-- Brand -->
      <div class="flex-col md:flex-row list-none items-center hidden md:flex">
        <!-- <notification /> -->
      </div>
      <a class="text-white text-sm uppercase hidden lg:inline-block font-semibold mr-4" href="javascript:void(0)"> Selamat Datang, {{ recentUser }} </a>
      <div class="flex-col md:flex-row list-none items-center hidden md:flex">
        <user-dropdown class="me-2" />
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
// import Notification from "@/components/Dropdowns/NotificationDropdown.vue";
import CookieHandler from "../../utils/cookieHandler";
export default {
  components: {
    UserDropdown,
    // Notification,
  },
  data() {
    const cookieHandler = new CookieHandler();
    return {
      recentUser: cookieHandler.get("nama_karyawan"),
    };
  },
};
</script>
