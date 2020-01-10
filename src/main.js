import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'htt://localhost:8OOO/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import App from './App.vue'
import router from './routes'
import store from './vuex/store'

Vue.config.productionTip = false

import fab from 'vue-fab'
Vue.component('fab', fab)

new Vue({
   router,
  store,
  render: h => h(App),
}).$mount('#app')
