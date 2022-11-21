<template>
  <div class="overflow-x-auto relative sm:rounded-lg">
    <div class="text-center flex justify-end py-3">
    </div>

    <table class="w-full mb-5">
      <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col text-center" class="py-3 px-6">Nomor Ticket</th>
          <th scope="col " class="py-3 px-6">
            <div class="flex items-center text-center">
              Judul Pelaporan
              <a href="#"
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Inprogress</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div style="width: 40%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pen-square text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-trash text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Done</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                  <div style="width: 100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pen-square text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-trash text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Open</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                  <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pen-square text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-trash text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-center font-bold flex justify-center py-3">Tabel Manager</div>
    <div class="text-center flex justify-end py-3">
      <button class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
        Tambah Pelaporan
      </button>
    </div>

    <table class="w-full">
      <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col text-center" class="py-3 px-6">Nomor Ticket</th>
          <th scope="col " class="py-3 px-6">
            <div class="flex items-center text-center">
              Judul Pelaporan
              <a href="#"
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="py-4 px-6"><user-dropdown /></td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">In Progress</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div style="width: 50%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-emerald-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()"
              >
                <i class="fas fa-check-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="py-4 px-6"><user-dropdown /></td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Review</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
                  <div style="width: 80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-emerald-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-check-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-times-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="py-4 px-6">Budiman</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Open</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                  <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-emerald-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-check-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-times-circle text-white" style="font-size: 15px"></i>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-center font-bold flex justify-center mt-5 mb-5">Tabel Operator</div>
    <table class="w-full">
      <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col text-center" class="py-3 px-6">Nomor Ticket</th>
          <th scope="col " class="py-3 px-6">
            <div class="flex items-center text-center">
              Judul Pelaporan
              <a href="#"
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
                ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
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
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Done</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                  <div style="width: 100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-white font-bold text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                Detail
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">In Progress</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div style="width: 60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <router-link to="/auth/register">
              <button class="bg-blue-500 active:bg-white text-white font-bold text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                Detail
              </button>
            </router-link>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
          <td class="py-4 px-6">Service Laptop</td>
          <td class="py-4 px-6">Laptop rusak kipas</td>
          <td class="py-4 px-6">Incident</td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div class="flex items-center">
              <span class="mr-2">Open</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                  <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <MyModal />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import MyModal from "@/components/Modal/ModalDetail.vue"

export default {
  components: {
    UserDropdown,
    MyModal
  },
};
</script>
