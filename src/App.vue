<script setup>
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ProgressSpinner from 'primevue/progressspinner';

const router = useRouter();
const isLoading = ref(false);

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  setTimeout(() => {
    next();
    isLoading.value = false;
  }, 500);
});
</script>

<template>
  <div class="app-container">
    <Header />

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <ProgressSpinner />
        <p class="loading-text">Loading Data...</p>
      </div>
    </div>

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.loading-text {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>
