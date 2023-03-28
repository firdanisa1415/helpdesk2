<template>
  <div class="w-full px-4 mt-2">
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded" v-for="sprint in sprints" :key="sprint.id_sprint">
      <h2 class="font-bold">{{ sprint.id_sprint }}</h2>
      <draggable
        :class="`list-group kanban-column ${sprintId}`"
        @end="(event) => $emit('onDragEnd', event, event.draggedItem, sprintId)"
        :list="itemsFilteredBySprint(sprintId)"
        group="stories"
      >
        <div class="list-group-item rounded bg-blue-500 text-black p-2 mb-4 cursor-pointer" v-for="element in itemsFilteredBySprint(sprint.id_sprint)" :key="element.id_story">
          {{ element.isi_story }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    sprints: {
      type: Array,
      required: true,
    },
    sprintId: {
      type: String,
      required: true,
    },
  },
  methods: {
    itemsFilteredBySprint(sprintId) {
      return this.items.filter((item) => item.sprint_id === sprintId);
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
