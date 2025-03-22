<script setup>
import { ref } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useRoute } from 'vue-router';

const route = useRoute();


const activeTab = ref(0);
const tabs = ref([
  { title: 'Browse Stores in:' },
  { title: 'Cashback' },
  { title: 'Travel Miles/Points' },
  { title: 'Credit Card/Points' },
  { title: 'Other Reward/Points' },
  { title: 'My Monitor' }
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


//Dummy data for the Most Viewed Store
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

//Dummy data for Stores Sorted by Reward
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

// Dummy data for the Cashback tab
const cashbackData = ref([
  { store: "Amazon", bestRate: "5%", beFrugal: "4.5%", extraBux: "4%", mrRebates: "3.5%", priceCom: "3%", rakuten: "4.8%", rebatesMe: "5%", topCashback: "5.2%", moreSites: "View" },
  { store: "eBay", bestRate: "3%", beFrugal: "2.5%", extraBux: "2%", mrRebates: "1.8%", priceCom: "2.2%", rakuten: "3.1%", rebatesMe: "2.9%", topCashback: "3.2%", moreSites: "View" },
]);

// Dummy data for Travel Miles/Points tab
const travelMilesData = ref([
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },
  { store: "JetBlue", bestRate: "6%", alaska: "5.5%", american: "5%", southwest: "4.5%", united: "4%", moreSites: "View" },
  { store: "Expedia", bestRate: "5%", alaska: "4.5%", american: "4%", southwest: "3.5%", united: "3%", moreSites: "View" },
]);

// Dummy data for Credit Card/Points tab
const CreditCardPoints = ref([
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },


]);

// Dummy data for Other Reward/Points tab
const otherRewardPoints = ref([
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },
  { store: "Delta", bestRate: "8%", alaska: "7%", american: "6.5%", southwest: "6%", united: "5.5%", moreSites: "View" },


]);
</script>

<template>
  <div class="card">
    <TabView>
      <TabPanel v-for="tab in tabs" :key="title" :header="tab.title" headerClass="custom-tab">

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

        <!-- Cashback Table -->
        <div v-else-if="tab.title === 'Cashback'" class="table-section">
          <DataTable :value="cashbackData" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            responsiveLayout="scroll" class="styled-table">
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

        <!-- Travel Miles/Points Table -->
        <div v-else-if="tab.title === 'Travel Miles/Points'" class="table-section">
          <DataTable :value="travelMilesData" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            responsiveLayout="scroll" class="styled-table">
            <Column field="store" header="Store"></Column>
            <Column field="bestRate" header="Best Rate"></Column>
            <Column field="alaska" header="Alaska Mileage Plan"></Column>
            <Column field="american" header="American AAdvantage"></Column>
            <Column field="southwest" header="Southwest Rapid Rewards"></Column>
            <Column field="united" header="United Mileage Plus (UA CC)"></Column>
            <Column field="moreSites" header="More Sites"></Column>
          </DataTable>
        </div>

        <!--Credit Card/Points Table-->
        <div v-else-if="tab.title === 'Credit Card/Points'" class="table-section">
          <DataTable :value="CreditCardPoints" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            responsiveLayout="scroll" class="styled-table">
            <Column field="store" header="Store"></Column>
            <Column field="bestRate" header="Best Rate"></Column>
            <Column field="alaska" header="Alaska Mileage Plan"></Column>
            <Column field="american" header="American AAdvantage"></Column>
            <Column field="southwest" header="Southwest Rapid Rewards"></Column>
            <Column field="united" header="United Mileage Plus (UA CC)"></Column>
            <Column field="moreSites" header="More Sites"></Column>
          </DataTable>
        </div>

        <!--Other Reward/Points Table-->
        <div v-else-if="tab.title === 'Other Reward/Points'" class="table-section">
          <DataTable :value="otherRewardPoints" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            responsiveLayout="scroll" class="styled-table">
            <Column field="store" header="Store"></Column>
            <Column field="bestRate" header="Best Rate"></Column>
            <Column field="alaska" header="Alaska Mileage Plan"></Column>
            <Column field="american" header="American AAdvantage"></Column>
            <Column field="southwest" header="Southwest Rapid Rewards"></Column>
            <Column field="united" header="United Mileage Plus (UA CC)"></Column>
            <Column field="moreSites" header="More Sites"></Column>
          </DataTable>
        </div>

        <!-- Default Table for Other Tabs -->
        <div v-else-if="mostViewedStores.length === 0">
          <p>No data available for this tab yet.</p>
        </div>

      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped>
.filter-section {
  margin-top: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}

.letters {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
}

.letters span {
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 3px;
  background: lightgray;
  font-weight: bold;
}

.filter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.legend {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  white-space: nowrap;
}

.gray-box,
.green-box {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 3px;
}

.gray-box {
  background: grey;
}

.green-box {
  background: green;
}

.search-bar {
  flex-grow: 1;
  max-width: 300px;
}

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

.related-links-card,
.advertisement-card {
  flex: 0.5;
  min-width: 250px;
  padding: 15px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-links-card ul {
  list-style: none;
  padding: 0;
}

.related-links-card li {
  margin-bottom: 8px;
}

.related-links-card a {
  text-decoration: none;
  color: #007bff;
}

.table-card {
  flex: 1;
  min-width: 300px;
  padding: 15px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
  font-weight: bold !important;
}


:deep(.p-datatable-thead > tr > th) {
  border: 1px solid #ddd !important;
  background-color: white;
  padding: 10px;
  text-align: left;
}

.image-box {
  margin-top: 10px;
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
  color: red;
  font-size: 18px;
}

.text-border {
  border: 2px solid #333;
  font-weight: bold;
  color: #333;
  border-radius: 5px;
  background-color: #fff;
}

.image-box span {
  display: block;
  color: red;
  font-weight: bold;
  margin-left: 5px;
}

#adv {
  text-align: center;
  justify-content: center;
  display: flex;
}

.filt {
  color: green;

}
</style>
