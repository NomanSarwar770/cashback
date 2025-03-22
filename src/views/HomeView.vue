<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const stores = ref([
  { id: 1, name: 'Walmart', image: new URL('../assets/wallmart.png', import.meta.url).href, reward: 5 },
  { id: 2, name: 'Nike', image: new URL('../assets/nike.png', import.meta.url).href, reward: 3 },
  { id: 3, name: 'Athleta', image: new URL('../assets/athleta.png', import.meta.url).href, reward: 4 },
  { id: 4, name: 'Temu', image: new URL('../assets/temu.png', import.meta.url).href, reward: 2 },
  { id: 5, name: 'Mac', image: new URL('../assets/mac.jpg', import.meta.url).href, reward: 6 },
  { id: 6, name: 'Old Navy', image: new URL('../assets/oldnavy.jpg', import.meta.url).href, reward: 3 },
  { id: 7, name: 'Samsung', image: new URL('../assets/samsung.jpg', import.meta.url).href, reward: 4 },
  { id: 8, name: 'Ultra', image: new URL('../assets/ultra.png', import.meta.url).href, reward: 5 },
  { id: 9, name: 'Lenovo', image: new URL('../assets/lenovo.png', import.meta.url).href, reward: 4 },
  { id: 10, name: 'eBay', image: new URL('../assets/ebay.png', import.meta.url).href, reward: 3 },
]);

// Stores for Most Viewed (default order)
const mostViewedStores = computed(() => {
  return stores.value.map(store => ({ ...store, path: '/mostviewedstores' }));
});

// Stores sorted by reward
const sortedByRewardStores = computed(() => {
  return [...stores.value]
    .sort((a, b) => b.reward - a.reward)
    .map(store => ({ ...store, path: '/storesbyreward' }));
});

// Pagination variables
const showAllMostViewed = ref(false);
const showDialog = ref(false);
const showAllSortedByReward = ref(false);
const startIndexMostViewed = ref(0);
const startIndexSortedByReward = ref(0);
const imagesPerPage = 6;

const nextImages = (type) => {
  if (type === 'mostViewed' && startIndexMostViewed.value + imagesPerPage < mostViewedStores.value.length) {
    startIndexMostViewed.value += imagesPerPage;
  } else if (type === 'sortedByReward' && startIndexSortedByReward.value + imagesPerPage < sortedByRewardStores.value.length) {
    startIndexSortedByReward.value += imagesPerPage;
  }
};

const prevImages = (type) => {
  if (type === 'mostViewed' && startIndexMostViewed.value > 0) {
    startIndexMostViewed.value -= imagesPerPage;
  } else if (type === 'sortedByReward' && startIndexSortedByReward.value > 0) {
    startIndexSortedByReward.value -= imagesPerPage;
  }
};
</script>

<template>
  <!-- Carousel Section-->
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">

    <!-- Indicators -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
    </div>

    <!-- Carousel Items -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="C:\Users\HYPER\Documents\Github\cashback\src\assets\pexels-pixabay-33109.jpg" class="d-block w-100"
          alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img src="C:\Users\HYPER\Documents\Github\cashback\src\assets\pexels-pixabay-326055.jpg" class="d-block w-100"
          alt="Slide 2">
      </div>
      <div class="carousel-item">
        <img src="C:\Users\HYPER\Documents\Github\cashback\src\assets\pexels-pixabay-33545.jpg" class="d-block w-100"
          alt="Slide 3">
      </div>
    </div>

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>


  <div class="full-width-page">
    <!-- The Most Viewed Stores -->
    <div class="row">
      <div class="title-container">
        <h2 class="title">The Most Viewed Stores</h2>
        <a href="#" @click.prevent="showDialog = true" class="see-all-link">See All</a>
      </div>

      <div class="image-grid">
        <div
          v-for="store in (showAllMostViewed ? mostViewedStores : mostViewedStores.slice(startIndexMostViewed, startIndexMostViewed + imagesPerPage))"
          :key="store.id" class="image-card">
          <RouterLink :to="store.path" style="cursor: pointer;">
            <img :src="store.image" :alt="store.name" />
            <p>{{ store.name }}</p>
          </RouterLink>
        </div>
      </div>
      <Dialog v-model:visible="showDialog" modal header="Most Viewed Stores" :style="{ width: '80vw', height: '80vh' }"
        :breakpoints="{ '1199px': '90vw', '575px': '95vw' }">
        <div class="dialog-image-grid">
          <div v-for="store in stores" :key="store.id" class="dialog-image-card">
            <img :src="store.image" :alt="store.name" />
            <p>{{ store.name }}</p>
          </div>
        </div>
      </Dialog>

      <div class="pagination">
        <button @click="prevImages('mostViewed')" :disabled="startIndexMostViewed === 0" class="image-buttonp">
          <img src="@/assets/back.png" alt="Previous" />
        </button>
        <button @click="nextImages('mostViewed')" :disabled="startIndexMostViewed + imagesPerPage >= stores.length"
          class="image-button">
          <img src="@/assets/next.png" alt="Next" />
        </button>
      </div>
    </div>

    <!-- Stores Sorted by Reward -->
    <div class="row content-row">

      <div class="title-container">
        <h2 class="title">Stores Sorted by Reward</h2>
        <a href="#" @click.prevent="showDialog = true" class="see-all-link">
          {{ showAllSortedByReward ? 'Show Less' : 'See All' }}
        </a>
      </div>

      <div class="image-grid">
        <div
          v-for="store in (showAllSortedByReward ? sortedByRewardStores : sortedByRewardStores.slice(startIndexSortedByReward, startIndexSortedByReward + imagesPerPage))"
          :key="store.id" class="image-card">
          <RouterLink :to="store.path" style="cursor: pointer;">
            <img :src="store.image" :alt="store.name" />
            <p>{{ store.name }}</p>
          </RouterLink>
        </div>
      </div>

      <Dialog v-model:visible="showDialog" modal header="Most Viewed Stores" :style="{ width: '80vw', height: '80vh' }"
        :breakpoints="{ '1199px': '90vw', '575px': '95vw' }">
        <div class="dialog-image-grid">
          <div v-for="store in stores" :key="store.id" class="dialog-image-card">
            <img :src="store.image" :alt="store.name" />
            <p>{{ store.name }}</p>
          </div>
        </div>
      </Dialog>

      <div class="pagination">
        <button @click="prevImages('sortedByReward')" :disabled="startIndexSortedByReward === 0" class="image-buttonp">
          <img src="@/assets/back.png" alt="Previous" />
        </button>
        <button @click="nextImages('sortedByReward')"
          :disabled="startIndexSortedByReward + imagesPerPage >= stores.length" class="image-button">
          <img src="@/assets/next.png" alt="Next" />
        </button>
      </div>
    </div>


    <!-- Related Links & Advertisement -->
    <div class="row content-row">

      <!-- <div class="table-card">
        <h3 class="related-linkss">Related Links</h3>
        <ul class="related-links">
          <li><a href="#">Exclusive Deals</a></li>
          <li><a href="#">Top Discounts</a></li>
          <li><a href="#">Best Cashback Offers</a></li>
          <li><a href="#">Coupons & Vouchers</a></li>
        </ul>
      </div> -->

      <div class="table-card" id="advrt">
        <h3 class="adv">Advertisement</h3>
        <img src="C:\Users\HYPER\Documents\Github\cashback\src\assets\athleta.jpg" alt="Ad Banner" class="ad-banner" />
      </div>

      <div class="table-card" id="advrt">
        <h3 class="adv">Advertisement</h3>
        <img src="C:\Users\HYPER\Documents\Github\cashback\src\assets\lenovo.png" alt="Ad Banner" class="ad-banner" />
      </div>
    </div>
  </div>


</template>

<style scoped>
.full-width-page {
  width: 100%;
  padding: 20px;
}

.row {
  width: 100%;
  padding: 20px;
  margin-bottom: 0px;
  background: white;
  border-radius: 10px;

}

.see-all-link {
  color: blue;
  cursor: pointer;
  text-decoration: dashed;
  font-size: 16px;
  font-weight: bold;
  margin-right: 70px;
}

.see-all-link:hover {
  color: darkblue;
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-left: 40px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: -30px;

}

.image-card {
  text-align: center;
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  max-height: fit-content;
  width: 80%;
  margin-left: 30px;
}

.image-card img {
  width: 100%;
  height: 50%;
  border-radius: 5px;
}

.image-card p {
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
}

.round-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 10px white solid;
  background: white;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;
}

.round-btn:hover {
  background: darkgray;
}

.round-btn:disabled {
  background: lightgray;
  cursor: not-allowed;
}

.content-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

.table-card {
  flex: 1;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 200px;
  margin-left: 40px;
  margin-right: 30px;

}



.table-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.table-card ul {
  list-style: none;
  padding: 0;
}

.table-card li {
  margin-bottom: 8px;
}

.table-card a {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}

.table-card a:hover {
  text-decoration: underline;
}

.ad-banner {
  width: 100%;
  max-height: 150px;
  border-radius: 10px;
}

.dialog-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 20px;

}

.dialog-image-card {
  text-align: center;
  padding: 15px;
}

.dialog-image-card img {
  width: 170px;
  height: auto;
  max-height: 100px;
  object-fit: contain;
}

.dialog-image-card p {
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
}

.related-links {
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;

}

.related-linkss {
  list-style-type: disc;
  text-align: left;
  color: black;
  font-weight: bold;
}

.adv {
  color: black;
  font-weight: bold;
}

.related-links li::before {
  content: "➜";
  color: #007bff;
  font-weight: bold;
  margin-right: 10px;
}

.image-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  /* Adjust size */
  height: 50px;

  padding: 5px;
  background: white;
  border: none;
  cursor: pointer;
}

.image-buttonp {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 5px;
  background: white;
  border: none;
  cursor: pointer;
}

.image-buttonp img {
  width: 40px;
  height: 40px;
}

.image-buttonp:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.image-button img {
  width: 35px;
  height: 35px;
}

.image-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  margin-top: 70px;

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