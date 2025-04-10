<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import img1 from '@/assets/Slider 1.png'
import img2 from '@/assets/Slider 3.png'
import img3 from '@/assets/Slider 2.png'
import img4 from '@/assets/athleta.jpg'
import img5 from '@/assets/lenovo.png'

const stores = ref([
  { id: 1, name: 'Walmart', image: new URL('../assets/wallmart.png', import.meta.url).href, reward: 5, path: "cashback/?q=walmart" },
  { id: 2, name: 'Nike', image: new URL('../assets/nike.png', import.meta.url).href, reward: 3, path: "cashback/?q=nike" },
  { id: 3, name: 'Athleta', image: new URL('../assets/athleta.png', import.meta.url).href, reward: 4 },
  { id: 4, name: 'Temu', image: new URL('../assets/temu.png', import.meta.url).href, reward: 2 },
  { id: 5, name: 'Mac', image: new URL('../assets/mac.jpg', import.meta.url).href, reward: 6 },
  { id: 6, name: 'Old Navy', image: new URL('../assets/oldnavy.jpg', import.meta.url).href, reward: 3 },
  { id: 7, name: 'Samsung', image: new URL('../assets/samsung.jpg', import.meta.url).href, reward: 4 },
  { id: 8, name: 'Ultra', image: new URL('../assets/ultra.png', import.meta.url).href, reward: 5 },
  { id: 9, name: 'Lenovo', image: new URL('../assets/lenovo.png', import.meta.url).href, reward: 4 },
  { id: 10, name: 'eBay', image: new URL('../assets/ebay.png', import.meta.url).href, reward: 3 },
]);


const mostViewedStores = computed(() => {
  return stores.value.map(store => ({ ...store }));
});

const sortedByRewardStores = computed(() => {
  return stores.value.map(store => ({
    ...store,
    path: `/storesbyreward/${store.name.toLowerCase().replace(/\s+/g, '-')}`
  }));
});

const showAllMostViewed = ref(false);
const showMostViewedDialog = ref(false);
const showSortedByRewardDialog = ref(false);
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
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="img1" class="d-block w-100" alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img :src="img2" class="d-block w-100" alt="Slide 2">
      </div>
      <div class="carousel-item">
        <a href="https://www.google.com" target="_blank" rel="">
          <img :src="img3" class="d-block w-100" alt="Slide 3">
        </a>

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



  <div class="container px-0">
    <!-- The Most Viewed Stores -->
    <div class="row gx-0 px-0">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="">The Most Viewed Stores</h2>
        <a href="#" @click.prevent="showMostViewedDialog = true" class="btn btn-sm btn-light">See All</a>
      </div>
      <div class="image-grid">
        <div
          v-for="store in (showAllMostViewed ? mostViewedStores : mostViewedStores.slice(startIndexMostViewed, startIndexMostViewed + imagesPerPage))"
          :key="store.id" class="image-card">
          <RouterLink :to="`/cashback/${store.name.toLowerCase().replace(/\s+/g, '-')}`">
            <img :src="store.image" :alt="store.name" />
          </RouterLink>
          <p>{{ store.name }}</p>
        </div>
      </div>
      <!-- Most Viewed Stores Dialog -->
      <Dialog v-model:visible="showMostViewedDialog" modal header="Most Viewed Stores"
        :style="{ width: '80vw', height: '80vh' }">
        <div class="dialog-image-grid">
          <div v-for="store in mostViewedStores" :key="store.id" class="dialog-image-card">
            <RouterLink :to="`/cashback/${store.name.toLowerCase().replace(/\s+/g, '-')}`">
              <img :src="store.image" :alt="store.name" />
            </RouterLink>
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
    <div class="row gx-0 px-0 content-row">
      <div class="title-container">
        <h2 class="title">Stores Sorted by Reward</h2>
        <a href="#" @click.prevent="showSortedByRewardDialog = true" class="see-all-link">
          {{ showAllSortedByReward ? 'Show Less' : 'See All' }}
        </a>
      </div>

      <div class="image-grid">
        <div
          v-for="store in (showAllSortedByReward ? sortedByRewardStores : sortedByRewardStores.slice(startIndexSortedByReward, startIndexSortedByReward + imagesPerPage))"
          :key="store.id" class="image-card">
          <RouterLink :to="`/cashback/${store.name.toLowerCase().replace(/\s+/g, '-')}`">
            <img :src="store.image" :alt="store.name" />
          </RouterLink>
          <p>{{ store.name }}</p>
        </div>
      </div>

      <!-- Stores Sorted by Reward Dialog -->
      <Dialog v-model:visible="showSortedByRewardDialog" modal header="Stores Sorted by Reward"
        :style="{ width: '80vw', height: '80vh' }">
        <div class="dialog-image-grid">
          <div v-for="store in sortedByRewardStores" :key="store.id" class="dialog-image-card">
            <RouterLink :to="`/cashback/${store.name.toLowerCase().replace(/\s+/g, '-')}`">
              <img :src="store.image" :alt="store.name" />
            </RouterLink>
            <p>{{ store.name }}</p>
          </div>
        </div>
      </Dialog>

      <div class="pagination">
        <!-- <button @click="prevImages('sortedByReward')" :disabled="startIndexSortedByReward === 0" class="image-buttonp">
          <img src="@/assets/back.png" alt="Previous" />
        </button> -->
        <!-- <button @click="nextImages('sortedByReward')"
          :disabled="startIndexSortedByReward + imagesPerPage >= stores.length"
          class=" image-button btn btn-sm btn-light rounded">
          <img src="@/assets/next.png" alt="Next" />
        </button> -->
        <Button @click="prevImages('sortedByReward')" :disabled="startIndexSortedByReward === 0" icon="pi pi-arrow-left"
          severity="secondary" rounded aria-label="Previous" class="me-3" />

        <Button @click="nextImages('sortedByReward')"
          :disabled="startIndexSortedByReward + imagesPerPage >= stores.length" icon="pi pi-arrow-right"
          severity="secondary" rounded aria-label="Next" />
      </div>
    </div>


    <!-- Related Links & Advertisement -->
    <div class="row content-row gx-0 px-0  mb-5">

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
        <img :src="img4" alt="Ad Banner" class="ad-banner" />
      </div>

      <div class="table-card" id="advrt">
        <h3 class="adv">Advertisement</h3>
        <img :src="img5" alt="Ad Banner" class="ad-banner" />
      </div>
    </div>
  </div>


</template>

<style scoped>
.row {
  width: 100%;
  max-width: 1430px;
  padding: 20px;
  margin: 10px auto 0 auto;
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
.image-grid {
  display: flex;
    flex-wrap: wrap;
  
    align-items: center;
    justify-content: space-between;
    /* grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); */
    /* gap: 0; */
  margin-bottom: 10px;
}
.image-card {
  text-align: center;
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 150px;
}

.image-card img {
  width: 100%;
  height: 80px;
  border-radius: 5px;
}

.image-card p {
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
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
  height: 50px;
  padding: 5px;
  background: white;
  border: none;
  cursor: pointer;
}
.image-button,
.image-buttonp {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.image-button img,
.image-buttonp img {
  width: 30px;
  height: auto;
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

.carousel-img {
  height: 500px; /* or whatever height you're using */
  object-fit: cover;
  object-position: center;
}

.carousel-inner {
  width: 100%;
  height: 650px;
  object-fit: cover;

}

.carousel-item {
  width: 100%;

}

.carousel-slider {
  margin-top: 0px;
}
@media screen and (max-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 20px;
  }


  .see-all-link {
    font-size: 14px;
    margin: 10px auto;
    display: block;
  }

  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .image-card {
    max-width: 130px;
  }
}

@media screen and (max-width: 480px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .image-card {
    max-width: 120px;
  }


  .title-container {
    flex-direction: column;
    align-items: flex-start;
  }

}
.page-number {
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: white;
  transition: 0.3s;
}

.page-number.active-page {
  background: green;
  color: white;
  font-weight: bold;
}



@media (max-width: 767px) {
  .dialog-image-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dialog-image-card img {
    width: 100%;
    height:80px;
  }
}
</style>
