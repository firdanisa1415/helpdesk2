<template>
  <div>
    <div class="pb-4 flex justify-end">
      <button
        class="bg-blue-500 mt-16 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Pelaporan"
        @click="handleClickCreatePelaporan"
      >
        Tambah Pelaporan
      </button>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div>
        <modal :show="modalPelaporan">
          <template #header>
            <h3 class="text-2xl font-bold text-center">
              {{ isEditPelaporan ? "Ubah" : "Tambah" }} Pelaporan
            </h3>
          </template>
          <template #body>
            <form
              @submit.prevent="
                isEditPelaporan ? submitEditForm() : submitForm()
              "
            >
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Judul Pelaporan
                    </label>
                    <input
                      type="text"
                      v-model="form.judul_pelaporan"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Isikan Pelaporan"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      for="countries"
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >Product</label
                    >
                    <select
                      id="divisi"
                      v-model="form.jenis_product"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option>--Pilih Product--</option>
                      <option>PC/Laptop</option>
                      <option>Printer</option>
                      <option>Jaringan/Internet</option>
                      <option>My PDS</option>
                      <option>Humanis</option>
                      <option>Penarikan Data</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Permasalahan
                    </label>
                    <input
                      type="text"
                      v-model="form.isi_pelaporan"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Jelaskan Permasalahan"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Harapan
                    </label>
                    <input
                      type="text"
                      v-model="form.harapan"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Tuliskan Harapanmu"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      for="countries"
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >PIC Pelaporan</label
                    >
                    <select
                      id="divisi"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option>--Pilih PIC Pelaporan--</option>
                      <option>Budi</option>
                      <option>Bambang</option>
                      <option>Joko</option>
                    </select>
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Lampiran
                    </label>
                    <input type="file" id="dropzoneFile" class="dropzoneFile" />
                  </div>
                </div>
                <button
                  class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="modalPelaporan = false"
                  type="button"
                >
                  Batal
                </button>
                <button
                  class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  {{ isEditPelaporan ? "Simpan" : "Tambah" }}
                </button>
              </div>
            </form>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="detailPelaporan">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Detail Pelaporan</h3>
          </template>
          <template #body>
            <div>
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <h5>
                      {{ form?.id_pelaporan }}
                    </h5>
                    <h5>
                      {{ form?.judul_pelaporan }}
                    </h5>
                  </div>
                  <button
                    class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    @click="addPelaporan = false"
                    type="button"
                  >
                    Batal
                  </button>
                  <button
                    class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Tambah
                  </button>
                </div>

                <!-- Buttons -->
                <button
                  class="bg-blue-900 text-black active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="detailPelaporan = false"
                >
                  Tutup
                </button>
              </div>
            </div>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="deletePelaporan">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Hapus Pelaporan</h3>
          </template>
          <template #body>
            <div>
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <h5>
                      Yakin ingin menghapus data pelaporan
                      {{ form?.id_pelaporan }}? Data yang sudah dihapus tidak
                      dapat dikembalikan
                    </h5>
                  </div>
                </div>

                <!-- Buttons -->
                <button
                  class="bg-gray-600 text-black active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="deletePelaporan = false"
                >
                  Batal
                </button>
                <button
                  class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="deletePelaporanData(form)"
                >
                  Hapus
                </button>
              </div>
            </div>
          </template>
        </modal>
      </div>
      <table class="w-full mb-5 overflow-x-auto relative">
        <thead
          class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Nomor Ticket</th>
            <th class="py-3 px-6">Judul Pelaporan</th>
            <th class="py-3 px-6">Isi Pelaporan</th>
            <th class="py-3 px-6">Jenis Product</th>
            <th class="py-3 px-6">Harapan</th>
            <th class="py-3 px-6">Status</th>
            <th class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in reports"
            :key="item.id_pelaporan"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item?.id_pelaporan }}
            </th>
            <td class="py-4 px-6">{{ item?.judul_pelaporan }}</td>
            <td class="py-4 px-6">{{ item?.isi_pelaporan }}</td>
            <td class="py-4 px-6">{{ item?.jenis_product }}</td>
            <td class="py-4 px-6">{{ item?.harapan }}</td>
            <td class="py-4 px-6">{{ item?.status }}</td>
            <td>
              <div class="flex space-x-2 justify-center px-6">
                <button
                  class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="detail"
                  @click="handleShowDetail(item)"
                >
                  <i
                    class="fas fa-info-circle text-white"
                    style="font-size: 15px"
                  ></i>
                </button>
                <button
                  class="bg-blue-300 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="update"
                  @click="handleSelectedData(item)"
                >
                  <i
                    class="fas fa-pen-square text-white"
                    style="font-size: 15px"
                  ></i>
                </button>
                <button
                  class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="delete"
                  @click="handleShowDeleteModal(item)"
                >
                  <i
                    class="fas fa-trash text-white"
                    style="font-size: 15px"
                  ></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal/ModalDetail.vue";
import { mapActions } from "vuex";
export default {
  name: "DataPelaporan",
  components: {
    Modal,
  },
  data: () => ({
    form: {},
    modalPelaporan: false,
    detailPelaporan: false,
    deletePelaporan: false,
    isEditPelaporan: false,
    //  };
    dt: {
      column: [
        "Nomor Ticket",
        "Judul Pelaporan",
        "Jenis Product",
        "Harapan",
        "Status",
      ],
      action: [
        {
          text: "Detail",
          color: "primary",
        },
        {
          text: "Ubah",
          color: "warning",
        },
        {
          text: "Hapus",
          color: "danger",
        },
      ],
    },
  }),
  methods: {
    ...mapActions([
      "getAllReports",
      "deleteReport",
      "createReport",
      "updateReport",
    ]),
    handleShowDetail(item) {
      this.detailPelaporan = true;
      this.form = { ...item };
    },
    handleShowDeleteModal(item) {
      this.deletePelaporan = true;
      this.isEditPelaporan = true;
      this.form = { ...item };
    },
    handleClickCreatePelaporan() {
      this.modalPelaporan = true;
      this.isEditPelaporan = false;
    },
    deletePelaporanData(item) {
      this.deletePelaporan = true;
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
      if (!item) return;
      this.deleteReport(item.id_pelaporan)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil dihapus",
          });
          this.deletePelaporan = false;
        })
        .catch(() => {
          Toast.fire({
            icon: "success",
            title: "Data Gagal dihapus",
          });
          this.deletePelaporan = false;
        });
    },
    submitEditForm() {
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
      /**
       * @todo sementara aku spread dulu isian form dari input sama inputan hardcode (status & lampiran)
       * @type `Object`
       */
      const submitData = { ...this.form };
      this.updateReport(submitData)
        .then(() => {
          this.modalPelaporan = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Diubah",
          });
        })
        .catch((err) => {
          console.log(err);
          this.modalPelaporan = false;
          Toast.fire({
            icon: "error",
            title: "Data Gagal Diubah",
          });
        });
    },
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
      /**
       * @todo sementara aku spread dulu isian form dari input sama inputan hardcode (status & lampiran)
       * @type `Object`
       */
      const submitData = { status: "open", lampiran: "tes.png", ...this.form };
      this.createReport(submitData)
        .then(() => {
          this.modalPelaporan = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Ditambahkan",
          });
        })
        .catch((err) => {
          this.modalPelaporan = false;
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
            title: "Gagal menambahkan data. " + errorMessages[0],
          });
        });

      // console.log(this.form);
    },
    handleSelectedData(item) {
      this.modalPelaporan = true;
      this.isEditPelaporan = true;
      console.log(item);
      this.form = {
        id_pelaporan: item.id_pelaporan,
        judul_pelaporan: item.judul_pelaporan,
        isi_pelaporan: item.isi_pelaporan,
        harapan: item.harapan,
        jenis_product: item.jenis_product,
        status: item.status,
        lampiran: item.lampiran,
        // tanggal_mulai: item.tanggal_mulai,
        // tanggal_selesai: item.tanggal_selesai,
        // ...item,
      };
    },
    clearForm() {
      if (this.isEditPelaporan === false && this.modalPelaporan === true) {
        this.form = {};
      }
    },
  },
  computed: {
    reports() {
      return this.$store.state.report.reportList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllReports");
    console.log(this.reports);
    console.log(this.form);
  },
  watch: {
    modalPelaporan: {
      handler() {
        this.clearForm();
      },
      immediate: true,
    },
  },
  // setup() {
  //   let dropzoneFile = ref("");
  //   const drop = (e) => {
  //     dropzoneFile.value = e.dataTransfer.files[0];
  //   };
  //   const selectedFile = () => {
  //     dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
  //   };
  //   return { dropzoneFile, drop, selectedFile };
  // },
};
</script>