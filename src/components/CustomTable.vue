<template>
  <table class="w-full mb-5" :class="tableClass">
    <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400 py-5">
      <tr>
        <slot name="columns" :columns="columns">
          <th v-for="column in columns" :key="column" class="p-2">{{ column }}</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <slot :item="item">
          <td v-for="column in columns" :key="column">
            <template v-if="hasValue(item, column)">
              {{ itemValue(item, column) }}
            </template>
          </td>
          <td class="py-4 px-6">
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
          </td>
          <td v-if="item.buttons.length">
                <button
                  v-for="(button, j) in item.buttons.filter((d) => d.show)"
                  :key="j"
                  type="button"
                  class="btn"
                  :class="`btn-${button.color} btn-${button.size || 'sm'}`"
                  :disabled="button.disabled"
                  @click="emit(button.event, item.row)"
                >
                  {{ button.text }}
                </button>
              </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'BaseTable',
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: 'Table columns',
    },
    data: {
      type: Array,
      default: () => [],
      description: 'Table data',
    },
    type: {
      type: String, 
      default: '',
      description: 'Whether table is striped or hover type',
    },
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    },
    colsWithValue() {
      return (row) => this.columns.filter((column) => this.hasValue(row, column));
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== 'undefined';
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>
<style></style>
