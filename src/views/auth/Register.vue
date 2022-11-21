<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <img src="@/assets/img/brand.png" alt="" width="150" height="50" />
              <h6 class="text-black text-sm font-bold">Daftar Pelapor</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Nama </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama" />
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> NRP </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="NRP" />
              </div>
              <div class="relative w-full mb-3">
                <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Divisi</label>
                <select
                  id="divisi"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option>--Pilih Divisi--</option>
                  <option>Divisi Sumber Daya dan Umum</option>
                  <option>Divisi Operasional dan HSSE</option>
                  <option>Biro Satuan Pengawas Internal</option>
                  <option>Divisi Komersial dan Pemasaran</option>
                  <option>Divisi Asesmen, Pelatihan, dan Konsultasi</option>
                  <option>Pengadaan Barang dan Jasa</option>
                  <option>Divisi Teknologi dan Informasi</option>
                  <option>Divisi Keuangan</option>
                  <option>Biro Hukum dan Sekretaris Perusahaan</option>
                </select>
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Email </label>
                <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Password </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div class="text-center mt-6">
                <router-link to="/auth/login">
                <button
                  class="bg-blue-500 text-white active:text-blue-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Daftar
                </button>
              </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";

export default {
  data() {
    return {
      github,
      google,
    };
  },
};
</script>
