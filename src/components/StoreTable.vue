<script setup>
import { defineProps } from "vue";

defineProps({
  isVisible: Boolean,
  tableData: Array,
});
</script>
<template>
  <div v-if="isVisible">
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Store</th>
          <th>Best Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="store in tableData" :key="store.id">
          <td>{{ store.id }}</td>
          <td>{{ store.store }}</td>
          <td>{{ store.bestRate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
