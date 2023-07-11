<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mt-4 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-center justify-center mb-5 mt-5">
              <img src="@/assets/img/brand.png" width="150" height="50" class="text-center" />

              <h6 class="text-black text-sm font-bold">Masuk Pelapor</h6>
            </div>
            <form @submit.prevent="submitForm">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> NRP </label>
                <input
                  type="text"
                  v-model="form.nrp"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="NRP"
                />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Password </label>
                <input
                  type="password"
                  v-model="form.password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600"> Ingatkan saya </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button :class="buttonSubmitClass" type="submit" :disabled="isSubmitting">
                  {{ isSubmitting ? "Loading" : "Masuk" }}
                </button>
                <!-- <router-link to="/admin/dashboard">
                  
                </router-link> -->
              </div>
              <div class="flex flex-wrap mt-6 text-center">
                <div class="w-full">
                  <a href="javascript:void(0)" class="text-blue-400">
                    <small>Lupa Password?</small>
                  </a>
                </div>
                <div class="w-full">
                  <router-link to="/auth/register" class="text-blue-400">
                    <small>Buat Akun Baru</small>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { adminRouteLinks, userRouteLinks } from "../../utils/routeLinks";

export default {
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    isSubmitting() {
      return this.$store.state.user.isSubmitting;
    },
    buttonSubmitClass() {
      if (this.isSubmitting) {
        return "bg-blue-200 text-gray-300 cursor-not-allowed active:bg-blue-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";
      } else {
        return "bg-blue-500 text-white active:bg-blue-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";
      }
    },
  },
  data: () => ({
    form: {
      nrp: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(["login", "register"]),
    submitForm() {
      this.login(this.form).then(() => {
        this.form = {};
        console.log(this.user.user.role_id);
        if (this.user.user.role_id == 1) {
          console.log("Login Karyawan Success!");
          this.$router.push(userRouteLinks.dashboard);
        } else if (this.user.user.role_id == 2) {
          this.$router.push(adminRouteLinks.dashboard);
        }
      });
    },
  },
};
</script>
