<template>
  <div>
    <div class="pb-4 flex justify-end">
      <button
        class="bg-blue-500 mt-20 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        id="Pelaporan"
        @click="addPelaporan = true"
      >
        Tambah Pelaporan
      </button>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg">
      <div>
        <Teleport to="body">
          <modal :show="addPelaporan" @close="addPelaporan = false">
            <template #header>
              <h3 class="text-2xl font-bold text-center">Tambah Pelaporan</h3>
            </template>
            <template #body>
              <form @submit.prevent="submitForm">
                <div class="flex flex-wrap">
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Judul Pelaporan
                      </label>
                      <input
                        type="text"
                        v-model="form.judul_pelaporan"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Isikan Pelaporan"
                      />
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        for="countries"
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >Product</label
                      >
                      <select
                        id="divisi"
                        v-model="form.jenis_product"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option>--Pilih Product--</option>
                        <option>PC/Laptop</option>
                        <option>Printer</option>
                        <option>Jaringan/Internet</option>
                        <option>My PDS</option>
                        <option>Humanis</option>
                        <option>Penarikan Data</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Permasalahan
                      </label>
                      <input
                        type="text"
                        v-model="form.isi_pelaporan"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Jelaskan Permasalahan"
                      />
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Harapan
                      </label>
                      <input
                        type="text"
                        v-model="form.harapan"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Tuliskan Harapanmu"
                      />
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        for="countries"
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >PIC Pelaporan</label
                      >
                      <select
                        id="divisi"
                        class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option>--Pilih PIC Pelaporan--</option>
                        <option>Budi</option>
                        <option>Bambang</option>
                        <option>Joko</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Lampiran
                      </label>
                      <input
                        type="file"
                        id="dropzoneFile"
                        class="dropzoneFile"
                      />
                    </div>
                  </div>
                  <button
                    class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    @click="addPelaporan = false"
                  >
                    Batal
                  </button>
                  <button
                    class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Tambah
                  </button>
                </div>
              </form>
            </template>
          </modal>
        </Teleport>
      </div>
      <table class="w-full mb-5 overflow-x-auto relative">
        <thead
          class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Nomor Ticket</th>
            <th class="py-3 px-6">Judul Pelaporan</th>
            <th class="py-3 px-6">Isi Pelaporan</th>
            <th class="py-3 px-6">Jenis Product</th>
            <th class="py-3 px-6">Harapan</th>
            <th class="py-3 px-6">Status</th>
            <th class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in reports"
            :key="item.id_pelaporan"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item?.id_pelaporan }}
            </th>
            <td class="py-4 px-6">{{ item?.judul_pelaporan }}</td>
            <td class="py-4 px-6">{{ item?.isi_pelaporan }}</td>
            <td class="py-4 px-6">{{ item?.jenis_product }}</td>
            <td class="py-4 px-6">{{ item?.harapan }}</td>
            <td class="py-4 px-6">{{ item?.status }}</td>
            <td>
              <div class="flex space-x-2 justify-center px-6">
                <button
                  class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="detail"
                  @click="detailPelaporan = true"
                >
                  <i
                    class="fas fa-info-circle text-white"
                    style="font-size: 15px"
                  ></i>
                </button>
                <!-- Todo: Modal perlu diluar v-for, nanti bakal rekursif pemanggilannya -->
                <!-- <Teleport to="body">
              <modal :show="detailPelaporan" @close="detailPelaporan = false">
                <template #header>
                  <h3 class="text-2xl font-bold text-center">
                    Detail Pelaporan
                  </h3>
                </template>
                <template #body>
                  <div class="flex flex-wrap">
                    <div class="w-full px-4">
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-3/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >
                              Judul Pelaporan
                            </h2>
                          </div>
                        </div>
                        <div class="w-full lg:w-9/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block text-black text-xs font-reguler mb-2"
                            >
                              {{ item?.judul_pelaporan }}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-3/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >
                              Jenis Pelaporan
                            </h2>
                          </div>
                        </div>
                        <div class="w-full lg:w-9/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block text-black text-xs font-reguler mb-2"
                            >
                              {{ item?.isi_pelaporan }}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-3/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >
                              Product Pelaporan
                            </h2>
                          </div>
                        </div>
                        <div class="w-full lg:w-9/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block text-black text-xs font-reguler mb-2"
                            >
                              {{ item?.jenis_product }}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-3/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >
                              Permasalahan
                            </h2>
                          </div>
                        </div>
                        <div class="w-full lg:w-9/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block text-black text-xs font-reguler mb-2"
                            >
                              {{ item?.isi_pelaporan }}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap">
                        <div class="w-full lg:w-3/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >
                              Status
                            </h2>
                          </div>
                        </div>
                        <div class="w-full lg:w-9/12">
                          <div class="relative w-full mb-3">
                            <h2
                              class="block text-black text-xs font-reguler mb-2"
                            >
                              {{ item?.status }}
                            </h2>
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
                      @click="detailPelaporan = false"
                    >
                      Oke
                    </button>
                  </div>
                </template>
              </modal>
            </Teleport> -->
                <button
                  class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="update"
                  @click="updatePelaporan = true"
                >
                  <i
                    class="fas fa-pen-square text-white"
                    style="font-size: 15px"
                  ></i>
                </button>
                <!-- <Teleport to="body">
              <modal :show="updatePelaporan" @close="updatePelaporan = false">
                <template #header>
                  <h3 class="text-2xl font-bold text-center">
                    Update Data Pelaporan
                  </h3>
                </template>
                <template #body>
                  <form>
                    <div class="flex flex-wrap">
                      <div class="w-full px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Judul Pelaporan
                          </label>
                          <input
                            type="text"
                            class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Isikan Pelaporan"
                          />
                        </div>
                      </div>
                      <div class="w-full px-4">
                        <div class="relative w-full mb-3">
                          <label
                            for="countries"
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >Product</label
                          >
                          <select
                            id="divisi"
                            class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option>--Pilih Product--</option>
                            <option>PC/Laptop</option>
                            <option>Printer</option>
                            <option>Jaringan/Internet</option>
                            <option>My PDS</option>
                            <option>Humanis</option>
                            <option>Penarikan Data</option>
                            <option>Lainnya</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-full px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Permasalahan
                          </label>
                          <input
                            type="text"
                            class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Jelaskan Permasalahan"
                          />
                        </div>
                      </div>
                      <div class="w-full px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Harapan
                          </label>
                          <input
                            type="text"
                            class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Tuliskan Harapanmu"
                          />
                        </div>
                      </div>
                      <div class="w-full px-4">
                        <div class="relative w-full mb-3">
                          <label
                            for="countries"
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >PIC Pelaporan</label
                          >
                          <select
                            id="divisi"
                            class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option>--Pilih PIC Pelaporan--</option>
                            <option>Budi</option>
                            <option>Bambang</option>
                            <option>Joko</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-full px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Lampiran
                          </label>
                          <input
                            type="file"
                            id="dropzoneFile"
                            class="dropzoneFile"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </template>
                <template #footer>
                  <div class="text-left">
                    <button
                      class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      @click="updatePelaporan = false"
                    >
                      Batal
                    </button>
                    <button
                      class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      @click="updatePelaporan = false"
                    >
                      Simpan
                    </button>
                  </div>
                </template>
              </modal>
            </Teleport> -->
                <button
                  class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="delete"
                  @click="deletePelaporan = true"
                >
                  <i
                    class="fas fa-trash text-white"
                    style="font-size: 15px"
                  ></i>
                </button>
                <!-- <Teleport to="body">
              <modal :show="deletePelaporan" @close="deletePelaporan = false">
                <template #header>
                  <h3 class="text-2xl font-bold text-center">
                    Delete Data Pelaporan
                  </h3>
                </template>
                <template #body>
                  <div class="relative w-full mb-3 text-center">
                    Apakah anda yakin ingin menghapus?
                  </div>
                </template>
                <template #footer>
                  <div class="text-center">
                    <button
                      class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-4 ease-linear transition-all duration-150"
                      @click="deletePelaporan = false"
                    >
                      Ya
                    </button>
                    <button
                      class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                      @click="deletePelaporan = false"
                    >
                      Tidak
                    </button>
                  </div>
                </template>
              </modal>
            </Teleport> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <div class="text-center font-bold flex justify-center py-3">
      Tabel Manager
    </div>
    <div class="text-center flex justify-end py-3">
      <button
        class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
      >
        Tambah Pelaporan
      </button>
    </div> -->

    <!-- <table class="w-full">
      <thead
        class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col text-center" class="py-3 px-6">Nomor Ticket</th>
          <th scope="col " class="py-3 px-6">
            <div class="flex items-center text-center">
              Judul Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              Isi Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              Jenis Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              PIC Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              Status Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              Action
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            012890
          </th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="py-4 px-6"><user-dropdown /></td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">In Progress</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                    style="width: 50%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button
                class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-info-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button
                class="bg-emerald-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                type="button"
                v-on:click="toggleModal()"
              >
                <i
                  class="fas fa-check-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            012890
          </th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="py-4 px-6"><user-dropdown /></td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">Review</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-orange-200"
                >
                  <div
                    style="width: 80%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button
                class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-info-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button
                class="bg-emerald-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-check-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button
                class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-times-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            012890
          </th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="py-4 px-6">Budiman</td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">Open</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200"
                >
                  <div
                    style="width: 30%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button
                class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-info-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button
                class="bg-emerald-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-check-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button
                class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                <i
                  class="fas fa-times-circle text-white"
                  style="font-size: 15px"
                ></i>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table> -->

    <!-- <div class="text-center font-bold flex justify-center mt-5 mb-5">
      Tabel Operator
    </div> -->
    <!-- <table class="w-full">
      <thead
        class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col text-center" class="py-3 px-6">Nomor Ticket</th>
          <th scope="col " class="py-3 px-6">
            <div class="flex items-center text-center">
              Judul Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              Isi Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              Jenis Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              Status Pelaporan
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
          <th scope="col text-center" class="py-3 px-6">
            <div class="flex items-center">
              Action
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  ></path></svg
              ></a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            012890
          </th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">Done</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                >
                  <div
                    style="width: 100%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button
                class="bg-blue-500 active:bg-white text-white font-bold text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                Detail
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            012890
          </th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">In Progress</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                >
                  <div
                    style="width: 60%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button
                class="bg-blue-500 active:bg-white text-white font-bold text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                Detail
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            012890
          </th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">Open</span>
              <div class="relative w-full">
                <div
                  class="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200"
                >
                  <div
                    style="width: 30%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6"></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import Modal from "@/components/Modal/ModalDetail.vue";
import { ref } from "vue";
import { mapActions } from "vuex";

export default {
  components: {
    Modal,
  },
  data: () => ({
    form: {
      judul_pelaporan: "",
      isi_pelaporan: "",
      jenis_product: "",
      harapan: "",
      status: "Open",
      lampiran: "s.png",
    },
    addPelaporan: false,
    detailPelaporan: false,
    updatePelaporan: false,
    deletePelaporan: false,
    //  };
    dt: {
      column: [
        "Nomor Ticket",
        "Judul Pelaporan",
        "Jenis Product",
        "Harapan",
        "Status",
      ],
      action: [
        {
          text: "Detail",
          color: "primary",
          // event: "detail-pakan",
        },
        {
          text: "Ubah",
          color: "warning",
          // event: "ubah-pakan",
        },
        {
          text: "Hapus",
          color: "danger",
          // event: "hapus-pakan",
        },
      ],
    },
  }),
  methods: {
    ...mapActions(["getAllReports", "createReport"]),
    submitForm() {
      this.createReport(this.form);
      console.log(this.form);
    },
  },
  computed: {
    reports() {
      return this.$store.state.report.reportList;
    },
  },
  mounted() {
    this.$store.dispatch("getAllReports");
    console.log(this.reports);
  },
  setup() {
    let dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    return { dropzoneFile, drop, selectedFile };
  },
};
</script>
