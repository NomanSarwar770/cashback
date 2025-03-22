<script setup>
import { ref } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const tabs = ref([
  { title: 'Browse Stores in:' },
  { title: 'Cashback' },
  { title: 'Travel Miles/Points' },
  { title: 'Credit Card/Points' },
  { title: 'Other Reward/Points' },
  { title: 'My Monitor' }
]);

const alphabet = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));

// Related Links Data
const relatedLinks = ref([
  { text: 'Best Cashback Stores', url: '#' },
  { text: 'Top Travel Rewards', url: '#' },
  { text: 'Credit Card Offers', url: '#' },
  { text: 'Exclusive Deals', url: '#' }
]);

// New Store Listings (Dummy Data)
const newStores = ref([
  { store: "Walmart", addedDate: "2024-03-01", category: "Retail" },
  { store: "Target", addedDate: "2024-02-25", category: "Retail" },
  { store: "Best Buy", addedDate: "2024-02-20", category: "Electronics" },
]);

// Popular Store Offers (Dummy Data)
const popularStores = ref([
  { store: "Amazon", offer: "Up to 5% Cashback", expires: "March 15, 2024" },
  { store: "eBay", offer: "Double Rewards Points", expires: "March 20, 2024" },
  { store: "Expedia", offer: "8% Travel Miles", expires: "March 25, 2024" },
]);

// Dummy Data for Cashback Tab
const cashbackData = ref([
  { store: "Amazon", bestRate: "5%", beFrugal: "4.5%", extraBux: "4%", mrRebates: "3.5%", priceCom: "3%", rakuten: "4.8%", rebatesMe: "5%", topCashback: "5.2%", moreSites: "View" },
  { store: "eBay", bestRate: "3%", beFrugal: "2.5%", extraBux: "2%", mrRebates: "1.8%", priceCom: "2.2%", rakuten: "3.1%", rebatesMe: "2.9%", topCashback: "3.2%", moreSites: "View" },
]);

</script>

<template>
  <div class="card">
    <TabView>
      <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">

        <!-- Browse Stores in: -->
        <div v-if="tab.title === 'Browse Stores in:'">
          <h3>Related Links</h3>
          <ul>
            <li v-for="link in relatedLinks" :key="link.text">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>

          <!-- New Stores Table -->
          <h3>New Store Listings</h3>
          <DataTable :value="newStores" responsiveLayout="scroll" class="styled-table">
            <Column field="store" header="Store"></Column>
            <Column field="addedDate" header="Added Date"></Column>
            <Column field="category" header="Category"></Column>
          </DataTable>

          <!-- Popular Store Offers Table -->
          <h3>Popular Store Offers</h3>
          <DataTable :value="popularStores" responsiveLayout="scroll" class="styled-table">
            <Column field="store" header="Store"></Column>
            <Column field="offer" header="Offer"></Column>
            <Column field="expires" header="Expires"></Column>
          </DataTable>
        </div>

        <!-- Cashback Table -->
        <div v-else-if="tab.title === 'Cashback'" class="table-section">
          <DataTable :value="cashbackData" responsiveLayout="scroll" class="styled-table">
            <Column field="store" header="Store"></Column>
            <Column field="bestRate" header="Best Rate"></Column>
            <Column field="beFrugal" header="BeFrugal"></Column>
            <Column field="extraBux" header="ExtraBux"></Column>
            <Column field="mrRebates" header="Mr. Rebates"></Column>
            <Column field="priceCom" header="Price.com"></Column>
            <Column field="rakuten" header="Rakuten"></Column>
            <Column field="rebatesMe" header="RebatesMe"></Column>
            <Column field="topCashback" header="Top Cashback"></Column>
            <Column field="moreSites" header="More Sites"></Column>
          </DataTable>
        </div>

        <!-- Default Content for Other Tabs -->
        <div v-else class="table-section">
          <p>No data available for this tab yet.</p>
        </div>

      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
}

/* Table Styling */
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
</style>
