<template>
  <div>
    <index-navbar />
    <section class="header relative items-center flex h-screen max-h-860-px">
      <div class="container mx-auto align-items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-2 py-2">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-blueGray-600">Layanan Pengaduan Permasalahan Sistem</h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">Laporkan dan ajukan Terkait permasalahan sistem operasional anda disini, Operator kami akan segera memprosesnya</p>
            <div class="mt-12">
              <router-link to="/auth/login">
            <button
              class="bg-blue-500 text-white active:bg-white text-xs font-bold uppercase px-4 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >Ajukan Laporan Sekarang!
            </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>

      <img class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px" src="@/assets/img/hero.png" alt="..." />
    </section>

    <section class="mt-20 md:mt-40 pb-40 relative bg-blueGray-100">
      <div class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style="transform: translateZ(0)">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-20">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-500">
              <img alt="..." src="@/assets/img/layanan_page.png" class="w-full align-middle rounded-t-lg" />
              <blockquote class="relative p-8 mb-4">
                <h4 class="text-xl font-bold text-white">Proses Pengajuan Laporan Helpdesk</h4>
                <p class="text-md font-light mt-2 text-white">
                  Karyawan akan melakukan pelaporan pada aplikasi helpdesk untuk memberikan
                  permasalahan, Request, maupun penugasan biasa. Seluruh data dapat termonitor 
                  melalui hasil pengelompokan laporan.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <img src="@/assets/img/layanan1.png" alt="">
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Masukkan Data Akun Pelapor</h6>
                    <p class="mb-4 text-blueGray-500">Isikan data diri pelapor berupa Username dan Password yang Terdaftar</p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <img src="@/assets/img/layanan2.png" alt="">
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Ajukan Pelaporan</h6>
                    <p class="mb-4 text-blueGray-500">Isikan Permasalahan sistem operasional yang sedang dialami</p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <img src="@/assets/img/layanan3.png" alt="">
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Data Berhasil Diajukan</h6>
                    <p class="mb-4 text-blueGray-500">Kirim data. Data akan diproses oleh operator kami</p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                      <img src="@/assets/img/layanan4.png" alt="">
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Tunggu Update dari Operator</h6>
                    <p class="mb-4 text-blueGray-500">Cek Secara Berkala Kotak Masuk Email Anda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
