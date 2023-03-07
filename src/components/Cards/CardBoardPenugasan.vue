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
        >
          {{ element.id_story }} - {{ element.isi_story }}
        </div>
      </draggable>
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

export default defineComponent({
  name: "card-boardpenugasan",
  components: {
    draggable: VueDraggableNext,
  },
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
});
</script>
