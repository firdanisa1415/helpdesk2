<template>
  <nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
    <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Toggler -->
      <button class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')">
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" to="/">
        <img src="@/assets/img/brand.png" alt="" width="150" height="50" />
      </router-link>
      <!-- User -->
      <div class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </div>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" to="/">
                <img src="@/assets/img/brand.png" alt="" width="150" height="50" />
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button type="button" class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" v-on:click="toggleCollapseShow('hidden')">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Navigation -->

        <div class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link to="/admin/dashboard" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-tv mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Dashboard
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/pelaporan" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-list-ul mr-3 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Data Pelaporan
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/boardpelaporan" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-table mr-3 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Board Pelaporan
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/backlog" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-stream mr-3 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Data Epic
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/Sprint" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-stream mr-3 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Sprint Backlog
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/board" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-table mr-3 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Board Scrum
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/pengguna" v-slot="{ href, navigate, isActive }">
              <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[isActive ? 'text-blue-500 hover:text-blue-300' : 'text-blueGray-700 hover:text-blueGray-500']">
                <i class="fas fa-users mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                Data Pengguna
              </a>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
    NotificationDropdown,
    UserDropdown,
  },
};
</script>
