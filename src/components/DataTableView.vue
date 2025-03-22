<script setup>
import { defineProps } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

defineProps({
  headers: Array,
  tableData: Array
});
</script>

<template>
  <div class="table-section">
    <DataTable :value="tableData" responsiveLayout="scroll" class="styled-table">
      <Column v-for="header in headers" :key="header" :field="header.toLowerCase().replace(/ /g, '')" :header="header">
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.table-section {
  margin-top: 20px;
}

.styled-table :deep(.p-datatable) {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.styled-table :deep(.p-datatable-thead) {
  background: #007bff;
  color: white;
}

.styled-table :deep(.p-datatable-tbody tr) {
  border-bottom: 1px solid #ddd;
}

.styled-table :deep(.p-datatable-tbody td) {
  padding: 10px;
  border-right: 1px solid #ddd;
}
</style>
