<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tabs from '@/components/Tabs.vue';
import { useRoute } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';

const cashbackData = ref([]);
const travelPointsData = ref([]);
const isLoading = ref(true);

const columns = ref([
  { field: 'favicon', header: 'Logo' },
  { field: 'title', header: 'Store' },
  { field: 'rate', header: 'Reward Rate' },
  { field: 'link', header: 'Offer Link' }
]);

const route = useRoute();
const hostname = route.params.store;

onMounted(async () => {
  try {
    const response = await fetch(`https://revroi.oaroulette.com/?action=cashback&hostname=${hostname}`);
    const data = await response.json();

    cashbackData.value = data.cashback;
    travelPointsData.value = data.travel_points;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
});

</script>

<template>
  <Tabs />

  <div v-if="isLoading" class="loading-container">
    <ProgressSpinner />
    <p class="loading-text">Loading Travel Points Rewards Offers...</p>
  </div>


  <!-- Travel Points Table -->
  <div v-if="!isLoading && travelPointsData.length > 0" class="table-container">
    <h2 class="table-title">Travel Points Rewards Offers</h2>
    <div v-if="travelPointsData.length === 0" class="no-data">
    <p>No travel points offers available at the moment.</p>
  </div>
    <DataTable :value="travelPointsData" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
      responsiveLayout="scroll" class="styled-table">
      <Column field="favicon" header="Logo">
        <template #body="slotProps">
          <img :src="slotProps.data.favicon" :alt="slotProps.data.title" width="20" height="20" />
        </template>
      </Column>
      <Column field="title" header="Store" />
      <Column field="rate" header="Reward Rate" />
      <Column field="link" header="Offer Link">
        <template #body="slotProps">
          <a :href="slotProps.data.link" target="_blank">Visit Offer</a>
        </template>
      </Column>
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
  width: 100%;
  max-width: 1500px;
  border: 2px solid #ccc;
  transition: 0.3s ease-in-out;
  text-align: center;
  margin-bottom: 4%;
  margin-top: 2%;
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
    margin-top: 0;
    top: 0;
  }

  .styled-table :deep(.p-datatable-thead th),
  .styled-table :deep(.p-datatable-tbody td) {
    padding: 6px;
    font-size: 11px;
  }

  .tab.active {
  color: green;
  border-bottom: 3px solid green;
  text-decoration: none;
}
.tabs-container {
  position: sticky;
  min-height: 50px;
  margin-top: 5vh;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 10px 0;
  z-index: 1001;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.tab {
  flex-grow: 1;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: white;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.tab:hover {
  color: green;
  border-bottom: 3px solid green;
}

}
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
}

.loading-text {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>
