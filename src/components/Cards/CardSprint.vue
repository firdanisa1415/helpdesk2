<template>
  <div class="w-full px-4 mt-2">
    <!-- <div class="pb-2 flex justify-end">
      <button
        class="bg-orange-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Sprint"
        @click="handleClickRunSprint"
      >
        Run Sprint
      </button>
    </div> -->
    <div>
    </div>
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded" v-for="sprint in sprints" :key="sprint.id_sprint">
      <h2 class="font-bold">{{ sprint.id_sprint }}</h2>
      <!-- <small>{{ sprint.tanggal_mulai }} - {{ sprint.tanggal_akhir }}</small> -->
      <draggable 
        :class="`list-group kanban-column ${sprint.id_sprint}`" 
        :move="(event) => onMove(event)" 
        @end="(event) => $emit('handleDragEnd', event, stories[event.newIndex], sprint.id_sprint)" 
        :list="sprint.stories" 
        group="stories">
          <div 
            class="list-group-item rounded bg-blue-500 text-white p-2 mb-4 cursor-pointer" 
            v-for="story in sprint.stories" 
            :key="story.id_story"
            @click="handleShowDetail(story)"
            >
            {{ story.id_story }} - {{ story.isi_story }}
          </div>
      </draggable>
    </div>
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
      <h2 class="font-bold">Backlog</h2>
      <draggable>
        <div class="list-group bg-white mb-2 p-2"></div>
        <div class="list-group-item rounded bg-blue-500 text-white p-2 mb-4 cursor-pointer" v-for="story in storiesNull" :key="story.id_story" @click="handleShowDetail(story)">{{ story.id_story }} - {{ story.isi_story }}</div>
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
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nomor Ticket</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.id_story}}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Epic Story</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.epic_id}}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Sprint Story</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.sprint_id}}
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
                          {{ selectedItem?.isi_story }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
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
                  <hr class="my-2 border-blueGray-300" />
                  <h3 class="text-xs font-bold text-left mb-2">List Tugas</h3>
                  <ul>
                    <li v-for="tugas in tugas" :key="tugas.id_tugas">
                      {{ tugas.isi_tugas}}
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
    Modal
  },
  data: () => ({
      detailStory: false,
      selectedItem: null,
      stories: [],
      inputValue: {},
      showAddStoryForm: false,
      runSprint: false,
      selectedSprint: [],
      selectedStoryId: null
  }),
  props: {
    sprints: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateStory", "getAllTask"]),
    onMove(event) {
      this.stories = event.relatedContext.list;
    },
    handleShowDetail(item) {
      this.detailStory = true;
      this.selectedItem = item;
      this.inputValue = this.selectedItem.tugas;
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
      console.log(selectedSprint)
      const storyIndex = selectedSprint.stories.findIndex(story => story.id_story ===  selectedSprint.id_story);
      console.log(storyIndex)
      // const run = selectedSprint.stories.filter(story => story.sprint_id === selectedSprint);
      // const selectedStory = run.find(story => story.id_story === selectedStoryId);
      if (storyIndex) {
        storyIndex.status = "open";
        this.updateStory(storyIndex);
        console.log(storyIndex)
      } else {
        console.log("Story not found in the selected sprint");
      }
    },
    storiesNull() {
        return this.$store.state.story.storyList.filter(
          (story) => story.sprint_id === null
        );
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
