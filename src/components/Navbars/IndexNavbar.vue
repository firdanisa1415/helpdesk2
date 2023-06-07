<template>
  <nav
    class="relative top-0 z-50 w-full flex flex-wrap items-center justify-between py-3 navbar-expand-lg bg-img"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a>
            <img src="@/assets/img/brand.png" alt="" width="150" height="50" />
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <div class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link class="nav-link text-white " to="#">Home</router-link>
          </li>
          <li class="flex items-center">
            <router-link class="nav-link text-white px-4" to="/">Panduan</router-link>
          </li>
          <li class="flex items-center">
            <router-link to="/auth/login">
            <button
              class="bg-white text-blue active:bg-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >Login
            </button>
          </router-link>
          </li>
          <li class="flex items-center">
            <router-link to="/auth/guest">
            <button
              class="bg-white text-blue active:bg-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >Isi Formulir
            </button>
          </router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
};
</script>
<style>
.bg-img {
  background-image: url("@/assets/img/nav_total.png");
  background-position: center;
  background-size: cover;
}
</style>