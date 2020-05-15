import Vue from 'vue';
import AppLayout from './theme/Layout.vue';
import './assets/main.scss';

Vue.config.productionTip = false;


new Vue({
  render: (h) => h(AppLayout),
}).$mount('#app');
