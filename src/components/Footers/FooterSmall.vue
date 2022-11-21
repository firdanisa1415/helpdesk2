<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-image' : 'relative',
    ]"
  >
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full px-4">
          <div
            class="text-sm text-blueGray-500 font-semibold text-center"
          >
            Copyright © {{ date }}
            <a
              href="https://www.ptpds.co.id/"
              class="text-blueGray-500 hover:text-blueGray-800"
            >
            PT PDS
            </a>
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
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
