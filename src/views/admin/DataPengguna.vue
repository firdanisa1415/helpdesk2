<template>
  <div>
    <div class="pb-4 flex justify-end">
      <button
        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Pelaporan"
        @click="handleClickCreatePengguna"
      >
        Tambah Pengguna
      </button>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div>
        <modal :show="modalPengguna">
          <template #header>
            <h3 class="text-2xl font-bold text-center">
              {{ isEditPengguna ? "Ubah" : "Tambah" }} Pengguna
            </h3>
          </template>
          <template #body>
            <form
              @submit.prevent="
                isEditPengguna ? submitEditForm() : submitForm()
              "
            >
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nama Karyawan
                    </label>
                    <input
                      type="text"
                      v-model="form.nama_karyawan"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Isikan Nama Karyawan"
                    />
                  </div>
                </div>
                </div>
                  <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      NRP
                    </label>
                    <input
                      type="text"
                      v-model="form.nrp"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Jelaskan Permasalahan"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Divisi
                    </label>
                    <input
                      type="text"
                      v-model="form.divisi_id"
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
                      >Role</label
                    >
                    <select
                      id="divisi"
                      v-model="form.role_id"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option>--Pilih Role--</option>
                      <option>Karyawan Umum</option>
                      <option>Operator</option>
                      <option>Manager</option>
                    </select>
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      v-model="form.email"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Tuliskan Harapanmu"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    >
                    Password
                    </label>
                    <input
                      type="password"
                      v-model="form.password"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Tuliskan Harapanmu"
                    />
                  </div>
                </div>
                <div class="relative w-full text-center mt-4">
                <button
                  class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="modalPengguna = false"
                  type="button"
                >
                  Batal
                </button>
                <button
                  class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  {{ isEditPengguna ? "Simpan" : "Tambah" }}
                </button>
              </div>
              </form>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="detailPengguna">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Detail Pengguna</h3>
          </template>
          <template #body>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">ID Karyawan</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.id}}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nama Karyawan</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.nama_karyawan}}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">NRP</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.nrp}}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Divisi</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.divisi.nama_divisi }}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Roles</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.roles.name }}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.email }}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-2">
                      <button
                        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        @click="detailPengguna = false"
                      >
                        Oke
                      </button>
                    </div>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="deletePengguna">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Hapus Pengguna</h3>
          </template>
          <template #body>
            <div>
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <h5>
                      Yakin ingin menghapus data pengguna
                      {{ form?.nama_karyawan }}? Data yang sudah dihapus tidak
                      dapat dikembalikan
                    </h5>
                  </div>
                </div>

                <!-- Buttons -->
                <button
                  class="bg-gray-600 text-black active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="deletePengguna = false"
                >
                  Batal
                </button>
                <button
                  class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  @click="deletePenggunaData(form)"
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
            <th class="py-3 px-6">ID Karyawan</th>
            <th class="py-3 px-6">Nama Karyawan</th>
            <th class="py-3 px-6">NRP</th>
            <th class="py-3 px-6">Divisi</th>
            <th class="py-3 px-6">Role</th>
            <th class="py-3 px-6">Email</th>
            <th class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in users"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item?.id }}
            </th>
            <td class="py-4 px-6">{{ item?.nama_karyawan }}</td>
            <td class="py-4 px-6">{{ item?.nrp }}</td>
            <td class="py-4 px-6">{{ item?.divisi.nama_divisi }}</td>
            <td class="py-4 px-6">{{ item?.roles.name }}</td>
            <td class="py-4 px-6">{{ item?.email }}</td>
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
  name: "DataPengguna",
  components: {
    Modal,
  },
  data: () => ({
    form: {},
    modalPengguna: false,
    detailPengguna: false,
    deletePengguna: false,
    isEditPengguna: false,
    }),
  methods: {
    ...mapActions([
      "getAllUser",
    ]),
    handleShowDetail(item) {
      this.detailPengguna = true;
      this.form = { ...item };
    },
    handleShowDeleteModal(item) {
      this.deletePengguna = true;
      this.isEditPengguna = true;
      this.form = { ...item };
    },
    handleClickCreatePengguna() {
      this.modalPengguna = true;
      this.isEditPengguna = false;
    },
    deletePenggunaData(item) {
      this.deletePengguna = true;
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
      this.deleteUser(item.id)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil dihapus",
          });
          this.deletePengguna = false;
        })
        .catch(() => {
          Toast.fire({
            icon: "success",
            title: "Data Gagal dihapus",
          });
          this.deletePengguna = false;
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
      this.updateUser(submitData)
        .then(() => {
          this.modalPengguna = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Diubah",
          });
        })
        .catch((err) => {
          console.log(err);
          this.modalPengguna = false;
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
      const submitData = { ...this.form };
      this.register(submitData)
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
      this.modalPengguna = true;
      this.isEditPengguna = true;
      console.log(item);
      this.form = {
        id: item.id,
        nama_karyawan: item.nama_karyawan,
        nrp: item.nrp,
        divisi_id: item.divisi_id,
        role_id: item.role_id,
        email: item.email,
        // tanggal_mulai: item.tanggal_mulai,
        // tanggal_selesai: item.tanggal_selesai,
        // ...item,
      };
    },
    clearForm() {
      if (this.isEditPengguna === false && this.modalPengguna === true) {
        this.form = {};
      }
    },
  },
  computed: {
    users() {
      return this.$store.state.user.users;
    },
  },
  mounted() {
    this.$store.dispatch("getAllUser");
    console.log(this.users);
    console.log(this.form);
  },
  watch: {
    modalPengguan: {
      handler() {
        this.clearForm();
      },
      immediate: true,
    },
  },
};
</script>