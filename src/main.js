import Vue from 'vue';
import AppLayout from './theme/Layout.vue';
import './assets/main.scss';
import router from './router.js';

Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(AppLayout),
}).$mount('#app');

