<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people" :key="person.id" :class="{collapsed: !person.isExpanded}">
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      people: [
        { id: 1, name: 'John', age: 25, isExpanded: true },
        { id: 2, name: 'Jane', age: 32, isExpanded: false },
        { id: 3, name: 'Bob', age: 45, isExpanded: true },
      ],
    };
  },
};
</script>

<style>
.collapsed {
  display: none;
}
</style>
