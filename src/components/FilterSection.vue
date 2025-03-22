<script setup>
import { defineProps } from 'vue';
import InputText from 'primevue/inputtext';

defineProps({
  alphabet: Array
});
</script>

<template>
  <div class="filter-section">
    <p><strong>Filter #</strong></p>
    <div class="letters">
      <span v-for="letter in alphabet" :key="letter">{{ letter }}</span>
    </div>

    <div class="filter-row">
      <div class="legend">
        <span class="gray-box"></span> Gray background marks the store's best rate for the reward type.
        <span class="green-box"></span> Green background marks the portal offers best rate for the store.
      </div>

      <div class="search-bar">
        <InputText placeholder="Filter Store Here" />
      </div>
    </div>
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
  background: black;
}

.green-box {
  background: green;
}

.search-bar {
  flex-grow: 1;
  max-width: 300px;
}
</style>
