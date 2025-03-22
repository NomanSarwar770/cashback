<script setup>
import { ref } from 'vue';
import TableComponent from '@/components/TableComponent.vue';

const columns = [
  { field: 'store', header: 'Store' },
  { field: 'bestRate', header: 'Best Rate' },
  { field: 'beFrugal', header: 'BeFrugal' },
  { field: 'extraBux', header: 'ExtraBux' },
  { field: 'mrRebates', header: 'MrRebates' },
  { field: 'priceCom', header: 'PriceCom' },
  { field: 'rakuten', header: 'Rakuten' },
  { field: 'rebatesMe', header: 'RebatesMe' },
  { field: 'topCashback', header: 'TopCashback' },
  { field: 'moreSites', header: 'More Sites' }
];

const cashbackData = ref([
  { store: "Amazon", bestRate: "5%", beFrugal: "4.5%", extraBux: "4%", mrRebates: "3.5%", priceCom: "3%", rakuten: "4.8%", rebatesMe: "5%", topCashback: "5.2%", moreSites: "View" },
  { store: "eBay", bestRate: "3%", beFrugal: "2.5%", extraBux: "2%", mrRebates: "1.8%", priceCom: "2.2%", rakuten: "3.1%", rebatesMe: "2.9%", topCashback: "3.2%", moreSites: "View" },
  { store: "Walmart", bestRate: "6%", beFrugal: "5.5%", extraBux: "5%", mrRebates: "4.5%", priceCom: "4%", rakuten: "5.8%", rebatesMe: "6.1%", topCashback: "6.5%", moreSites: "View" },
  { store: "Best Buy", bestRate: "4.5%", beFrugal: "3.9%", extraBux: "3.5%", mrRebates: "3%", priceCom: "3.2%", rakuten: "4.1%", rebatesMe: "4.3%", topCashback: "4.7%", moreSites: "View" },
  { store: "Target", bestRate: "5.2%", beFrugal: "4.7%", extraBux: "4.3%", mrRebates: "3.8%", priceCom: "3.5%", rakuten: "4.9%", rebatesMe: "5.4%", topCashback: "5.6%", moreSites: "View" },
  { store: "Macy's", bestRate: "7%", beFrugal: "6.5%", extraBux: "6%", mrRebates: "5.2%", priceCom: "5%", rakuten: "6.8%", rebatesMe: "7.2%", topCashback: "7.5%", moreSites: "View" },
  { store: "Nike", bestRate: "4%", beFrugal: "3.5%", extraBux: "3%", mrRebates: "2.5%", priceCom: "2.8%", rakuten: "3.7%", rebatesMe: "4.1%", topCashback: "4.3%", moreSites: "View" },
  { store: "Apple", bestRate: "2%", beFrugal: "1.5%", extraBux: "1%", mrRebates: "0.8%", priceCom: "1.2%", rakuten: "1.9%", rebatesMe: "2.1%", topCashback: "2.3%", moreSites: "View" },
  { store: "Adidas", bestRate: "5.5%", beFrugal: "5%", extraBux: "4.5%", mrRebates: "4.2%", priceCom: "3.9%", rakuten: "5.3%", rebatesMe: "5.6%", topCashback: "5.9%", moreSites: "View" }
]);
</script>

<template>
  <TableComponent :columns="columns" :tableData="cashbackData" />
</template>
