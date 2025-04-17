<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// Use fallback if route.params.store is undefined
const currentStore = computed(() => route.params.store || 'walmart')

const tabs = computed(() => [
{ label: 'Cashback', path: `/cashback/${currentStore.value}` },
  { label: 'Gift Cards', path: `/giftcards/${currentStore.value}` },
  { label: 'Travel Points/Rewards', path: `/travelpointsrewards/${currentStore.value}` },
  { label: 'Credit Card/Points', path: `/creditcardpoints/${currentStore.value}` }
]);

</script>

<template>
  <div class="tabs-wrapper">
    <div class="tabs-container">
      <RouterLink v-for="tab in tabs" :key="tab.label" :to="tab.path" class="tab"
        :class="{ active: route.path === tab.path }">
        {{ tab.label }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

.tabs-wrapper {
  display: flex;
  justify-content: center;
}
.tabs-container {
  margin-top: 100px;
  display: flex;
  background-color: white;
  width: 100%;
  max-width: 1300px;
  position: relative;
  padding: 12px 20px;
  z-index: 999;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

}
@media (min-width: 1024px) {
  .tabs-container {
    margin-right: 0;
  }
}

.tab {
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: white;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

}

.tab.active {
  color: green;
  border-bottom: 3px solid green;
}

.tab:hover {
  color: green;
  border-bottom: 3px solid green;
}
</style>
