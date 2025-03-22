<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const columns = ref([
  { field: "store", header: "Store" },
  { field: "bestRate", header: "Best Rate" },
  { field: "alaska", header: "Alaska" },
  { field: "american", header: "American" },
  { field: "southwest", header: "Southwest" },
  { field: "united", header: "United" },
  { field: "moreSites", header: "More Sites" },
]);

// Dummy data for Other Reward Points tab
const otherRewardPoints = ref([
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },
  { store: "JetBlue", bestRate: "7%", alaska: "6.5%", american: "6%", southwest: "5.5%", united: "5%", moreSites: "View" },
  { store: "Expedia", bestRate: "6%", alaska: "5.5%", american: "5%", southwest: "4.5%", united: "4%", moreSites: "View" },
]);
</script>

<template>
  <div class="table-container">
    <h2 class="table-title">Other Reward Points Comparison</h2>

    <DataTable :value="otherRewardPoints" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
      responsiveLayout="scroll" class="styled-table">
      <Column v-for="(col, index) in columns" :key="index" :field="col.field" :header="col.header" />
    </DataTable>
  </div>
</template>

<style scoped>
/* Table Wrapper */
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
