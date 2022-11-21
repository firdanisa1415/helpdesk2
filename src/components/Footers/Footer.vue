<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style="transform: translateZ(0)"></div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <div class="row mt-3">
            <div class="col-md-3 mx-auto mb-4">
              <h6 class="text-xl mb-2 font-semibold">PT Pelindo Daya Sejahtera</h6>
              <img src="@/assets/img/brand.png" alt="" width="270" height="100" class="img-fluid" />
            </div>
            <div class="col-md-9 mb-4">
              <h6 class="text-xl mb-2 font-semibold">Contact</h6>
              <p><i class="fas fa-map-pin mr-3" style="font-size: 20px"></i>Kantor PT Pelindo Daya Sejahtera</p>
              <p class="mx-6 mb-2">Jl Perak Timur 620, Surabaya, 60165</p>
              <a class="text-reset fw-bold " href="https://www.ptpds.co.id/"><i class="fas fa-globe mr-2"></i>https://www.ptpds.co.id/</a>
              <p class="mt-2"><i class="fas fa-phone mr-2"></i>031 511 66 384</p>
              <p class="mx-6">0811 3311 711</p>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {{ date }}
            <a href="https://www.ptpds.co.id/" class="text-blueGray-500 hover:text-blueGray-800"> PT PDS </a>
            . All rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
