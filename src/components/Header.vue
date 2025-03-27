<script setup>
import { ref, computed } from 'vue';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import logo from '../assets/RS Icon.png';
import { RouterLink, useRoute } from 'vue-router';

// Get the current route
const route = useRoute();

// Tabs Data
const tabs = ref([
  { label: 'Cashback', path: '/cashback' },
  { label: 'Travel Miles Points', path: '/travel' },
  { label: 'Credit Card Points', path: '/credit' },
  { label: 'Other Reward Points', path: '/rewards' }
]);

// Hide tabs on the homepage ('/')
const showTabs = computed(() => route.path !== '/');
</script>

<template>
  <header class="header-container">
    <Menubar class="full-width-navbar">
      <template #start>
        <div class="left-section">
          <router-link to="/">
            <img :src="logo" alt="Logo" class="logo" />
          </router-link>
        </div>
      </template>

      <template #end>
        <form action="cashback">
          <div class="search-container">
          <div class="search-wrapper">
            <InputText name="q" placeholder="Search Store here" type="text" class="search-bar" />
            <i class="pi pi-search search-icon"></i>
          </div>
        </div>
        </form>
      </template>
    </Menubar>

    <!-- Hide tabs when showTabs is false -->
    <div class="tabs-container" v-if="showTabs">
      <RouterLink v-for="tab in tabs" :key="tab.label" :to="tab.path" class="tab"
        :class="{ active: route.path === tab.path }">
        {{ tab.label }}
      </RouterLink>
    </div>
  </header>

  <div class="carousel-slider"></div>
</template>

<style scoped>
.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.full-width-navbar {
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 70px;
}

.logo {
  height: 50px;
  width: auto;
}

.tab.active {
  color: green;
  border-bottom: 3px solid green;
  text-decoration: none;
}

.search-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-right: 70px;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-bar {
  font-size: 12px !important;
  font-weight: bold;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}

.search-bar:focus {
  border-color: black;
  box-shadow: 0px 2px 8px black;
  outline: none;

}


.search-icon {
  position: absolute;
  right: 1px;
  color: white;
  background-color: black;
  padding: 12px;
  border-radius: 0px 5px 5px 0px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 10px 15px;
}

nav a:hover {
  color: green;
}

body {
  padding-top: 70px;
  overflow-x: hidden;
  background-color: white;
}

.tabs-container {
  display: flex;
  background-color: white;
  width: 100%;
  padding: 10px 0;
  position: fixed;
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

.tab:hover {
  color: green;
  border-bottom: 3px solid green;
}

.pi.pi-home,
.pi.pi-globe {
  font-size: 20px;
  color: blue;
}

.carousel {
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 75px;
}

.carousel img {
  width: 100vw;
  height: 400px;
  object-fit: cover;
}

.carousel-inner {
  width: 100%;

}

.carousel-item {
  width: 100%;

}

.carousel-slider {
  margin-top: 0px;
}
</style>
