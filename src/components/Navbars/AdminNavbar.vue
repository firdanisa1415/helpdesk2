<template>
  <!-- Navbar -->
  <nav
  class="hidden md:flex fixed top-0 left-0 w-full z-2 bg-blue-500 md:flex-row md:flex-nowrap md:justify-start items-center p-4"
  >
    <div
    class="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Selamat Datang
      </a>
      <div class="flex-col md:flex-row list-none items-center hidden md:flex">
        <user-dropdown />
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  components: {
    UserDropdown,
  },
};
</script>
