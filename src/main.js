import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import Tooltip from 'primevue/tooltip'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
const app = createApp(App)
app.use(ToastService)
app.component('Toast', Toast)
app.component('Dialog', Dialog)
app.use(router)
app.directive('tooltip', Tooltip)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})
app.mount('#app')
