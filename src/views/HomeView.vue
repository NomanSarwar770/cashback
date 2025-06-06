<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import ProgressSpinner from 'primevue/progressspinner';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import img1 from '@/assets/slider1.jpg'
import img2 from '@/assets/slider3.png'
import img3 from '@/assets/slider2.jpg'
import img4 from '@/assets/athleta.jpg'
import img5 from '@/assets/lenovo.png'

const mostViewedStores = ref([]);
const sortedByRewardStores = ref([]);

const loadingMostViewed = ref(true);
const loadingSortedByReward = ref(true);

const showAllMostViewed = ref(false);
const showMostViewedDialog = ref(false);
const showSortedByRewardDialog = ref(false);
const showAllSortedByReward = ref(false);
const startIndexMostViewed = ref(0);
const startIndexSortedByReward = ref(0);
const imagesPerPage = ref(7);

// Function to update images per page depending on screen width
const updateImagesPerPage = () => {
  imagesPerPage.value = window.innerWidth < 768 ? 6 : 7;
};

onMounted(async () => {
  updateImagesPerPage();
  window.addEventListener('resize', updateImagesPerPage);

  try {
    const resMostViewed = await axios.get('https://revroi.oaroulette.com/?action=revsavings.topViewedStores');
    mostViewedStores.value = resMostViewed.data;
  } catch (error) {
    console.error('Error fetching most viewed stores:', error);
  } finally {
    loadingMostViewed.value = false;
  }

  try {
    const resSortedByReward = await axios.get('https://revroi.oaroulette.com/?action=revsavings.topCashbackStores');
    sortedByRewardStores.value = resSortedByReward.data;
  } catch (error) {
    console.error('Error fetching sorted by reward stores:', error);
  } finally {
    loadingSortedByReward.value = false;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateImagesPerPage);
});

const nextImages = (type) => {
  if (type === 'mostViewed' && startIndexMostViewed.value + imagesPerPage.value < mostViewedStores.value.length) {
    startIndexMostViewed.value += imagesPerPage.value;
  } else if (type === 'sortedByReward' && startIndexSortedByReward.value + imagesPerPage.value < sortedByRewardStores.value.length) {
    startIndexSortedByReward.value += imagesPerPage.value;
  }
};

const prevImages = (type) => {
  if (type === 'mostViewed' && startIndexMostViewed.value > 0) {
    startIndexMostViewed.value -= imagesPerPage.value;
  } else if (type === 'sortedByReward' && startIndexSortedByReward.value > 0) {
    startIndexSortedByReward.value -= imagesPerPage.value;
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

    <div class="carousel-item active">
  <div class="slider-wrapper">
    <a href="https://chromewebstore.google.com/detail/rev-savings/dhihbnnpblebokhdeniedlmlmdhliolb" target="_blank" class="slider-link">
      <img :src="img2" class="slider-image" alt="Slide 2" style="pointer-events: none;">
    </a>
  </div>
</div>

    <div class="carousel-inner">
      <div class="carousel-item">
  <div class="slider-wrapper">
    <a href="#" class="slider-link" style="pointer-events: none;">
      <img :src="img1" class="slider-image" alt="Slide 1" />
    </a>
  </div>
</div>

<div class="carousel-item">
  <div class="slider-wrapper">
    <a href="#" class="slider-link" style="pointer-events: none;">

    <img :src="img3" class="slider-image" alt="Slide 3">
    </a>
  </div>
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
    <div v-if="loadingMostViewed" class="text-center my-5">
  <ProgressSpinner style="width: 50px; height: 50px;" strokeWidth="8" />
</div>
    <div class="row gx-0 px-0">
      <div class="d-flex justify-content-between align-items-center mb-3 px-3 px-md-0">
        <h2 class="mb-0 fs-5 fs-md-3">Most Viewed Cashback</h2>
        <a href="#" @click.prevent="showMostViewedDialog = true" class="btn btn-sm btn-light fw-bold text-dark">See All</a>
      </div>
      <div class="image-grid-wrapper" >
  <div class="image-grid" >
    <RouterLink
      v-for="store in (showAllMostViewed ? mostViewedStores : mostViewedStores.slice(startIndexMostViewed, startIndexMostViewed + imagesPerPage))"
      :key="store.id"
      :to="`/cashback/${store.link}`"
      class="image-card"
    >
      <img :src="store.logo" :alt="store.website" />
      <p>{{ store.website }}</p>
      <p style="color: green; font-weight: bold;">{{ store.rate }}</p>
    </RouterLink>
  </div>
</div>
      <!-- Most Viewed Stores Dialog -->
      <Dialog v-model:visible="showMostViewedDialog" modal header="Most Viewed Cashback"
        :style="{ width: '80vw', height: '80vh' }">
  <div class="dialog-image-grid">
    <RouterLink
      v-for="store in mostViewedStores"
      :key="store.id"
      :to="`/cashback/${store.link}`"
      class="dialog-image-card"
    >
      <img :src="store.logo" :alt="store.website" />
      <p>{{ store.website }}</p>
      <p style="color: green; font-weight: bold;">{{ store.rate }}</p>
    </RouterLink>
  </div>
</Dialog>
      <div class="pagination">
        <!-- <button @click="prevImages('mostViewed')" :disabled="startIndexMostViewed === 0" class="image-buttonp">
          <img src="@/assets/back.png" alt="Previous" />
        </button>
        <button @click="nextImages('mostViewed')" :disabled="startIndexMostViewed + imagesPerPage >= stores.length"
          class="image-button">
          <img src="@/assets/next.png" alt="Next" />
        </button> -->
        <Button @click="prevImages('mostViewed')" :disabled="startIndexMostViewed === 0" icon="pi pi-arrow-left"
          severity="primary" rounded aria-label="Previous" class="me-3" />

        <Button @click="nextImages('mostViewed')"
          :disabled="startIndexMostViewed + imagesPerPage >= mostViewedStores.length" icon="pi pi-arrow-right"
          severity="primary" rounded aria-label="Next" />
      </div>
    </div>


    <div v-if="loadingSortedByReward" class="text-center my-5">
  <ProgressSpinner style="width: 50px; height: 50px;" strokeWidth="8" />
</div>
    <!-- Stores Sorted by Reward -->
    <div class="row gx-0 px-0">
      <div class="d-flex justify-content-between align-items-center mb-3 px-3 px-md-0">
        <h2 class="mb-0 fs-5 fs-md-3">Popular Giftcards</h2>
        <a href="#" @click.prevent="showSortedByRewardDialog = true" class="btn btn-sm btn-light fw-bold text-dark">
          See All
        </a>
      </div>

      <div class="image-grid-wrapper">
  <div class="image-grid">
    <RouterLink
      v-for="store in (showAllSortedByReward ? sortedByRewardStores : sortedByRewardStores.slice(startIndexSortedByReward, startIndexSortedByReward + imagesPerPage))"
      :key="store.id"
      :to="`/giftcards/${store.link}`"
      class="image-card"
    >
      <img :src="store.logo" :alt="store.website" />
      <p>{{ store.website }}</p>
       <p style="color: green; font-weight: bold;">{{ store.rate }}</p>
    </RouterLink>
  </div>
</div>

      <!-- Stores Sorted by Reward Dialog -->
      <Dialog v-model:visible="showSortedByRewardDialog" modal header="Popular Giftcards"
        :style="{ width: '80vw', height: '80vh' }">
  <div class="dialog-image-grid">
    <RouterLink
      v-for="store in sortedByRewardStores"
      :key="store.id"
      :to="`/giftcards/${store.link}`"
      class="dialog-image-card"
    >
      <img :src="store.logo" :alt="store.website" />
      <p>{{ store.website }}</p>
      <p style="color: green; font-weight: bold;">{{ store.rate }}</p>
    </RouterLink>
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
          severity="primary" rounded aria-label="Previous" class="me-3" />

        <Button @click="nextImages('sortedByReward')"
          :disabled="startIndexSortedByReward + imagesPerPage >= sortedByRewardStores" icon="pi pi-arrow-right"
          severity="primary" rounded aria-label="Next" />
      </div>
    </div>


    <!-- Related Links & Advertisement -->
    <!-- <div class="row content-row gx-0 px-0  mb-5">

      <div class="table-card">
        <h3 class="related-linkss">Related Links</h3>
        <ul class="related-links">
          <li><a href="#">Exclusive Deals</a></li>
          <li><a href="#">Top Discounts</a></li>
          <li><a href="#">Best Cashback Offers</a></li>
          <li><a href="#">Coupons & Vouchers</a></li>
        </ul>
      </div>

      <div class="table-card" id="advrt">
        <h3 class="adv">Advertisement</h3>
        <img :src="img4" alt="Ad Banner" class="ad-banner" />
      </div>

      <div class="table-card" id="advrt">
        <h3 class="adv">Advertisement</h3>
        <img :src="img5" alt="Ad Banner" class="ad-banner" />
      </div>
    </div> -->
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
.slider-link {
  display: flex;
  justify-content: center;
  align-items: center;

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
    /* grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); */
    /* gap: 0; */
    gap: 45px;
  margin-bottom: 10px;
}
.image-card {
  text-align: center;
  background: white;
  padding: 20px;
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
  text-transform: capitalize;
  text-decoration: none !important;
  color: black;
}
.image-card {
  text-decoration: none;

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

@media screen and (max-width: 768px) {
  .ad-banner {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 0;
  }
  .table-card {
    min-height: 0;
  }
}

.dialog-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 20px;

}

.dialog-image-card {
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  background: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  margin-bottom: 15px;
  color: black;
  text-decoration: none;

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
  text-transform: capitalize;
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
.slider-image {
  height: auto;
  max-width: 50%;
  margin: 0 auto;

}
.slider-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
}


.sliderr-image {
  max-height: 1000px;
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
}

.carousel-img {
  height: 500px;
  object-fit: cover;
  object-position: center;
}

.carousel-inner {
  width: 100%;
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

@media (max-width: 768px) {
  .image-grid {
    gap: 10px;
    justify-content: center;
  }
}
.image-card img {
  height: 50px;
  object-fit: contain;
  width: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  text-decoration: none;
}
.dialog-image-card img {
  height: 50px;
  object-fit: contain;
  width: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
.store-name-link {
  text-decoration: none !important;
  color: inherit;
  font-weight: 500;
  margin-top: 40px !important;
}

@media (max-width: 768px) {
  .slider-image {
    height: 200px;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    }
}

</style>
