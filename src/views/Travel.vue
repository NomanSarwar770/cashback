<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tabs from '@/components/Tabs.vue';
import { useRoute } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';

const giftcardsData = ref([]);
const isLoading = ref(true);
const route = useRoute();
const hostname = route.params.store;

onMounted(async () => {
  try {
    const response = await fetch(`https://revroi.oaroulette.com/?action=gift_cards&hostname=${hostname}`);
    const data = await response.json();
    giftcardsData.value = data.gift_cards;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="page-container">
    <Tabs />

    <!-- Loading Spinner -->
    <div class="main-content">
      <div v-if="isLoading" class="loading-container">
        <ProgressSpinner />
        <p class="loading-text">Loading Gift Card Offers...</p>
      </div>

      <!-- Table Section -->
      <div v-if="!isLoading" class="table-container">
        <h2 class="table-title">Gift Card Offers</h2>
        <div v-if="giftcardsData.length === 0" class="no-data">
          <p>No gift card offers available at the moment.</p>
        </div>
        <DataTable :value="giftcardsData" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
          responsiveLayout="scroll" class="styled-table">
          <Column field="favicon" header="Logo">
            <template #body="slotProps">
              <img :src="slotProps.data.favicon" :alt="slotProps.data.title" width="20" height="20" />
            </template>
          </Column>
          <Column field="title" header="Store" />
          <Column field="rate" header="Cashback Rate" />
          <Column field="link" header="Offer Link">
            <template #body="slotProps">
              <a :href="slotProps.data.link" target="_blank">Visit Offer</a>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page Container */
.page-container {
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
}

/* Main Content */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Table Wrapper */
.table-container {
  flex-direction: column;
  padding: 16px;
  background: white;
  border-radius: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  border: 0px solid #ccc;
  transition: 0.3s ease-in-out;
  text-align: center;
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

/* Table Styling */
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

/* Hover Effect */
.styled-table :deep(.p-datatable-tbody tr:hover) {
  background-color: #e0e0e0;
  transition: background-color 0.3s ease-in-out;
}

/* Loading Screen */
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

/* Responsive Design */
@media (max-width: 768px) {
  .table-container {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }


.styled-table :deep(.p-datatable-wrapper) {
  margin: 0 !important;
  padding: 0 !important;
}


  .styled-table :deep(.p-datatable-thead th),
  .styled-table :deep(.p-datatable-tbody td) {
    padding: 6px;
    font-size: 11px;
  }
  .styled-table :deep(.p-datatable) {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.styled-table :deep(.p-datatable-wrapper) {
  margin-bottom: 0 !important;
}

  .tab.active {
    color: green;
    border-bottom: 3px solid green;
    text-decoration: none;
  }

  .tabs-container {
    position: sticky;
    min-height: 50px;
    padding: 16px;
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
</style>
