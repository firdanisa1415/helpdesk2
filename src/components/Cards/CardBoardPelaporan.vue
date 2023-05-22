<template>
    <div class="w-full lg:w-3/12 px-4 mt-14">
      <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
        <h2 class="text-blueGray-700 text-xl font-semibold">{{ title }}</h2>
        <draggable
          :class="`list-group kanban-column ${status}`"
          @end="(event) => $emit('onDragEnd', event, event.draggedItem, status)"
          :list="items"
          group="report"
        >
          <div
            class="list-group-item rounded bg-blue-500 text-white p-2 mb-4 cursor-pointer"
            v-for="element in items"
            :key="element.id"
            @click="handleShowDetail(element)"
          >
            {{ element.id_pelaporan }} - {{ element.judul_pelaporan }}
          </div>
        </draggable>
      </div>
      <div class="overflow-x-auto relative sm:rounded-lg">
        <div>
          <modal :show="detailPelaporan">
            <template #header>
              <h3 class="text-2xl font-bold text-center">Detail Pelaporan</h3>
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
                          {{ selectedItem?.id_pelaporan}}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Pelaporan</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.judul_pelaporan}}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Jenis Produk</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.jenis_product}}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Isi Pelaporan</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.isi_pelaporan }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Harapan</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.harapan }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Klasifikasi</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.klasifikasi }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="lg:w-3/12 ">
                      <div class="relative w-full mb-3">
                        <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">PIC Pelaporan</h2>
                      </div>
                    </div>
                    <div class="lg:w-9/12">
                      <div class="relative w-full mb-3">
                        <h2 class="block text-black text-xs font-reguler mb-2">
                          {{ selectedItem?.nama_pic }}
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
                  <div class="text-center mt-2">
                        <button
                          class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          @click="detailPelaporan = false"
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
  </style>
    <script>
  import { defineComponent } from "vue";
  import { VueDraggableNext } from "vue-draggable-next";
  import Modal from "@/components/Modal/ModalDetail.vue";

  export default defineComponent({
    name: "card-boardpelaporan",
    components: {
      draggable: VueDraggableNext,
      Modal
    },
    data: () => ({
      detailPelaporan: false,
      selectedItem: null,
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
      handleShowDetail(item) {
      this.detailPelaporan = true;
      this.selectedItem = item;
    },
    },
  });
  </script>
  