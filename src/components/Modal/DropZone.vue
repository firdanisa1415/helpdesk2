<template>
    <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ 'active-dropzone': active }"
      class="dropzone"
    >
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    name: "DropZone",
    setup() {
      const active = ref(false);
  
      const toggleActive = () => {
        active.value = !active.value;
      };
  
      return { active, toggleActive };
    },
  };
  </script>
  
  <style>
  .dropzone {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    background-color: #fff;
    transition: 0.3s ease all;
    padding: 2;

  }
  
  .active-dropzone {
    color: #fff;

  }
  </style>