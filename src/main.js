import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuikit from 'vuikit'
import '@vuikit/theme'

import './scss/master.scss'

Vue.use(Vuikit)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
