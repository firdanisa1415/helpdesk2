<template>
  <div>
    <div class="pb-2 flex justify-end">
      <button
        class="bg-orange-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Sprint"
        @click="handleClickRunSprint"
      >
        Run Sprint
      </button>
    </div>
    <kanban-board
      :sprints="sprints"
      @handleDragEnd="handleDragEnd"
      :items="reportFilteredByStatus()"
      :selectedItem="selectedItem"
    />
    <div class="pb-4 flex justify-end">
      <button
        class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Sprint"
        @click="handleClickCreateSprint"
      >
        Tambah Sprint
      </button>
    </div>
    <!-- <kanban-board :sprints="Backlog" 
    @handleDragEnd="handleDragEnd" 
    :items="reportFilteredByStatus('null')" 
    :selectedItem="selectedItem" /> -->
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
      <h2 class="font-bold">Backlog</h2>
      <draggable>
        <div class="list-group bg-white mb-2 p-2"></div>
        <div
          class="list-group-item rounded bg-blue-500 text-white p-2 mb-4 cursor-pointer"
          v-for="story in storiesNull"
          :key="story.id_story"
          @click="handleShowDetail(story)"
        >
          {{ story.id_story }} - {{ story.isi_story }}
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import KanbanBoard from "@/components/Cards/CardSprint.vue";
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { mapActions } from "vuex";
// import Modal from "@/components/Modal/ModalDetail.vue";

export default defineComponent({
  name: "Data-story",
  components: {
    KanbanBoard,
    draggable: VueDraggableNext,
    // Modal,
  },
  data: () => ({
    selectedItem: null,
    runSprint: false,
    selectedSprint: null,
  }),
  methods: {
    ...mapActions([
      "getAllSprint",
      "updateStory",
      "createSprint",
      "updateSprint",
    ]),

    reportFilteredByStatus(sprintId) {
      return this.stories.filter((story) => story.sprint_id === sprintId);
    },

    handleDragEnd() {
      const submitData = { ...this.form };
      this.createStory(submitData)
        .then(() => {
          this.modalStory = false;
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
          const errorMessages =
            Object.entries(errorFromBe).length > 0
              ? Object.values(errorFromBe).map((item) => item[0])
              : [];
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
            title: "Gagal menambahkan data. " + errorMessages[0],
          });
        });
    },
    handleClickRunSprint() {
      this.sprintUpdate = true;
    },
    handleRunSprint(id_sprint) {
      console.log(id_sprint);
      const selectedSprint = this.selectedSprint; // Ambil sprint yang dipilih
      const sprintStories = this.sprintStories[selectedSprint.id_sprint]; // Ambil semua story pada sprint yang dipilih

      // Jika sprint yang dipilih tidak memiliki story, tampilkan pesan kesalahan
      if (!sprintStories || sprintStories.length === 0) {
        alert("Tidak ada story pada sprint ini!");
        return;
      }

      // Ubah status setiap story menjadi Open
      sprintStories.forEach((story) => {
        story.status = "open";
      });

      // Tampilkan pesan berhasil dan tutup modal runsprint
      alert("Berhasil menjalankan sprint!");
      this.runSprint = false;
    },
  },
  computed: {
    stories() {
      return this.$store.state.story.storyList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllSprint");
    this.$store.dispatch("getStories");
  },
});
</script>
