<template>
    <div class="overflow-x-auto relative sm:rounded-lg">
    <div class="text-center flex justify-end py-3">
        <button
        class="bg-emerald-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
      ><i class="fas fa-play text-white mr-4" style="font-size: 15px"></i>
        Mulai Sprint
      </button>
    </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div class="w-full">
            <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
              <h2 class="text-blueGray-700 text-xl font-semibold">Sprint 1</h2>
              <div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
                <div v-for="item in listOne" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="detail" @click="detailPenugasan = true">
                  {{ item.title }}
                </div>
                <Teleport to="body">
                  <modal :show="detailPenugasan" @close="detailPenugasan = false">
                    <template #header>
                      <h3 class="text-2xl font-bold text-center">Detail Penugasan</h3>
                    </template>
                    <template #body>
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-9/12 px-4">
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Penugasan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">Service Laptop</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Jenis Penugasan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">Incident</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product Penugasan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">PC/Laptop</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Permasalahan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">Laptop tiba-tiba mati, tapi kipas tetap berbunyi</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">In Progress</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="w-full lg:w-3/12 px-4">
                          <h3 class="text-xs font-bold text-center mb-2">Action</h3>
                          <div class="border-1 w-full bg-gray-200 text-lightBlue-400 font-bold uppercase text-xs px-2 py-2 mb-1 shadow hover:shadow-md outline ease-linear transition-all duration-150">
                            <i class="fas fa-check-square text-lightBlue-400 mr-4" style="font-size: 15px"></i>
                            Checklist
                          </div>
                          <div class="border-1 w-full bg-gray-200 text-lightBlue-400 font-bold uppercase text-xs px-2 py-2 shadow hover:shadow-md outline ease-linear transition-all duration-150">
                            <i class="fas fa-tag text-lightBlue-400 mr-4" style="font-size: 15px"></i>
                            Label
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #footer>
                      <div class="text-center">
                        <button
                          class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          @click="detailPenugasan = false"
                        >
                          Oke
                        </button>
                      </div>
                    </template>
                  </modal>
                </Teleport>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
              <h2 class="text-blueGray-700 text-xl font-semibold">Sprint 2</h2>
              <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
                <div v-for="item in listTwo" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="detail" @click="detailPenugasan = true">
                  {{ item.title }}
                </div>
                <Teleport to="body">
                  <modal :show="detailPenugasan" @close="detailPenugasan = false">
                    <template #header>
                      <h3 class="text-2xl font-bold text-center">Detail Penugasan</h3>
                    </template>
                    <template #body>
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-9/12 px-4">
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Penugasan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">Service Laptop</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Jenis Penugasan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">Incident</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product Penugasan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">PC/Laptop</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Permasalahan</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">Laptop tiba-tiba mati, tapi kipas tetap berbunyi</h2>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-full lg:w-4/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</h2>
                              </div>
                            </div>
                            <div class="w-full lg:w-8/12">
                              <div class="relative w-full mb-3">
                                <h2 class="block text-black text-xs font-reguler mb-2">In Progress</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="w-full lg:w-3/12 px-4">
                          <h3 class="text-xs font-bold text-center mb-2">Action</h3>
                          <div class="border-1 w-full bg-gray-200 text-lightBlue-400 font-bold uppercase text-xs px-2 py-2 mb-1 shadow hover:shadow-md outline ease-linear transition-all duration-150">
                            <i class="fas fa-check-square text-lightBlue-400 mr-4" style="font-size: 15px"></i>
                            Checklist
                          </div>
                          <div class="border-1 w-full bg-gray-200 text-lightBlue-400 font-bold uppercase text-xs px-2 py-2 shadow hover:shadow-md outline ease-linear transition-all duration-150">
                            <i class="fas fa-tag text-lightBlue-400 mr-4" style="font-size: 15px"></i>
                            Label
                          </div>
                        </div>
                      </div>
                    </template>
                    <template #footer>
                      <div class="text-center">
                        <button
                          class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          @click="detailPenugasan = false"
                        >
                          Oke
                        </button>
                      </div>
                    </template>
                  </modal>
                </Teleport>
              </div>
            </div>
          </div>
      </div>
      <hr />
      <div class="text-center flex justify-end py-3">
        <button
        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
      >
        Tambah Sprint
      </button>
    </div>
      <div class="w-full">
          <div class="relative w-full mb-3 bg-transparant p-4">
            <h2 class="text-blueGray-700 text-xl font-semibold">Backlog</h2>
            <div class="drop-zone" @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listThree" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="detail" @click="detailPenugasan = true">
                {{ item.title }}
              </div>
              <Teleport to="body">
                <modal :show="detailPenugasan" @close="detailPenugasan = false">
                  <template #header>
                    <h3 class="text-2xl font-bold text-center">Detail Penugasan</h3>
                  </template>
                  <template #body>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-9/12 px-4">
                        <div class="flex flex-wrap">
                          <div class="w-full lg:w-4/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Penugasan</h2>
                            </div>
                          </div>
                          <div class="w-full lg:w-8/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block text-black text-xs font-reguler mb-2">Service Laptop</h2>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap">
                          <div class="w-full lg:w-4/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Jenis Penugasan</h2>
                            </div>
                          </div>
                          <div class="w-full lg:w-8/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block text-black text-xs font-reguler mb-2">Incident</h2>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap">
                          <div class="w-full lg:w-4/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product Penugasan</h2>
                            </div>
                          </div>
                          <div class="w-full lg:w-8/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block text-black text-xs font-reguler mb-2">PC/Laptop</h2>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap">
                          <div class="w-full lg:w-4/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Permasalahan</h2>
                            </div>
                          </div>
                          <div class="w-full lg:w-8/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block text-black text-xs font-reguler mb-2">Laptop tiba-tiba mati, tapi kipas tetap berbunyi</h2>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap">
                          <div class="w-full lg:w-4/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</h2>
                            </div>
                          </div>
                          <div class="w-full lg:w-8/12">
                            <div class="relative w-full mb-3">
                              <h2 class="block text-black text-xs font-reguler mb-2">In Progress</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <h3 class="text-xs font-bold text-center mb-2">Action</h3>
                        <div class="border-1 w-full bg-gray-200 text-lightBlue-400 font-bold uppercase text-xs px-2 py-2 mb-1 shadow hover:shadow-md outline ease-linear transition-all duration-150">
                          <i class="fas fa-check-square text-lightBlue-400 mr-4" style="font-size: 15px"></i>
                          Checklist
                        </div>
                        <div class="border-1 w-full bg-gray-200 text-lightBlue-400 font-bold uppercase text-xs px-2 py-2 shadow hover:shadow-md outline ease-linear transition-all duration-150">
                          <i class="fas fa-tag text-lightBlue-400 mr-4" style="font-size: 15px"></i>
                          Label
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #footer>
                    <div class="text-center">
                      <button
                        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        @click="detailPenugasan = false"
                      >
                        Oke
                      </button>
                    </div>
                  </template>
                </modal>
              </Teleport>
            </div>
          </div>
        </div>
    </div>

  </template>
  
  <script>
  import Modal from "@/components/Modal/ModalDetail.vue";
  
  const STORAGE_KEY = "vue-todomvc";
  
  const filters = {
    all: (todos) => todos,
    active: (todos) => todos.filter((todo) => !todo.completed),
    completed: (todos) => todos.filter((todo) => todo.completed),
  };
  
  export default {
    components: {
      Modal,
    },
    data() {
      return {
        items: [
          {
            id: 0,
            title: "Penugasan 1",
            list: 3,
          },
          {
            id: 1,
            title: "Penugasan 2",
            list: 3,
          },
          {
            id: 2,
            title: "Penugasan 3",
            list: 3,
          },
          {
            id: 3,
            title: "Penugasan 4",
            list: 3,
          },
          {
            id: 4,
            title: "Penugasan 5",
            list: 3,
          },
        ],
        detailPenugasan: false,
        todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
        editedTodo: null,
        visibility: "all",
      };
    },
    computed: {
      listOne() {
        return this.items.filter((item) => item.list === 1);
      },
      listTwo() {
        return this.items.filter((item) => item.list === 2);
      },
      listThree() {
        return this.items.filter((item) => item.list === 3);
      },
      
      filteredTodos() {
        return filters[this.visibility](this.todos);
      },
      remaining() {
        return filters.active(this.todos).length;
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
      toggleAll(e) {
        this.todos.forEach((todo) => (todo.completed = e.target.checked));
      },
  
      addTodo(e) {
        const value = e.target.value.trim();
        if (!value) {
          return;
        }
        this.todos.push({
          id: Date.now(),
          title: value,
          completed: false,
        });
        e.target.value = "";
      },
  
      removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      },
  
      editTodo(todo) {
        this.beforeEditCache = todo.title;
        this.editedTodo = todo;
      },
  
      doneEdit(todo) {
        if (!this.editedTodo) {
          return;
        }
        this.editedTodo = null;
        todo.title = todo.title.trim();
        if (!todo.title) {
          this.removeTodo(todo);
        }
      },
  
      cancelEdit(todo) {
        this.editedTodo = null;
        todo.title = this.beforeEditCache;
      },
  
      removeCompleted() {
        this.todos = filters.active(this.todos);
      },
  
      onHashChange() {
        var visibility = window.location.hash.replace(/#\/?/, "");
        if (filters[visibility]) {
          this.visibility = visibility;
        } else {
          window.location.hash = "";
          this.visibility = "all";
        }
      },
    },
    watch: {
      todos: {
        handler(todos) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        },
        deep: true,
      },
    },
  
    mounted() {
      window.addEventListener("hashchange", this.onHashChange);
      this.onHashChange();
    },
  };
  </script>
  
  <style scoped>
  .drop-zone {
    margin-bottom: 10px;
    padding: 10px;
  }
  .drag-el {
    background-color: #0e73b9;
    margin-bottom: 10px;
    padding: 10px;
  }
  </style>
  