<script setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import logo from '../assets/revlogo.png';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref('');
const isMobileMenuVisible = ref(false);

const handleSubmit = () => {
  router.push({ path: `/cashback/${searchQuery.value}` });
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};
</script>

<template>
  <header class="header-container">
    <Menubar class="full-width-navbar">
      <!-- Left Section: Logo -->
      <template #start>
        <div class="left-section">
          <router-link to="/">
            <img :src="logo" alt="Logo" class="logo" />
          </router-link>
        </div>
      </template>

      <!-- Desktop Search Bar (Hidden in Mobile) -->
      <template #end>
        <form @submit.prevent="handleSubmit" class="search-container desktop-search">
          <div class="search-wrapper">
            <InputText v-model="searchQuery" placeholder="Search Store here" type="text" class="search-bar" />
            <i class="pi pi-search search-icon"></i>
          </div>
        </form>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-button" @click="toggleMobileMenu">
          <i class="pi pi-bars"></i>
        </button>
      </template>
    </Menubar>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMobileMenuVisible" class="mobile-menu">
      <!-- Search Bar inside Mobile Menu -->
      <form @submit.prevent="handleSubmit" class="search-container mobile-search">
        <div class="search-wrapper">
          <InputText v-model="searchQuery" placeholder="Search Store here" type="text" class="search-bar" />
          <i class="pi pi-search search-icon"></i>
        </div>
      </form>
<!--
      <router-link to="/" class="mobile-menu-item">Home</router-link> -->
    </div>
  </header>
</template>

<style scoped>
/* Navbar Container */
.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
}

/* Menubar Full Width */
.full-width-navbar {
  width: 100%; /* Ensures full width */
  max-width: 1350px; /* Slightly larger max width for balance */
  margin: 0 auto; /* Centers the navbar */
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px; /* Reduce padding further */

  box-shadow: none; /* Removes any shadow effect */
  border: none; /* Ensures no borders */
}
/* Left Section - Logo */
.left-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 20px;
  width: auto;
}
@media (max-width: 768px) {
  .logo {
    height: 20px;
    width: auto;
  }
}

@media (max-width: 480px) {
  .logo {
    height: 20px;
    width: auto;
  }
}
/* Search Bar */
.search-container {
  display: flex;
  justify-content: center;
  margin-right: 10px;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-bar {
  font-size: 14px;
  width: 250px;
  height: 40px;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 40px;
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
}

.search-bar:focus {
  border-color: black;
  box-shadow: 0px 2px 8px black;
  outline: none;
}

/* Search Icon */
.search-icon {
  position: absolute;
  right: 0px;
  color: white;
  background-color: black;
  padding: 12px;
  border-radius: 0px 5px 5px 0px;
}

/* Mobile Menu Button */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 15px;
}

/* Mobile Dropdown Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 70px;
  right: 15px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.mobile-menu-item {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.mobile-menu-item:hover {
  background-color: #f0f0f0;
}

/* Responsive Design */
@media (max-width: 768px) {
  /* Adjust Navbar Layout */
  .full-width-navbar {
    padding: 0 10px;
  }

  /* Adjust Search Bar Width */
  .search-bar {
    width: 180px;
  }

  /* Show Mobile Menu Button */
  .mobile-menu-button {
    display: block;
  }

  /* Hide Search Bar on Small Screens */
  .search-container {
    display: none;
  }

  /* Show Mobile Menu when active */
  .mobile-menu {
    display: block;
  }
}

@media (max-width: 480px) {
  .logo {
    height: 20px;
    width: auto;
  }

  .search-bar {
    width: 150px;
  }
}
/* Hide Search Bar on Mobile in Navbar */
.desktop-search {
  display: flex;
}

.mobile-search {
  display: none;
}

/* Show Search in Mobile Menu */
@media (max-width: 768px) {
  .desktop-search {
    display: none; /* Hide in navbar */
  }

  .mobile-search {
    display: block; /* Show in mobile menu */
    padding: 10px;
  }

  /* Adjust Search Bar Width */
  .search-bar {
    width: 100%;
  }
}
</style>
