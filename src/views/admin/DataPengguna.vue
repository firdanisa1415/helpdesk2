<template>
  <div class="overflow-x-auto relative sm:rounded-lg">
     <div class="text-center flex justify-end py-3">
       <button
         class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
         type="button"
         id="Pengguna"
         @click="addPengguna = true"
       >
         Tambah Pengguna
       </button>
       <Teleport to="body">
         <modal :show="addPengguna" @close="addPengguna = false">
           <template #header>
             <h3 class="text-2xl font-bold text-center">Tambah Pengguna</h3>
           </template>
           <template #body>
             <form>
               <div class="flex flex-wrap">
                 <div class="w-full px-4">
                   <div class="relative w-full mb-3">
                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Nama Pengguna </label>
                     <input
                       type="text"
                       class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                       placeholder="Isikan Nama Anda"
                     />
                   </div>
                 </div>
                 <div class="w-full px-4">
                   <div class="relative w-full mb-3">
                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> NRP </label>
                     <input
                       type="text"
                       class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                       placeholder="Isikan NRP"
                     />
                   </div>
                 </div>
                 <div class="w-full px-4">
                   <div class="relative w-full mb-3">
                     <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Divisi</label>
                     <select id="divisi" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                       <option>--Pilih Divisi--</option>
                       <option>Divisi Sumber Daya dan Umum</option>
                  <option>Divisi Operasional dan HSSE</option>
                  <option>Biro Satuan Pengawas Internal</option>
                  <option>Divisi Komersial dan Pemasaran</option>
                  <option>Divisi Asesmen, Pelatihan, dan Konsultasi</option>
                  <option>Pengadaan Barang dan Jasa</option>
                  <option>Divisi Teknologi dan Informasi</option>
                  <option>Divisi Keuangan</option>
                  <option>Biro Hukum dan Sekretaris Perusahaan</option>
                     </select>
                   </div>
                 </div>
                 <div class="w-full px-4">
                   <div class="relative w-full mb-3">
                     <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Role</label>
                     <select id="divisi" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                       <option>--Pilih Role--</option>
                       <option>Manager</option>
                       <option>Operator</option>
                       <option>Karyawan</option>
                     </select>
                   </div>
                 </div>
                 <div class="w-full px-4">
                   <div class="relative w-full mb-3">
                     <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Email Pengguna </label>
                     <input
                       type="email"
                       class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                       placeholder="Isikan Email Anda"
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
                 @click="addPengguna = false"
               >
                 Batal
               </button>
               <button
                 class="bg-emerald-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                 @click="addPengguna = false"
               >
                 Tambah
               </button>
             </div>
           </template>
         </modal>
       </Teleport>
     </div>
     <table class="w-full mb-5">
       <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
         <tr>
           <th scope="col text-center" class="py-3 px-6">Nomor Pengguna</th>
           <th scope="col " class="py-3 px-6">
             <div class="flex items-center text-center">
               Nama Pengguna
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
               NRP
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
               Divisi
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
               Role
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
           <td class="py-4 px-6">Jihan</td>
           <td class="py-4 px-6">sdm-0923738</td>
           <td class="py-4 px-6">Divisi Sumber Daya dan Umum</td>
           <td class="py-4 px-6">Karyawan Umum</td>
           <td class="py-4 px-6">
             <button
               class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
               type="button"
               id="detail"
               @click="detailPengguna = true"
             >
               <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
             </button>
             <Teleport to="body">
               <modal :show="detailPengguna" @close="detailPengguna = false">
                 <template #header>
                   <h3 class="text-2xl font-bold text-center">Detail Pengguna</h3>
                 </template>
                 <template #body>
                   <div class="flex flex-wrap">
                     <div class="w-full px-4">
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Pengguna</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">Service Laptop</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Jenis Pengguna</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">Incident</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product Pengguna</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">PC/Laptop</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Permasalahan</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">Laptop tiba-tiba mati, tapi kipas tetap berbunyi</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
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
                       @click="detailPengguna = false"
                     >
                       Oke
                     </button>
                   </div>
                 </template>
               </modal>
             </Teleport>
             <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button" id="update" @click="updatePengguna = true">
               <i class="fas fa-pen-square text-white" style="font-size: 15px"></i>
             </button>
             <Teleport to="body">
               <modal :show="updatePengguna" @close="updatePengguna = false">
                 <template #header>
                   <h3 class="text-2xl font-bold text-center">Update Data Pengguna</h3>
                 </template>
                 <template #body>
                   <form>
                     <div class="flex flex-wrap">
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Judul Pengguna </label>
                           <input
                             type="text"
                             class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                             placeholder="Isikan Pengguna"
                           />
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product</label>
                           <select id="divisi" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
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
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Permasalahan </label>
                           <input
                             type="text"
                             class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                             placeholder="Jelaskan Permasalahan"
                           />
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Harapan </label>
                           <input
                             type="text"
                             class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                             placeholder="Tuliskan Harapanmu"
                           />
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">PIC Pengguna</label>
                           <select id="divisi" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                             <option>--Pilih PIC Pengguna--</option>
                             <option>Budi</option>
                             <option>Bambang</option>
                             <option>Joko</option>
                           </select>
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Lampiran </label>
                           <input type="file" id="dropzoneFile" class="dropzoneFile" />
                         </div>
                       </div>
                     </div>
                   </form>
                 </template>
                 <template #footer>
                   <div class="text-left">
                     <button
                       class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                       @click="updatePengguna = false"
                     >
                       Batal
                     </button>
                     <button
                       class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                       @click="updatePengguna = false"
                     >
                       Simpan
                     </button>
                   </div>
                 </template>
               </modal>
             </Teleport>
             <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button" id="delete" @click="deletePengguna = true">
               <i class="fas fa-trash text-white" style="font-size: 15px"></i>
             </button>
             <Teleport to="body">
               <modal :show="deletePengguna" @close="deletePengguna = false">
                 <template #header>
                   <h3 class="text-2xl font-bold text-center">Delete Data Pengguna</h3>
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
                       @click="deletePengguna = false"
                     >
                       Ya
                     </button>
                     <button
                       class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                       @click="deletePengguna = false"
                     >
                       Tidak
                     </button>
                   </div>
                 </template>
               </modal>
             </Teleport>
           </td>
         </tr>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
           <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">012890</th>
           <td class="py-4 px-6">Jihan</td>
           <td class="py-4 px-6">sdm-0923738</td>
           <td class="py-4 px-6">Divisi Sumber Daya dan Umum</td>
           <td class="py-4 px-6">Karyawan Umum</td>
           <td class="py-4 px-6">
             <button
               class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
               type="button"
               id="detail"
               @click="detailPengguna = true"
             >
               <i class="fas fa-info-circle text-white" style="font-size: 15px"></i>
             </button>
             <Teleport to="body">
               <modal :show="detailPengguna" @close="detailPengguna = false">
                 <template #header>
                   <h3 class="text-2xl font-bold text-center">Detail Pengguna</h3>
                 </template>
                 <template #body>
                   <div class="flex flex-wrap">
                     <div class="w-full px-4">
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Judul Pengguna</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">Service Laptop</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Jenis Pengguna</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">Incident</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product Pengguna</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">PC/Laptop</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Permasalahan</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block text-black text-xs font-reguler mb-2">Laptop tiba-tiba mati, tapi kipas tetap berbunyi</h2>
                           </div>
                         </div>
                       </div>
                       <div class="flex flex-wrap">
                         <div class="w-full lg:w-3/12">
                           <div class="relative w-full mb-3">
                             <h2 class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Status</h2>
                           </div>
                         </div>
                         <div class="w-full lg:w-9/12">
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
                       @click="detailPengguna = false"
                     >
                       Oke
                     </button>
                   </div>
                 </template>
               </modal>
             </Teleport>
             <button class="bg-blue-500 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button" id="update" @click="updatePengguna = true">
               <i class="fas fa-pen-square text-white" style="font-size: 15px"></i>
             </button>
             <Teleport to="body">
               <modal :show="updatePengguna" @close="updatePengguna = false">
                 <template #header>
                   <h3 class="text-2xl font-bold text-center">Update Data Pengguna</h3>
                 </template>
                 <template #body>
                   <form>
                     <div class="flex flex-wrap">
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Judul Pengguna </label>
                           <input
                             type="text"
                             class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                             placeholder="Isikan Pengguna"
                           />
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Product</label>
                           <select id="divisi" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
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
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Permasalahan </label>
                           <input
                             type="text"
                             class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                             placeholder="Jelaskan Permasalahan"
                           />
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Harapan </label>
                           <input
                             type="text"
                             class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                             placeholder="Tuliskan Harapanmu"
                           />
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label for="countries" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">PIC Pengguna</label>
                           <select id="divisi" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                             <option>--Pilih PIC Pengguna--</option>
                             <option>Budi</option>
                             <option>Bambang</option>
                             <option>Joko</option>
                           </select>
                         </div>
                       </div>
                       <div class="w-full px-4">
                         <div class="relative w-full mb-3">
                           <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Lampiran </label>
                           <input type="file" id="dropzoneFile" class="dropzoneFile" />
                         </div>
                       </div>
                     </div>
                   </form>
                 </template>
                 <template #footer>
                   <div class="text-left">
                     <button
                       class="bg-red-600 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                       @click="updatePengguna = false"
                     >
                       Batal
                     </button>
                     <button
                       class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                       @click="updatePengguna = false"
                     >
                       Simpan
                     </button>
                   </div>
                 </template>
               </modal>
             </Teleport>
             <button class="bg-red-600 active:bg-white text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-2 mb-3 ease-linear transition-all duration-150" type="button" id="delete" @click="deletePengguna = true">
               <i class="fas fa-trash text-white" style="font-size: 15px"></i>
             </button>
             <Teleport to="body">
               <modal :show="deletePengguna" @close="deletePengguna = false">
                 <template #header>
                   <h3 class="text-2xl font-bold text-center">Delete Data Pengguna</h3>
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
                       @click="deletePengguna = false"
                     >
                       Ya
                     </button>
                     <button
                       class="bg-blue-500 text-white active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                       @click="deletePengguna = false"
                     >
                       Tidak
                     </button>
                   </div>
                 </template>
               </modal>
             </Teleport>
           </td>
         </tr>
       </tbody>
     </table>
     </div>
 </template>
 
 <script>
 import Modal from "@/components/Modal/ModalDetail.vue";
 
 export default {
   components: {
     Modal,
   },
   data() {
     return {
       addPengguna: false,
       detailPengguna: false,
       updatePengguna: false,
       deletePengguna: false,
     };
 }
 }
 </script>