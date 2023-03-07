<template>
  <div class="w-full px-4 mt-2">
    <div class="relative w-full mb-3 bg-white p-4 shadow-lg rounded">
      <h2>{{ card.id_sprint }}</h2>
    </div>
  </div>
</template>

  <script>
export default {
    props: {
    card: Object
  },
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>