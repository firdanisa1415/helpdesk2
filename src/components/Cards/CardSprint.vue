<template>
  <div class="w-full px-4 mt-2">
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded" v-for="sprint in sprints" :key="sprint.id_sprint">
      <div class="flex justify-between px-10">
        <h2 class="font-bold">
          {{ sprint.id_sprint }}
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-orange-200 uppercase last:mr-0 mr-1" v-if="sprint.tanggal_mulai && sprint.tanggal_akhir !== null"> Running </span>
          <!-- <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1" v-if="badgeText"> Closed </span> -->
        </h2>
        <div>
          <select class="text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-20 ease-linear transition-all duration-150" v-model="sprint.selectedStoryId" @change="updateSelectedStory(sprint)">
            <option v-for="story in storiess" :key="story.id_story" :value="story.id_story">{{ story.id_story }}</option>
          </select>
          <button
            class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
            type="button"
            id="delete"
            @click="handleShowDeleteModal(sprint)"
          >
            <i class="fas fa-trash text-white" style="font-size: 15px"></i>
          </button>
        </div>
      </div>
      <small>{{ sprint.tanggal_mulai }} - {{ sprint.tanggal_akhir }}</small>
      <draggable
        :class="`list-group kanban-column ${sprint.id_sprint}`"
        :move="(event) => onMove(event)"
        @end="(event) => $emit('handleDragEnd', event, stories, sprint.id_sprint)"
        :list="sprint.stories"
        group="stories"
        :key="sprint.id_sprint"
      >
        <div class="list-group-item rounded bg-blue-500 text-white p-2 mb-4 cursor-pointer" v-for="story in sprint.stories" :key="story.id_story" @click="handleShowDetail(story)">{{ story.id_story }} - {{ story.isi_story }}</div>
      </draggable>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg">
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
                    {{ this.showStory(selectedItem?.id_story)?.sprint?.id_sprint }}
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
              <li v-for="tugas in tugas" :key="tugas.id_tugas">
                {{ tugas.isi_tugas }}
              </li>
            </ul>
            <button @click="showAddStoryForm = true">Tambah Tugas</button>
            <div v-if="showAddStoryForm">
              <form @submit.prevent="addTask(form)">
                <input
                  type="text"
                  v-model="inputValue.isi_tugas"
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
        <modal :show="deleteSprint">
          <template #header>
            <h3 class="text-2xl font-bold text-center">Hapus Sprint</h3>
          </template>
          <template #body>
            <div>
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="relative w-full mb-3 text-center">
                    <h5 class="font-semibold">Yakin ingin menghapus data epic</h5>
                    <h5 class="font-bold mb-6">{{ form?.id_sprint }}?</h5>
                    <button
                      class="bg-blue-300 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                      @click="deleteSprint = false"
                    >
                      Batal
                    </button>
                    <button
                      class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-2 ease-linear transition-all duration-150"
                      @click="deleteSprintData(form)"
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
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import Modal from "@/components/Modal/ModalDetail.vue";
import { mapActions } from "vuex";

export default {
  components: {
    draggable: VueDraggableNext,
    Modal,
  },
  data: () => ({
    detailStory: false,
    selectedItem: null,
    stories: [],
    inputValue: {},
    showAddStoryForm: false,
    runSprint: false,
    selectedSprint: [],
    selectedStoryId: null,
    deleteSprint: false,
    form: {},
  }),
  props: {
    sprints: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateStory", "getAllTask", "deleteSprints"]),
    onMove(event) {
      this.stories = event.relatedContext.list;
    },
    showStory(story_id) {
      console.log(this.$store.state.story.storyList.find((story) => story.id_story === story_id));
      return this.$store.state.story.storyList.find((story) => story.id_story === story_id);
    },
    // currentDateTimestamp() {
    //   return new Date().getTime();
    // },
    handleShowDetail(item) {
      this.detailStory = true;
      this.selectedItem = item;
      this.inputValue = this.selectedItem.tugas;
    },
    handleShowDeleteModal(item) {
      this.deleteSprint = true;
      // this.selectedItem = item;
      this.form = { ...item };
    },
    deleteSprintData(item) {
      this.deleteSprint = true;
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
      this.deleteSprints(item.id_sprint)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Data Berhasil dihapus",
          });
          this.deleteSprint = false;
        })
        .catch(() => {
          Toast.fire({
            icon: "success",
            title: "Data Gagal dihapus",
          });
          this.deleteSprint = false;
        });
    },
    updateSelectedStory(item) {
      const selectedIdstory = item.selectedStoryId;
      this.selectedSprint = item;
      const updatedStory = { id_story: selectedIdstory, sprint_id: item.id_sprint };
      this.updateStory(updatedStory);
      this.sprints.forEach((sprint) => {
        if (sprint.id_sprint === item.id_sprint) {
          sprint.stories.push(this.showStory(selectedIdstory));
        }
      });
      console.log(updatedStory);
    },
    addStory(storyData) {
      if (!storyData) return;
      const submitData = {
        story_id: storyData.id_epic,
        ...this.inputValue,
      };
      this.createTugas(submitData)
        .then(() => {
          this.showAddStoryForm = false;
        })
        .catch((err) => {
          this.showAddStoryForm = false;
          const errorFromBe = err.response?.data?.message ?? {};
          const errorMessages = Object.entries(errorFromBe).length > 0 ? Object.values(errorFromBe).map((item) => item[0]) : [];
          console.log(errorMessages);
        });
    },
    handleClickRunSprint() {
      this.runSprint = true;
    },
    handleRunSprint(selectedSprint) {
      console.log(selectedSprint);
      const storyIndex = selectedSprint.stories.findIndex((story) => story.id_story === selectedSprint.id_story);
      console.log(storyIndex);
      // const run = selectedSprint.stories.filter(story => story.sprint_id === selectedSprint);
      // const selectedStory = run.find(story => story.id_story === selectedStoryId);
      if (storyIndex) {
        storyIndex.status = "open";
        this.updateStory(storyIndex);
        console.log(storyIndex);
      } else {
        console.log("Story not found in the selected sprint");
      }
    },
    storiesNull() {
      return this.$store.state.story.storyList.filter((story) => story.sprint_id === null);
    },

    submitEditStory() {
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

    // badgeText() {
    //   const today = new Date();
    //   const endDate = new Date(this.sprint.tanggal_akhir);

    // Periksa jika tanggal sekarang sudah terlewat dari tanggal akhir
    //   if (today > endDate) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  },
  computed: {
    storiess() {
      let storiesnull = [];
      this.$store.state.story.storyList.forEach((story) => {
        if (story.sprint_id === null) {
          storiesnull.push(story);
        }
      });
      return storiesnull;
    },
  },
};
</script>

<style>
/* light stylings for the kanban columns */
.kanban-column {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
