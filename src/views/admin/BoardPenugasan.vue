<template>
  <div class="">
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <h2 class="text-blueGray-700 text-xl font-semibold">Open</h2>
            <div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listOne" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="board" @click="detailPenugasanOpen">
                {{ item.title }}
              </div>
              <Teleport to="body">
                <modal :show="detailPenugasanOpen" @close="detailPenugasanOpen = false">
                  <template #header>
                    <h3 class="text-2xl font-bold text-center">Detail Penugasan</h3>
                  </template>
                  <template #body>
                    <div class="flex flex-wrap">
                      <div class="w-full px-4">
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
                    </div>
                  </template>
                  <template #footer>
                    <div class="text-center">
                      <button
                        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        @click="detailPenugasanOpen = false"
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
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <h2 class="text-blueGray-700 text-xl font-semibold">In Progress</h2>
            <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listTwo" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="board" @click="detailPenugasanProgress = true">
                {{ item.title }}
              </div>
              <Teleport to="body">
                <modal :show="detailPenugasanProgress" @close="detailPenugasanProgress = false">
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
                        @click="detailPenugasanProgress = false"
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
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <h2 class="text-blueGray-700 text-xl font-semibold">Review</h2>
            <div class="drop-zone" @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listThree" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="board" @click="detailPenugasanReview = true">
                {{ item.title }}
              </div>
              <Teleport to="body">
                <modal :show="detailPenugasanReview" @close="detailPenugasanReview = false">
                  <template #header>
                    <h3 class="text-2xl font-bold text-center">Detail Penugasan</h3>
                  </template>
                  <template #body>
                    <div class="flex flex-wrap">
                      <div class="w-full px-4">
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
                        <hr />
                        <div class="flex flex-wrap mt-2">
                          <div class="relative w-full mb-3">
                            <div class="todoapp">
                              <header class="header">
                                <h2 class="text-blueGray-700 text-xl font-semibold mb-2">Tasklist</h2>

                                <input
                                  class="border-1 px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Isikan Tugas Kamu"
                                  @keyup.enter="addTodo"
                                />
                              </header>

                              <div class="main" v-show="todos.length">
                                <ul class="todo-list">
                                  <li v-for="todo in filteredTodos" class="todo" :key="todo.id" :class="{ completed: todo.completed, editing: todo === editedTodo }">
                                    <div class="view">
                                      <input class="toggle mr-2" type="checkbox" v-model="todo.completed" />
                                      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                                      <button class="destroy" @click="removeTodo(todo)"></button>
                                    </div>
                                    <input
                                      v-if="todo === editedTodo"
                                      class="edit"
                                      type="text"
                                      v-model="todo.title"
                                      @vnode-mounted="({ el }) => el.focus()"
                                      @blur="doneEdit(todo)"
                                      @keyup.enter="doneEdit(todo)"
                                      @keyup.escape="cancelEdit(todo)"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <footer class="footer" v-show="todos.length">
                                <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">Clear completed</button>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #footer>
                    <div class="text-center">
                      <button
                        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        @click="detailPenugasanReview = false"
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
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
            <h2 class="text-blueGray-700 text-xl font-semibold">Done</h2>
            <div class="drop-zone" @drop="onDrop($event, 4)" @dragover.prevent @dragenter.prevent>
              <div v-for="item in listFour" :key="item.title" class="drag-el text-white font-bold rounded" draggable="true" @dragstart="startDrag($event, item)" id="board" @click="detailPenugasanDone = true">
                {{ item.title }}
              </div>
              <Teleport to="body">
                <modal :show="detailPenugasanDone" @close="detailPenugasanDone = false">
                  <template #header>
                    <h3 class="text-2xl font-bold text-center">Detail Penugasan</h3>
                  </template>
                  <template #body>
                    <div class="flex flex-wrap">
                      <div class="w-full px-4">
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
                        <div class="flex flex-wrap mb-5">
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
                        <hr />
                        <div class="flex flex-wrap mt-2">
                          <div class="relative w-full mb-3">
                            <div class="todoapp">
                              <header class="header">
                                <h2 class="text-blueGray-700 text-xl font-semibold mb-2">Tasklist</h2>

                                <input
                                  class="border-1 px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Isikan Tugas Kamu"
                                  @keyup.enter="addTodo"
                                />
                              </header>

                              <div class="main" v-show="todos.length">
                                <ul class="todo-list">
                                  <li v-for="todo in filteredTodos" class="todo" :key="todo.id" :class="{ completed: todo.completed, editing: todo === editedTodo }">
                                    <div class="view">
                                      <input class="toggle mr-2" type="checkbox" v-model="todo.completed" />
                                      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                                      <button class="destroy" @click="removeTodo(todo)"></button>
                                    </div>
                                    <input
                                      v-if="todo === editedTodo"
                                      class="edit"
                                      type="text"
                                      v-model="todo.title"
                                      @vnode-mounted="({ el }) => el.focus()"
                                      @blur="doneEdit(todo)"
                                      @keyup.enter="doneEdit(todo)"
                                      @keyup.escape="cancelEdit(todo)"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <footer class="footer" v-show="todos.length">
                                <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">Clear completed</button>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #footer>
                    <div class="text-center">
                      <button
                        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        @click="detailPenugasanDone = false"
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
        {
          id: 3,
          title: "Penugasan 4",
          list: 3,
        },
        {
          id: 4,
          title: "Penugasan 5",
          list: 4,
        },
      ],
      detailPenugasanOpen: false,
      detailPenugasanProgress: false,
      detailPenugasanReview: false,
      detailPenugasanDone: false,
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
    listFour() {
      return this.items.filter((item) => item.list === 4);
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
