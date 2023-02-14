<template>
  <div class="flex flex-wrap ">
    <div class="w-full lg:w-3/12 px-4 mt-16">
      <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
        <h2 class="text-blueGray-700 text-xl font-semibold">Open</h2>
        <draggable class="list-group kanban-column" :list="stories" group="tasks">
          <div class="list-group-item" v-for="element in stories" :key="element.id_story">
            {{ element.id_story }}
          </div>
        </draggable>
        <!-- <draggable class="text-blueGray-700 rounded kanban-column">
          <div>
            <ul>
              <li v-for="item in stories" :key="item.id_story" class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
            {{item.isi_story }}>
              </li>
            </ul>
          </div>
        </draggable> -->
      </div>
    </div>
    <div class="w-full lg:w-3/12 px-4 mt-16">
      <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
        <h2 class="text-blueGray-700 text-xl font-semibold">In Progress</h2>
        <draggable class="text-white font-bold rounded kanban-column" :list="arrInProgress" group="tasks">
          <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>

    <div class="w-full lg:w-3/12 px-4 mt-16">
      <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
        <h2 class="text-blueGray-700 text-xl font-semibold">Testing</h2>
        <draggable class="list-group kanban-column" :list="arrTested" group="tasks">
          <div class="list-group-item" v-for="element in arrTested" :key="element.name">
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>

    <div class="w-full lg:w-3/12 px-4 mt-16">
      <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
        <h2 class="text-blueGray-700 text-xl font-semibold">Done</h2>
        <draggable class="list-group kanban-column" :list="arrDone" group="tasks">
          <div class="list-group-item" v-for="element in arrDone" :key="element.name">
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "kanban-board",
  components: {
    //import draggable as a component
    draggable: VueDraggableNext,
  },
  methods: {
    ...mapActions(["getAllStories"]),
  },
  computed: {
    stories() {
      return this.$store.state.story.storytList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllStories");
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