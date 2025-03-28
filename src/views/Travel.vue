<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tabs from '@/components/Tabs.vue';
import { useRoute } from 'vue-router';

const giftcardsData = ref([]);
const route = useRoute();
const hostname = route.params.store;

onMounted(async () => {
  try {
    const response = await fetch("https://revroi.oaroulette.com/?action=gift_cards&hostname="+hostname);
    const data = await response.json();
    giftcardsData.value = data.gift_cards;
  } catch (error) {
    console.error("Error fetching gift cards:", error);
  }
});
</script>

<template>
  <Tabs />
  <div class="table-container">
    <h2 class="table-title">Gift Card Offers</h2>
    <DataTable
      :value="giftcardsData"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      responsiveLayout="scroll"
      class="styled-table"
    >
      <Column field="favicon" header="favicon">
        <template #body="slotProps">
          <img v-if="slotProps.data.favicon" :src="slotProps.data.favicon" :alt="slotProps.data.title" width="30" height="30" />
        </template>
      </Column>
      <Column field="title" header="title" />
      <Column field="rate" header="rate" />
      <Column field="link" header="link">
        <template #body="slotProps">
          <a :href="slotProps.data.link" target="_blank" class="offer-link">Visit Offer</a>
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
  width: 90%;
  max-width: 90%;
  border: 2px solid #ccc;
  transition: 0.3s ease-in-out;
  text-align: center;
  margin-top: 2%;
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
  text-transform: lowercase;
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

/* Offer Link Styling */
.offer-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.offer-link:hover {
  text-decoration: underline;
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
