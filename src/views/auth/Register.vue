<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <img src="@/assets/img/brand.png" alt="" width="150" height="50" class="text-center" />
              <h6 class="text-black text-sm font-bold">Isikan Keluhan Anda</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form  @submit.prevent="submitForm()">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Nama </label>
                <input type="text" 
                  v-model="form.nama"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                  placeholder="Nama" />
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Email </label>
                <input type="email" 
                  v-model="form.email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                  placeholder="Email" />
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"> No. Handphone </label>
                <input type="text" 
                  v-model="form.telepon"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                  placeholder="No. Handphone" />
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Subject </label>
                <textarea
                  v-model="form.subjek"
                  class="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 py-3" 
                  placeholder="Isikan Permasalahan Anda"></textarea>
              </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Lampiran
                    </label>
                    <input type="file" id="dropzoneFile" class="dropzoneFile" />
                  </div>
              <div class="text-center mt-6">
                <button
                  class="bg-blue-500 text-white active:text-blue-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Kirim
                </button>
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

export default {
  data() {
    return {
      form : {},
    };
  },
  methods: {
    ...mapActions(['createGuest']),
    submitForm() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
      const submitData = {lampiran: "tes.png", ...this.form };
      this.createGuest(submitData)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Dikirim",
          });
        })
        .catch((err) => {
          const errorFromBe = err.response?.data?.message ?? {};
          /**
           * @todo ambil 1 error message dari BE, soalnya error store pelaporan BE sifatnya array.
           * @type string[];
           * @description perlu di mapping jadi array berisi string keterangan errornya.
           */
          const errorMessages =
            Object.entries(errorFromBe).length > 0
              ? Object.values(errorFromBe).map((item) => item[0])
              : [];
          console.log(errorMessages);
          Toast.fire({
            icon: "error",
            title: "Gagal Mengirim Data. " + errorMessages[0],
          });
        });
    },
  }
};
</script>
