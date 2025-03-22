<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';

import logo from '../assets/RS Icon.png';

const router = useRouter();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    },
  },
  {
    label: 'About',
    icon: 'pi pi-globe',
    command: () => {
      router.push('/about');
    },
  }
]);

// Tabs Data
const tabs = ref([
  { label: 'Browse Stores in:', path: 'tabs/browse-stores' },
  { label: 'Cashback', path: 'tabs/cashback' },
  { label: 'Travel Miles Points', path: '/tabs' },
  { label: 'Other Reward Points', path: '/tabs' },
  { label: 'My Monitor', path: '/tabs' }
]);


</script>

<template>
  <header class="header-container">
    <Menubar class="full-width-navbar">
      <template #start>
        <div class="left-section">
          <img :src="logo" alt="Logo" class="logo" />
          <nav class="nav-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </template>

      <template #end>
        <div class="search-container">
          <div class="search-wrapper">
            <InputText placeholder="Search Store here" v-tooltip.top="'Search Store'" type="text" class="search-bar" />
            <i class="pi pi-search search-icon"></i>
          </div>
        </div>
      </template>
    </Menubar>
    <div class="tabs-container">
      <RouterLink v-for="tab in tabs" :key="tab.label" :to="tab.path" class="tab"
        :class="{ active: $route.path === tab.path }">
        {{ tab.label }}
      </RouterLink>
    </div>
  </header>
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
  color: blue;
  border-bottom: 3px solid blue;
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
  color: blue;
}

body {
  padding-top: 90px;
  overflow-x: hidden;
  background-color: white;
}

.tabs-container {
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  padding: 10px 0;
  position: fixed;
  left: 0;
  z-index: 999;

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
  color: blue;
  border-bottom: 3px solid blue;
}

.carousel-slider {
  margin-top: 80px;
}

.pi.pi-home,
.pi.pi-globe {
  font-size: 20px;
  color: blue;
}
</style>
