<template>
  <div>
    <div class="pb-4 flex justify-end">
      <button
        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Epic"
        @click="handleClickCreateEpic"
      >
        Tambah Epic
      </button>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div>
        <modal :show="modalEpic">
          <template #header>
            <h3 class="text-2xl font-bold text-center">{{ isEditEpic ? "Ubah" : "Tambah" }} Epic</h3>
          </template>
          <template #body>
            <form @submit.prevent="isEditEpic ? submitEditForm() : submitForm()">
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Judul Epic </label>
                    <input
                      type="text"
                      v-model="form.judul_epic"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Isikan Epic"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Isi Epic </label>
                    <input
                      type="text"
                      v-model="form.isi_epic"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Jelaskan Gagasan Anda"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-4">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Harapan </label>
                    <input
                      type="text"
                      v-model="form.harapan"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Tuliskan Harapan Anda"
                    />
                  </div>
                  <button
                    class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    @click="modalEpic = false"
                    type="button"
                  >
                    Batal
                  </button>
                  <button class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-2 ease-linear transition-all duration-150" type="submit">
                    {{ isEditEpic ? "Simpan" : "Tambah" }}
                  </button>
                </div>
              </div>
            </form>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="detailEpic">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Detail Epic</h3>
          </template>
          <template #body>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nomor Ticket</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ form?.id_epic }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Epic</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ form?.judul_epic }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Isi Epic</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ form?.isi_epic }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Harapan</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ form?.harapan }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product Owner</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ form?.status }}
                  </h2>
                </div>
              </div>
            </div>
            <hr class="my-2 border-blueGray-300" />
            <h3 class="text-xs font-bold text-left mb-2">List Story</h3>
            <ul>
              <div class="relative w-full mb-3 bg-blueGray-200 text-blue-500 p-2 font-semibold shadow-md rounded flex justify-between" v-for="story in epics.find((epic) => form?.id_epic === epic.id_epic).stories" :key="story.id_story">
                <div @click="handleShowDetailStory(story)">{{ story.id_story }} - {{ story.isi_story }}</div>
                <!-- <button @click="handleShowDeleteStoryModal(story)"><i class="fas fa-pen text-blue-500" style="font-size: 15px; align-self: flex-end"></i></button> -->
                <button @click="handleShowDeleteStoryModal(story)"><i class="fas fa-trash text-red-600 ml-2" style="font-size: 15px; align-self: flex-end"></i></button>
              </div>
            </ul>
            <button @click="showAddStoryForm = true">Tambah Story</button>
            <div v-if="showAddStoryForm">
              <form @submit.prevent="addStory(form)">
                <input
                  type="text"
                  v-model="inputValue.isi_story"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Isikan Story"
                />
                <button type="submit">Tambahkan</button>
              </form>
            </div>
            <div class="text-center mt-2">
              <button
                class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                @click="detailEpic = false"
              >
                Oke
              </button>
            </div>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="deleteEpic">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Hapus Epic</h3>
          </template>
          <template #body>
            <div>
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3 text-center">
                    <h5 class="font-semibold">Yakin ingin menghapus data epic</h5>
                    <h5 class="font-bold mb-6">{{ form?.id_epic }}?</h5>
                    <button
                      class="bg-blue-300 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                      @click="deleteEpic = false"
                    >
                      Batal
                    </button>
                    <button
                      class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-2 ease-linear transition-all duration-150"
                      @click="deleteEpicData(form)"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="detailStory">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Detail Story</h3>
          </template>
          <template #body>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nomor Ticket</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ selectedItem?.id_story }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Epic Story</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ selectedItem?.epic_id }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Sprint Story</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ selectedItem?.sprint_id }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Isi Story</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ selectedItem?.isi_story }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-3/12">
                <div class="relative w-full mb-3">
                  <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</h2>
                </div>
              </div>
              <div class="lg:w-9/12">
                <div class="relative w-full mb-3">
                  <h2 class="block text-black text-xs font-reguler mb-2">
                    {{ selectedItem?.status }}
                  </h2>
                </div>
              </div>
            </div>
            <!-- <hr class="my-2 border-blueGray-300" />
            <h3 class="text-xs font-bold text-left mb-2">List Tugas</h3>
            <ul>
              <li v-for="tugas in stories.find((story) => selectedItem?.id_story === story.id_story).task" :key="tugas.id_tugas">
              {{ tugas.isi_tugas }}
              </li>
            </ul>
            <button @click="showAddTaskForm = true">Tambah Tugas</button>
            <div v-if="showAddTaskForm">
              <form @submit.prevent="addTask(form)">
                <input
                  type="text"
                  v-model="taskValue.isi_tugas"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Isikan Tugas"
                />
                <button type="submit">Tambahkan</button>
              </form>
            </div> -->
            <div class="text-center mt-2">
              <button
                class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                @click="detailStory = false"
              >
                Oke
              </button>
            </div>
          </template>
        </modal>
      </div>
      <div>
        <modal :show="deleteStory">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Hapus Story</h3>
          </template>
          <template #body>
            <div>
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3 text-center">
                    <h5 class="font-semibold">Yakin ingin menghapus data Story</h5>
                    <h5 class="font-bold mb-6">{{ inputValue?.id_story }}?</h5>
                    <button
                      class="bg-blue-300 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                      @click="deleteStory = false"
                    >
                      Batal
                    </button>
                    <button
                      class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-2 ease-linear transition-all duration-150"
                      @click="deleteStoryData(form)"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </modal>
      </div>
      <table class="w-full mb-5 overflow-x-auto relative">
        <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
          <tr class="w-full">
            <th class="py-3 px-6">Nomor Epic</th>
            <th class="py-3 px-6">Judul Epic</th>
            <th class="py-3 px-6">Isi Epic</th>
            <th class="py-3 px-6">Deskripsi</th>
            <th class="py-3 px-6">Product Owner</th>
            <th class="py-3 px-6">Total Story</th>
            <th class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <draggable tag="tbody">
          <tr v-for="item in epics" :key="item.id_epic" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item?.id_epic }}
            </th>
            <td class="py-4 px-6">{{ item?.judul_epic }}</td>
            <td class="py-4 px-6">{{ item?.isi_epic }}</td>
            <td class="py-4 px-6">{{ item?.harapan }}</td>
            <td class="py-4 px-6">{{ item?.user.nama_karyawan }}</td>
            <td class="py-4 px-6">{{ item?.story_count }}</td>
            <td>
              <div class="flex space-x-2 justify-center py-4 px-6">
                <button
                  class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="detail1"
                  @click="handleShowDetail(item)"
                >
                  <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
                </button>
                <button
                  class="bg-blue-300 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="update"
                  @click="handleSelectedData(item)"
                >
                  <i class="fas fa-pen-square text-white" style="font-size: 15px"></i>
                </button>
                <button
                  class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="delete"
                  @click="handleShowDeleteModal(item)"
                >
                  <i class="fas fa-trash text-white" style="font-size: 15px"></i>
                </button>
              </div>
            </td>
          </tr>
        </draggable>
      </table>
      <div></div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import Modal from "@/components/Modal/ModalDetail.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "DataEpic",
  components: {
    draggable: VueDraggableNext,
    Modal,
  },
  props: {
    story: Object,
  },
  data: () => ({
    form: {},
    modalEpic: false,
    detailEpic: false,
    detailStory: false,
    isEditEpic: false,
    deleteEpic: false,
    deleteStory: false,
    inputValue: {},
    taskValue: {},
    showAddStoryForm: false,
    showAddTaskForm: false,
    selectedIdEpic: 0,
    selectedItem: null,
  }),
  methods: {
    ...mapActions(["getAllEpics", "createEpic", "updateEpic", "deleteEpics", "createStory", "deleteStories"]),
    handleShowDetail(item) {
      this.detailEpic = true;
      this.form = { ...item };
    },
    handleShowDetailStory(item) {
      this.detailStory = true;
      this.selectedItem = item;
    },
    handleShowDeleteModal(item) {
      this.deleteEpic = true;
      this.isEditEpic = true;
      this.form = { ...item };
    },
    handleShowDeleteStoryModal(item) {
      this.deleteStory = true;
      this.inputValue = { ...item };
    },
    handleClickCreateEpic() {
      this.modalEpic = true;
      this.isEditEpic = false;
    },
    deleteEpicData(item) {
      this.deleteEpic = true;
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
      this.deleteEpics(item.id_epic)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil dihapus",
          });
          this.deleteEpic = false;
        })
        .catch(() => {
          Toast.fire({
            icon: "success",
            title: "Data Gagal dihapus",
          });
          this.deleteEpic = false;
        });
    },
    deleteStoryData(item) {
      this.deleteStory = true;
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
      this.deleteStories(item.id_story)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil dihapus",
          });
          this.deleteStory = false;
        })
        .catch(() => {
          Toast.fire({
            icon: "success",
            title: "Data Gagal dihapus",
          });
          this.deleteStory = false;
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
      this.updateEpic(submitData)
        .then(() => {
          this.modalEpic = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Diubah",
          });
        })
        .catch((err) => {
          console.log(err);
          this.modalEpic = false;
          Toast.fire({
            icon: "error",
            title: "Data Gagal Diubah",
          });
        });
    },
    log(event) {
      console.log(event);
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

      const submitData = { status: "Sprint 1", ...this.form };
      this.createEpic(submitData)
        .then(() => {
          this.modalEpic = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Ditambahkan",
          });
        })
        .catch((err) => {
          this.modalEpic = false;
          const errorFromBe = err.response?.data?.message ?? {};
          /**
           * @todo ambil 1 error message dari BE, soalnya error store pelaporan BE sifatnya array.
           * @type string[];
           * @description perlu di mapping jadi array berisi string keterangan errornya.
           */
          const errorMessages = Object.entries(errorFromBe).length > 0 ? Object.values(errorFromBe).map((item) => item[0]) : [];
          console.log(errorMessages);
          Toast.fire({
            icon: "error",
            title: "Gagal menambahkan data. " + errorMessages[0],
          });
        });
    },
    addStory(epicData) {
      if (!epicData) return;
      const submitData = {
        epic_id: epicData.id_epic,
        ...this.inputValue,
      };
      this.createStory(submitData, epicData.id_epic)
        .then(() => {
          this.showAddStoryForm = false;
          this.$store.dispatch("getAllEpics");
        })
        .catch((err) => {
          this.showAddStoryForm = false;
          const errorFromBe = err.response?.data?.message ?? {};
          const errorMessages = Object.entries(errorFromBe).length > 0 ? Object.values(errorFromBe).map((item) => item[0]) : [];
          console.log(errorMessages);
        });
    },
    handleSelectedData(item) {
      this.modalEpic = true;
      this.isEditEpic = true;
      console.log(item);
      this.form = {
        id_epic: item.id_epic,
        judul_epic: item.judul_epic,
        isi_epic: item.isi_epic,
        harapan: item.harapan,
      };
    },
    clearForm() {
      if (this.isEditEpic === false && this.modalEpic === true) {
        this.form = {};
      }
    },
  },
  computed: {
    epics() {
      return this.$store.state.epic.epicList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllEpics");
  },
  watch: {
    modalEpic: {
      handler() {
        this.clearForm();
      },
      immediate: true,
    },
  },
});
</script>
