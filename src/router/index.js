import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CashBack from '@/views/CashBack.vue'
import Travel from '@/views/Travel.vue'
import StoresByReward from '@/views/StoresByReward.vue'
import MostViewedStores from '@/views/MostViewedStores.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/cashback/:store', name: 'CashBack', component: CashBack },
    { path: '/giftcards/:store', name: 'Travel', component: Travel },
    {
      path: '/storesbyreward/:storeName',
      name: 'StoresByReward',
      component: StoresByReward,
      props: true,
    },
    {
      path: '/mostviewedstores/:storeName',
      name: 'MostViewedStores',
      component: MostViewedStores,
      props: true,
    },
  ],
})

export default router
