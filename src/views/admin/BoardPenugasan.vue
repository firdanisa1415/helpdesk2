<template>
  <div class="">
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <h2 class="text-blueGray-700 text-xl font-semibold">Open</h2>
            <div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listOne" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <h2 class="text-blueGray-700 text-xl font-semibold">In Progress</h2>
            <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listTwo" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full max-w-full flex-grow flex-1">
                <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">Review</h6>
                <h2 class="text-blueGray-700 text-xl font-semibold">Total orders</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full max-w-full flex-grow flex-1">
                <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">done</h6>
                <h2 class="text-blueGray-700 text-xl font-semibold">Total orders</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Penugasan 1",
          list: 1,
        },
        {
          id: 1,
          title: "Penugasan 2",
          list: 1,
        },
        {
          id: 2,
          title: "Penugasan 3",
          list: 2,
        },
      ],
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
  },
};
</script>

<style scoped>
.drop-zone {
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #0E73B9;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
