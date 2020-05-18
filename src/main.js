import Vue from 'vue';
import AppLayout from './theme/Layout.vue';
import './assets/main.scss';
import router from './router.js';
import store from './vuex/index.js';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(AppLayout),
}).$mount('#app');

