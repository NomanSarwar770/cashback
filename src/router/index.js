import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CashBack from '@/views/CashBack.vue'
import Rewards from '@/views/Rewards.vue'
import MyMonitor from '@/views/MyMonitor.vue'
import Travel from '@/views/Travel.vue'
import CreditCard from '@/views/CreditCard.vue'
import StoresData from '@/views/StoresData.vue'
import StoresByReward from '@/views/StoresByReward.vue'
import MostViewedStores from '@/views/MostViewedStores.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/cashback', name: 'CashBack', component: CashBack },
    { path: '/rewards', name: 'Rewards', component: Rewards },
    { path: '/credit', name: 'Credit', component: CreditCard },
    { path: '/travel', name: 'Travel', component: Travel },
    { path: '/monitor', name: 'MyMonitor', component: MyMonitor },
    { path: '/storesdata', name: 'StoresData', component: StoresData },
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
