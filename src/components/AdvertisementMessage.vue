<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
  <div class="advertisement-card">
    <div class="advertisement-content">
      <span>We rely on advertisements to offer our FREE services.</span>
      <span>Please turn off your ad blocker for Cashback Monitor.</span>
      <span>Thank You!</span>
    </div>
  </div>
</template>



<style scoped>
/* Styles for the advertisement section */
.advertisement-card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.advertisement-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #555;
}

@media (max-width: 768px) {
  .advertisement-card {
    padding: 10px;
    font-size: 12px;
  }
}
</style>
