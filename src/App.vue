<script setup>
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const router = useRouter();

</script>

<template>
  <div class="app-container">
    <Header />


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

</style>
