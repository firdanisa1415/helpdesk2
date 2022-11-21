<template>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" class="py-3 px-6">ID Pengguna</th>
            <th scope="col" class="py-3 px-6">
                Nama Pengguna
            </th>
            <th scope="col" class="py-3 px-6">
              NRP
            </th>
            <th scope="col" class="py-3 px-6">
              Divisi
            </th>
            <th scope="col" class="py-3 px-6">
              Role
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
            <td class="py-4 px-6">Sari</td>
            <td class="py-4 px-6">129043847</td>
            <td class="py-4 px-6">Pemasaran</td>
            <td class="py-4 px-6">Manager
            </td>
            <td class="py-4 px-6">
              <router-link to="/auth/register">
                <button class="bg-blue-500 active:bg-white text-xs px-4 py-2 font-bold  text-white rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                  Detail
                </button>
              </router-link>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
            <td class="py-4 px-6">Tejo</td>
            <td class="py-4 px-6">129043847</td>
            <td class="py-4 px-6">Keuangan</td>
            <td class="py-4 px-6">Karyawan
            </td>
            <td class="py-4 px-6">
              <router-link to="/auth/register">
                <button class="bg-blue-500 active:bg-white text-xs px-4 py-2 font-bold  text-white rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                  Detail
                </button>
              </router-link>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
            <td class="py-4 px-6">Dani</td>
            <td class="py-4 px-6">129763847</td>
            <td class="py-4 px-6">Teknologi dan informasi</td>
            <td class="py-4 px-6">Operator
            </td>
            <td class="py-4 px-6">
              <router-link to="/auth/register">
                <button class="bg-blue-500 active:bg-white text-xs px-4 py-2 font-bold  text-white rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                  Detail
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    components: {},
  };
  </script>
  