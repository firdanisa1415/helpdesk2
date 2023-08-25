<template>
  <div>
    <div class="pb-4 flex justify-end">
      <button
        class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Sprint"
        @click="handleClickCreateSprint"
      >
        Tambah Sprint
      </button>
      <button
        class="bg-orange-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Sprint"
        @click="handleClickRunSprint"
      >
        Run Sprint
      </button>
    </div>
    <kanban-board :sprints="sprints" @handleDragEnd="handleDragEnd" :items="storyFilteredById()" :selectedItem="selectedItem" />
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div>
        <modal :show="modalRunningSprint">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Running Sprint</h3>
          </template>
          <template #body>
            <form @submit.prevent="submitEditForm()">
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> List Sprint </label>
                    <select class="text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.id_sprint">
                      <option value="" disable>Pilih Sprint</option>
                      <option v-for="sprint in sprints" :key="sprint.id_sprint" :value="sprint.id_sprint">{{ sprint.id_sprint }}</option>
                    </select>
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Tanggal Mulai </label>
                    <input
                      type="date"
                      v-model="form.tanggal_mulai"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div class="w-full px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Tanggal Berakhir </label>
                    <input
                      type="date"
                      v-model="form.tanggal_akhir"
                      class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div class="relative w-full text-center mt-4">
                  <button
                    class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                    @click="modalRunningSprint = false"
                    type="button"
                  >
                    Batal
                  </button>
                  <button
                    class="bg-orange-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-2 ease-linear transition-all duration-150"
                    type="submit"
                    @click="handleClickUpdateStatus()"
                  >
                    Running
                  </button>
                </div>
              </div>
            </form>
          </template>
        </modal>
      </div>
    </div>
  </div>
</template>
<script>
import KanbanBoard from "@/components/Cards/CardSprint.vue";
import { defineComponent } from "vue";
// import { VueDraggableNext } from "vue-draggable-next";
// import moment from "moment";
import { mapActions } from "vuex";
import Modal from "@/components/Modal/ModalDetail.vue";

export default defineComponent({
  name: "Data-story",
  components: {
    KanbanBoard,
    // draggable: VueDraggableNext,
    Modal,
  },
  data: () => ({
    selectedItem: null,
    runSprint: false,
    selectedSprint: null,
    form: {},
    modalRunningSprint: false,
  }),
  methods: {
    ...mapActions(["getAllSprint", "updateStory", "createSprint", "updateSprint"]),

    storyFilteredById(sprintId) {
      return this.storiesNotNull.filter((story) => story.sprint_id === sprintId);
    },
    // formatTanggal() {
    //   const inputDate = new Date(this.form.tanggal_mulai);
    //   const formattedDate = inputDate.toISOString().split("T")[0];
    //   this.form.tanggal_mulai = formattedDate;
    // },
    // formatTanggalAkhir() {
    //   const inputDate = new Date(this.form.tanggal_akhir);
    //   const formattedDate = inputDate.toISOString().split("T")[0];
    //   this.form.tanggal_akhir = formattedDate;
    // },
    // eslint-disable-next-line no-unused-vars
    handleDragEnd(event, stories, sprintId) {
      // const filteredStory = this.storyFilteredById(sprintId);
      // console.log(filteredStory);
      // console.log(story);
      // const targetSprint = event.from.className.split(" ")[2];
      // console.log(event);
      try {
        const story = stories[event.newIndex];
        const classNameSplitted = event.to.className.split(" ");
        const newSprint = classNameSplitted[2];
        console.log(newSprint);

        const updatedSprint = { ...story, sprint_id: newSprint };
        this.updateStory(updatedSprint);
        console.log(updatedSprint);
      } catch (error) {
        console.log("Cannot update story!");
      }
    },

    handleSelectedData(item) {
      this.modalStory = true;
      this.isEditStory = true;
      console.log(item);
      this.form = {
        id_story: item.id_story,
        judul_story: item.isi_story,
        epic_id: item.epic_id,
        sprint_id: item.sprint_id,
      };
    },
    clearForm() {
      if (this.isEditStory === false && this.modalStory === true) {
        this.form = {};
      }
    },

    handleClickCreateSprint() {
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

      this.createSprint()
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil Ditambahkan",
          });

          // Refresh the page
          this.$router.go(0);
        })
        .catch((err) => {
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

    handleClickUpdateStatus() {
      let sprintId = this.form.id_sprint;

      this.storiesNotNull.forEach((story) => {
        console.log(story);
        if (story.sprint_id === sprintId) {
          const updatedStory = { id_story: story.id_story, status: "open" };
          console.log(updatedStory);
          this.updateStory(updatedStory);
        }
      });
    },

    handleClickRunSprint() {
      this.modalRunningSprint = true;
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
      const submitData = {
        ...this.form,
      };
      console.log(submitData);
      this.updateSprint(submitData)
        .then(() => {
          this.modalRunningSprint = false;
          Toast.fire({
            icon: "success",
            title: "Sprint Berhasil Running",
          });

          // Refresh the page
          this.$router.go(0);
          // Akses sprint yang akan di running
          // let sprint = this.sprints.find((sprint) => sprint.id_sprint === submitData.id_sprint);

          // Dapatkan tanggal mulai dan tanggal akhir, convert to GMT+7
          // let tanggalMulai = new Date(`${sprint.tanggal_mulai} GMT+0700`).toUTCString();
          // let tanggalAkhir = sprint.tanggal_akhir;
          // console.log(tanggalMulai);

          // Jika tanggal mulai = null berarti sprint belum pernah di running
          // if (tanggalMulai === null) {

          // }

          // Jika tanggal mulai != null, tambahkan tulisan "Sprint Berjalan {tanggal_mulai - tanggal_akhir}" di sprint yang sedang berjalan
        })
        .catch((err) => {
          console.log(err);
          this.modalRunningSprint = false;
          Toast.fire({
            icon: "error",
            title: "Data Gagal Diubah",
          });
        });
    },
  },
  computed: {
    storiesNotNull() {
      return this.$store.state.story.storyList;
    },
    stories() {
      let storiesnull = [];
      this.$store.state.story.storyList.forEach((story) => {
        if (story.sprint_id === null) {
          storiesnull.push(story);
        }
      });
      return storiesnull;
    },
    sprints() {
      return this.$store.state.sprint.sprintList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllSprint");
    this.$store.dispatch("getStories");
  },
});
</script>
