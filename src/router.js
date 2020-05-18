import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './theme/Category.vue';
import Login from './theme/Login.vue';
import NotFound from './theme/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/category/:id', name: 'category', component: Category },
  { path: '/login', component: Login },
  { path: '/', redirect: '/category/front-end' },
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
