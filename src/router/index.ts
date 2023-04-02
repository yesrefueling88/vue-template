import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/',
      component: () => import('@/views/login/index'),
    },
  ],
  mode: 'hash',
});

export default router;
