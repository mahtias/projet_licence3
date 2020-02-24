import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'htt://localhost:8OOO/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


import VuejsDialog from 'vuejs-dialog'; 
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import VueLoading from 'vuejs-loading-plugin'


Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Patientez ...', // default 'Loading'
  //loading: true, // default false
 // background: 'rgb(255,255,255)', // set custom background
})
// Tell Vue to install the plugin.
// Vue.use(VuejsDialog);
Vue.use(VuejsDialog, {
  html: true,
  loader: true,
  okText: 'Continuer',
  cancelText: 'Annuler',
  animation: 'bounce'
});

//
import Notifications from 'vue-notification'
Vue.use(Notifications)

//


import App from './App.vue'
import router from './routes'
import store from './vuex/store'

Vue.config.productionTip = false


Vue.prototype.$axios = axios;
// Vue.prototype.$ = Jquery;

import fab from 'vue-fab'
Vue.component('fab', fab)

new Vue({
   router,
  store,
  render: h => h(App),
}).$mount('#app');
// store.$app = app;
