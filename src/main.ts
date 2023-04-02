import Vue from 'vue';
import router from '@/router/index';
import store from '@/store/index';
import App from '@/App';
import '@/style/app.scss';
import '@/style/tailwindcss.css';

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
