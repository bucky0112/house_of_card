import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import './assets/all.scss';
import thousandsFilter from './filters/thousands';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('Loading', Loading);
Vue.filter('thousands', thousandsFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
