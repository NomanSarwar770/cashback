<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const columns = ref([
  { field: "store", header: "Store" },
  { field: "bestRate", header: "Best Rate" },
]);

const mostViewedStores = ref([
  { store: "America", bestRate: "4.5%" },
  { store: "Canada", bestRate: "4.5%" },
  { store: "Germany", bestRate: "4.5%" },
  { store: "Brazil", bestRate: "4.5%" },
  { store: "England", bestRate: "4.5%" },
  { store: "Australia", bestRate: "4.5%" },
  { store: "Bangkok", bestRate: "4.5%" },
  { store: "Croatia", bestRate: "4.5%" },
]);
</script>

<template>
  <div class="table-container">
    <h2 class="table-title">The Most Viewed Stores</h2>
    <DataTable :value="mostViewedStores" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
      responsiveLayout="scroll" class="styled-table">
      <Column v-for="(col, index) in columns" :key="index" :field="col.field" :header="col.header" />
    </DataTable>
  </div>
</template>

<style scoped>
.table-container {
  margin: 15px auto;
  padding: 16px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 90%;
  max-width: 90%;
  border: 2px solid #ccc;
  transition: 0.3s ease-in-out;
  text-align: center;
  margin-top: 11%;
  margin-bottom: 4%;
}

/* Table Title */
.table-title {
  color: #444;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

/* Table Base Styling */
.styled-table :deep(.p-datatable) {
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

/* Table Header */
.styled-table :deep(.p-datatable-thead) {
  background: #444;
  color: white;
}

.styled-table :deep(.p-datatable-thead th) {
  padding: 10px;
  font-weight: bold;
  border: none;
  background: #444;
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* Table Rows */
.styled-table :deep(.p-datatable-tbody tr) {
  border-bottom: 1px solid #ddd;
}

/* Table Cells */
.styled-table :deep(.p-datatable-tbody td) {
  padding: 8px;
  font-size: 14px;
  color: #333;
}

/* Alternating Row Colors */
.styled-table :deep(.p-datatable-tbody tr:nth-child(odd)) {
  background-color: #f5f5f5;
}

.styled-table :deep(.p-datatable-tbody tr:nth-child(even)) {
  background-color: #ffffff;
}

/* Hover Effect - Only Background Color */
.styled-table :deep(.p-datatable-tbody tr:hover) {
  background-color: #e0e0e0;
  transition: background-color 0.3s ease-in-out;
}

/* Responsive Table */
@media (max-width: 768px) {
  .table-container {
    width: 95%;
    max-width: 95%;
  }

  .styled-table :deep(.p-datatable-thead th),
  .styled-table :deep(.p-datatable-tbody td) {
    padding: 6px;
    font-size: 11px;
  }
}
</style>
