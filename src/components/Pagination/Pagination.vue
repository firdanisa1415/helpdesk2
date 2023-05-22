<template>
    <nav>
      <ul class="pagination">
        <li v-if="pagination.current_page > 1">
          <a href="#" aria-label="Previous" @click.prevent="changePage(pagination.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pagesNumber" :key="page" :class="[page == isActived ? 'active' : '']">
          <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li v-if="pagination.current_page < pagination.last_page">
          <a href="#" aria-label="Next" @click.prevent="changePage(pagination.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      pagination: {
        type: Object,
        required: true,
      },
      offset: {
        type: Number,
        default: 4,
      },
    },
    computed: {
      isActived() {
        return this.pagination.current_page;
      },
      pagesNumber() {
        const from = this.pagination.current_page - this.offset;
        const to = this.pagination.current_page + this.offset;
        const pagesArray = [];
  
        for (let page = from; page <= to; page++) {
          if (page > 0 && page <= this.pagination.last_page) {
            pagesArray.push(page);
          }
        }
  
        return pagesArray;
      },
    },
    methods: {
      changePage(page) {
        this.$emit('paginate', page);
      },
    },
  };
  </script>
  