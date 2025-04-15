<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tabs from '@/components/Tabs.vue';
import { useRoute } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import { Button } from 'primevue';

const cashbackData = ref([]);
const travelPointsData = ref([]);
const isLoading = ref(true);

const columns = ref([
  { field: 'title', header: 'Store' },
  { field: 'rate', header: 'Reward Rate' },
  { field: 'link', header: 'Offer Link' }
]);

// const scrollToTop = () => {
//   const el = document.querySelector('.table-container');
//   if (el) {
//     el.scrollIntoView({ behavior: 'smooth' });
//   }
// };

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

  <div class="page-container">
  <Tabs />

  <div class="main-content">
    <div v-if="isLoading" :class="['full-page-container', { loading: isLoading }]"> <!-- this class prevent it push down the tabs when loading the data-->
    <ProgressSpinner />
    <p class="loading-text">Loading Travel Points Rewards Offers...</p>
  </div>


  <!-- Travel Points Table -->
  <div v-show="!isLoading" class="full-page-container">

    <div v-if="travelPointsData.length === 0" class="no-data">
      <h3>🚀 Oops! No Travel Points offers available for <span class="hostname">{{ hostname }}</span> right now. Stay tuned for updates! 🔔</h3>
  </div>

  <div v-else class="table-container">
    <h2 class="table-title">
  Displaying Results for <span class="hostname">{{ hostname }}</span>
</h2>
<DataTable :value="travelPointsData" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            responsiveLayout="scroll" class="styled-table" @page="scrollToTop">
            <Column field="title" header="Store">
              <template #body="slotProps">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <img :src="slotProps.data.favicon" :alt="slotProps.data.title" width="20" height="20" />
                  <span>{{ slotProps.data.title }}</span>
                </div>
              </template>
            </Column>
            <Column field="rate" header="Reward Rate" />
            <Column field="link" header="Offer Link">
              <template #body="slotProps">
                <a :href="slotProps.data.link" target="_blank" style="text-decoration: none;">
      <Button class=" p-button-sm" label="Visit Offer" icon="pi pi-link" />
    </a>
              </template>
            </Column>
          </DataTable>
  </div>
  </div>
</div>
</div>
</template>

<style scoped>
/* Table Wrapper */
.table-container {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  width: 90%;
  max-width: 1300px;
  text-align: center;
  margin:auto;
  margin-bottom: 50px;
}
@media (max-width: 768px) {
  .table-container {
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

@media (max-width: 768px) {
  .table-container {
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 10px;
  }
}
/* Table Title */
.table-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all 0.3s ease;
  padding-bottom: 8px;
}
@media (max-width: 768px) {
  .table-title {
    padding: 10px 16px;
    font-size: 16px;
    text-align: center;
  }
}


.full-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-color: #f8f8f8;
  padding: 0;
  height: auto;
  text-align: center;
}
.full-page-container.loading {
  min-height: 500px;
}
html, body {
  margin: 0;
  padding: 0;
}
.hostname {
  color: green;
  font-weight: bold;
}

/* Table Base Styling */
.styled-table :deep(.p-datatable) {
  max-width: 100%;
  width: auto; /* Ensure it only takes necessary space */
}
.styled-table :deep(.p-datatable-tbody td),
.styled-table :deep(.p-datatable-thead th) {

  font-size: 16px;
  min-width: 100px;
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
.no-data {
  margin-top: 0 !important;
  padding: 0;
  background: white;
  padding-top: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 18px;
  font-weight: bold !important;
  color: green;
  width: 100%;
  margin-top: 20px;
  min-height: 500px;

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
    padding: 35px;
  }

  .styled-table :deep(.p-datatable-thead th),
  .styled-table :deep(.p-datatable-tbody td) {
    padding: 6px;
    font-size: 11px;
  }
  @media (max-width: 768px) {
  .table-container {
    width: 100%;
    max-width: 100%;
    padding: 5px;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }

  .styled-table :deep(.p-datatable) {
    width: 100%; /* Ensure full width within container */
    overflow-x: auto;
    margin-bottom: 0 !important;
  }

  /* Reduce font sizes for mobile */
  .styled-table :deep(.p-datatable-thead th),
  .styled-table :deep(.p-datatable-tbody td) {
    font-size: 12px;
    padding: 6px;
  }
  .styled-table :deep(.p-datatable-tbody tr) {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }

}
.styled-table :deep(.p-datatable-tbody tr:last-child) {
    margin-bottom: 0 !important;
  }
/* Extra small screens (phones) */
@media (max-width: 480px) {
  .table-container {
    padding: 5px;
  }

  .styled-table :deep(.p-datatable) {
    width: 100%;
    min-width: 400px; /* Ensures it doesn't shrink too much */
  }

  /* Stack table cells vertically for better readability */
  .styled-table :deep(.p-datatable-thead th),
  .styled-table :deep(.p-datatable-tbody td) {
    font-size: 11px;
    padding: 4px;
  }
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
  text-align: center;
}

.page-container {
  display: flex;
  flex-direction: column;
}

/* Content Section */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

/* Table and Loading Styling */
.table-container, .loading-container {
  width: 100%;
  text-align: center;
}
@media (max-width: 768px) {
  .full-page-container {
    min-height: auto;
  }
}
@media (max-width: 768px) {
  .no-data {
    min-height: 10vh;
    font-size: 16px;
    padding: 30px;

  }
}
</style>
