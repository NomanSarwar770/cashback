import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CashBack from '@/views/CashBack.vue'
import Travel from '@/views/Travel.vue'
import StoresByReward from '@/views/StoresByReward.vue'
import MostViewedStores from '@/views/MostViewedStores.vue'
import TravelPointsRewards from '@/views/TravelPointsRewards.vue'
import CreditCardPoints from '@/views/CreditCardPoints.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/cashback/:store', name: 'CashBack', component: CashBack },
    { path: '/giftcards/:store', name: 'Travel', component: Travel },
    {
      path: '/travelpointsrewards/:store',
      name: 'TravelPointsRewards',
      component: TravelPointsRewards,
    },
    {
      path: '/creditcardpoints/:store',
      name: 'CreditCardPoints',
      component: CreditCardPoints,
    },
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
