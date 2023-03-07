<template>
  <div>
    <div class="pb-4 mt-2 flex justify-end">
      <button
        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Story"
        @click="handleClickCreateStory"
      >
        Tambah Sprint
      </button>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div>
          <modal :show="modalStory">
            <template #header>
              <h3 class="text-2xl font-bold text-center">{{ isEditStory ? "Ubah" : "Tambah" }} Story</h3>
            </template>
            <template #body>
              <form @submit.prevent="isEditStory ? submitEditForm() : submitForm()">
                <div class="flex flex-wrap">
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Isi Story
                      </label>
                      <input
                        type="text"
                        v-model="form.isi_story"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Isikan Story"
                      />
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Epic
                      </label>
                      <input
                        type="text"
                        v-model="form.epic_id"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Jelaskan Gagasan Anda"
                      />
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Sprint
                      </label>
                      <input
                        type="text"
                        v-model="form.sprint_id"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Tuliskan Harapan Anda"
                      />
                    </div>
                  </div>
                  <div class="relative w-full text-center mt-2">
                  <button
                    class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                    @click="modalStory = false"
                    type="button"
                  >
                    Batal
                  </button>
                  <button
                    class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-2 ease-linear transition-all duration-150"
                    type="submit"
                  >
                  {{ isEditStory ? "Simpan" : "Tambah" }}
                  </button>
                </div>
                </div>
              </form>
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
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nomor Ticket</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.id_story}}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Isi Story</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.isi_story}}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Epic</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.epic_id}}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="lg:w-3/12 ">
                    <div class="relative w-full mb-3">
                      <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Sprint</h2>
                    </div>
                  </div>
                  <div class="lg:w-9/12">
                    <div class="relative w-full mb-3">
                      <h2 class="block text-black text-xs font-reguler mb-2">
                        {{ form?.sprint_id }}
                      </h2>
                    </div>
                  </div>
                </div>
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
                    <h5 >
                      Yakin ingin menghapus data pelaporan
                    </h5>
                    <h5 class="font-bold mb-6">{{ form?.id_story }}?</h5>
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
          <th class="py-3 px-6">Nomor Story</th>
          <th class="py-3 px-6">Isi Story</th>
          <th class="py-3 px-6">Epic</th>
          <th class="py-3 px-6">Sprint</th>
          <th class="py-3 px-6">Nama Pelapor</th>
          <th class="py-3 px-6">Action</th>
        </tr>
      </thead>
      <draggable tag="tbody">
        <tr 
          v-for="item in stories" 
          :key="item.id_story" 
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
          <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item?.id_story }}
            </th>
            <td class="py-4 px-6">{{ item?.isi_story }}</td>
            <td class="py-4 px-6">{{ item?.epic.judul_epic }}</td>
            <td class="py-4 px-6">{{ item?.sprint_id }}</td>
            <td class="py-4 px-6">Budi</td>
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
    <div>
    </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import Modal from "@/components/Modal/ModalDetail.vue";
import { mapActions } from "vuex";
// import kanbanCard from "@/components/Cards/CardSprint.vue";

export default defineComponent({
  name: "Data-story",
  components: {
    draggable: VueDraggableNext,
    Modal,
    // 'kanban-card':kanbanCard,
  },
  data:() => ({
    form: {},
    modalStory: false,
    detailStory: false,
    isEditStory: false,
    deleteStory: false,
    //  };
  }),
  methods: {
    ...mapActions(["getAllStories", "createStory", "updateStory", "deleteStories",]),
    handleShowDetail(item) {
      this.detailStory = true;
      this.form = { ...item };
    },
    handleShowDeleteModal(item) {
      this.deleteStory = true;
      this.isEditStory = true;
      this.form = { ...item };
    },
    handleClickCreateStory() {
      this.modalStory = true;
      this.isEditStory = false;
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
      this.updateStory(submitData)
        .then(() => {
          this.modalStory = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Diubah",
          });
        })
        .catch((err) => {
          console.log(err);
          this.modalStory = false;
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

      const submitData = {...this.form };
      this.createStory(submitData)
        .then(() => {
          this.modalStory = false;
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Ditambahkan",
          });
        })
        .catch((err) => {
          this.modalStory = false;
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
    handleSelectedData(item) {
      this.modalStory = true;
      this.isEditStory = true;
      console.log(item);
      this.form = {
        id_story: item.id_story,
        isi_story: item.isi_story,
        epic_id: item.epic_id,
        sprint_id: item.sprint_id,
      };
    },
    clearForm() {
      if (this.isEditStory === false && this.modalStory === true) {
        this.form = {};
      }
    },
  },
  computed: {
    stories() {
      return this.$store.state.story.storyList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllStories");
    console.log(this.stories);
  },
  watch: {
    modalStory: {
      handler() {
        this.clearForm();
      },
      immediate: true,
    },
  },
});
</script>