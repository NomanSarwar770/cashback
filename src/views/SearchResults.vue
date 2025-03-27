<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CentralizedData } from '@/composables/CentralizedData.js';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const { cashback, travelMiles, creditCardPoints, otherRewardPoints } = CentralizedData();
const route = useRoute();
const router = useRouter();
const searchQuery = ref(route.query.q || '');

// Create a map to store reward data by store name
const storeRewardsMap = computed(() => {
  const map = new Map();

  const addReward = (storeName, type, value) => {
    if (!map.has(storeName)) {
      map.set(storeName, {
        store: storeName,
        cashback: '',
        travelMiles: '',
        creditCardPoints: '',
        otherRewardPoints: '',
      });
    }
    map.get(storeName)[type] = value || ''; // Assign the correct value
  };

  cashback.value.forEach(item => addReward(item.store, 'cashback', item.rate));
  travelMiles.value.forEach(item => addReward(item.store, 'travelMiles', item.rate));
  creditCardPoints.value.forEach(item => addReward(item.store, 'creditCardPoints', item.rate));
  otherRewardPoints.value.forEach(item => addReward(item.store, 'otherRewardPoints', item.rate));

  return Array.from(map.values()); // Convert Map back to an array
});

// Filter results based on search query
const filteredResults = computed(() => {
  if (!searchQuery.value) return [];
  return storeRewardsMap.value.filter(item =>
    item.store.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Watch for query changes
watch(() => route.query.q, (newQuery) => {
  searchQuery.value = newQuery || "";
});

// Navigate to store page
const visitStorePage = (storeName) => {
  router.push(`/store/${encodeURIComponent(storeName)}`);
};
</script>

<template>
  <div class="search-results-container">
    <h2>Searching for <span class="highlight">{{ searchQuery }}</span> found the following store(s)</h2>
    <p>Click a store to view full reward information about the store.</p>

    <DataTable :value="filteredResults" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20]"
      responsiveLayout="scroll" class="styled-table">
      <Column field="store" header="Store" />
      <Column field="cashback" header="Cashback" />
      <Column field="travelMiles" header="Travel Miles/Points" />
      <Column field="creditCardPoints" header="Credit Card Points" />
      <Column field="otherRewardPoints" header="Other Reward Points" />
      <Column header="Action">
        <template #body="slotProps">
          <Button label="Visit Store Page" class="visit-btn" @click="visitStorePage(slotProps.data.store)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.search-results-container {
  margin: 20px;
  margin-top: 200px;
}

.highlight {
  color: green;
  font-weight: bold;
}

.styled-table {
  width: 100%;
  margin-top: 10px;
}

.visit-btn {
  background-color: #008000;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
