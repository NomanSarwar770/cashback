<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const tabs = ref([
  { label: 'Cashback', path: "/cashback/"+route.params.store },
  { label: 'Gift Cards', path: "/giftcards/"+route.params.store },
  { label: 'Travel Points/Rewards', path: "/travelpointsrewards/"+route.params.store },
  { label: 'Credit Card/Points', path: "/creditcardpoints/"+route.params.store },

]);

</script>

<template>
   <div class="tabs-container">
    <RouterLink v-for="tab in tabs" :key="tab.label" :to="tab.path" class="tab"
      :class="{ active: route.path === tab.path }">
      {{ tab.label }}
    </RouterLink>
  </div>
</template>

<style scoped>
.tabs-container {
  margin-top: 100px;
  display: flex;
  background-color: white;
  width: 100%;
  padding: 10px 0;
  position: relative;
  left: 0;
  z-index: 999;
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

.tab.active {
  color: green;
  border-bottom: 3px solid green;
}

.tab:hover {
  color: green;
  border-bottom: 3px solid green;
}
</style>
