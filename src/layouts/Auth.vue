<template>
  <div>
    <navbar />
    <main>
      <section class="relative w-full h-full py-16 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-color: white`"
        ></div>
        <router-view />
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";
import CookieHandler from "../utils/cookieHandler";
import { adminRouteLinks } from "../utils/routeLinks";
import { useRouter } from "vue-router";
const cookieHandler = new CookieHandler();
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    FooterSmall,
  },
  setup() {
    const router = useRouter();
    const token = cookieHandler.get("token");
    if (token) {
      router.push(adminRouteLinks.dashboard);
    }
  },
};
</script>
