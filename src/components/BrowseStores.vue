<script setup>
import { ref } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useRouter } from 'vue-router';

const router = useRouter();

// Tabs Data
const tabs = ref([
  { title: 'Browse Stores in:' },
  { title: 'Another Tab' }
]);

const navigateToBrowseStores = (title) => {
  if (title === 'Browse Stores in:') {
    router.push('/browse-stores');
  }
};

// Dummy Data for The Most Viewed Stores
const mostViewedStores = ref([
  { id: "1", store: "America", bestRate: "4.5%" },
  { id: "2", store: "Canada", bestRate: "4.5%" },
  { id: "3", store: "Germany", bestRate: "4.5%" },
  { id: "4", store: "Brazil", bestRate: "4.5%" },
  { id: "5", store: "England", bestRate: "4.5%" },
  { id: "6", store: "Australia", bestRate: "4.5%" },
  { id: "7", store: "Bangkok", bestRate: "4.5%" },
  { id: "8", store: "Crotia", bestRate: "4.5%" },
]);

// Dummy Data for Stores Sorted by Reward
const storesSortedByRewards = ref([
  { id: "1", store: "America", bestRate: "4.5%" },
  { id: "2", store: "Canada", bestRate: "4.5%" },
  { id: "3", store: "Germany", bestRate: "4.5%" },
  { id: "4", store: "Brazil", bestRate: "4.5%" },
  { id: "5", store: "England", bestRate: "4.5%" },
  { id: "6", store: "Australia", bestRate: "4.5%" },
  { id: "7", store: "Bangkok", bestRate: "4.5%" },
  { id: "8", store: "Crotia", bestRate: "4.5%" },
]);
</script>
<template>
  <div class="card">
    <TabView>
      <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title" headerClass="custom-tab"
        @click="navigateToBrowseStores(tab.title)">

        <!-- Browse Stores in: Section -->
        <div v-if="tab.title === 'Browse Stores in:'">
          <div class="tables-row">
            <!-- Table 1: The Most Viewed Stores -->
            <div class="table-card">
              <h3 v-tooltip.top="'The Most Viewed Stores'">The Most Viewed Stores</h3>
              <DataTable :value="mostViewedStores" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
                responsiveLayout="scroll" class="styled-table">
                <Column field="id" header="#"></Column>
                <Column field="store" header="Store"></Column>
                <Column field="bestRate" header="Best Rate"></Column>
              </DataTable>
            </div>

            <!-- Table 2: Stores Sorted by Rewards -->
            <div class="table-card">
              <h3 v-tooltip.top="'Stores Sorted by Rewards'">Stores Sorted by Rewards</h3>
              <DataTable :value="storesSortedByRewards" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
                responsiveLayout="scroll" class="styled-table">
                <Column field="id" header="#"></Column>
                <Column field="store" header="Store"></Column>
                <Column field="bestRate" header="Best Rate"></Column>
              </DataTable>
            </div>

          </div>
        </div>

      </TabPanel>
    </TabView>
  </div>
</template>


<style>
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

.styled-table :deep(.p-datatable-thead th) {
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.styled-table :deep(.p-datatable-tbody tr) {
  border-bottom: 1px solid #ddd;
}

.styled-table :deep(.p-datatable-tbody td) {
  padding: 10px;
  border-right: 1px solid #ddd;
}

.styled-table :deep(.p-datatable-tbody tr:nth-child(even)) {
  background: #f9f9f9;
}

.styled-table :deep(.p-datatable-tbody tr:hover) {
  background: #e3f2fd;
}

.tables-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
