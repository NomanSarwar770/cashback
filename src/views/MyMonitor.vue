<script setup>
import TableComponent from "@/components/TableComponent.vue";
</script>



<template>
  <div>
    <h1>My Monitor</h1>
    <TableComponent :columns="['Name', 'Location']" :data="[{ Name: 'Monitor 1', Location: 'New York' }]" />
  </div>
</template>
