<template>
  <div class="w-full lg:w-3/12 px-4 mt-14">
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
      <h2 class="text-blueGray-700 text-xl font-semibold">{{ title }}</h2>
      <draggable
        :class="`list-group kanban-column ${status}`"
        @end="(event) => $emit('onDragEnd', event, event.draggedItem, status)"
        :list="items"
        group="stories"
      >
        <div
          class="list-group-item rounded bg-blue-500 text-white p-2 mb-4 cursor-pointer"
          v-for="element in items"
          :key="element.id_story"
          @click="handleShowDetail(element)"
        >
          <h2>{{ element.id_story }} - {{ element.isi_story }}</h2>
          <small>{{ element.sprint_id }}</small>
        </div>
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
                  <button @click="showAddTaskForm = true">Tambah Tugas</button>
                  <div v-if="showAddTaskForm">
                    <form @submit.prevent="addTask(form)">
                      <input
                        type="text"
                        v-model="inputTask.isi_tugas"
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
<style scoped>
.list-group-item {
 
}
</style>
<script>
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import Modal from "@/components/Modal/ModalDetail.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "card-boardpenugasan",
  components: {
    draggable: VueDraggableNext,
    Modal
  },
  data: () => ({
      detailStory: false,
      selectedItem: null,
      showAddTaskForm: false,
      selectedIdstory: null,
      inputTask: {},
    }),
  props: {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["createTask"]),
      handleShowDetail(item) {
      this.detailStory = true;
      this.selectedItem = item;
    },
    addTask(storyData) {
      if (!storyData) return;
      const submitData = {
        story_id: storyData.id_story,
        ...this.inputTask,
      };
      this.createTask(submitData)
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
  },
});
</script>
