import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import BackToTop from 'vue-backtotop';
import StepProgress from 'vue-step-progress';
import 'vue-step-progress/dist/main.css';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import './assets/scss/all.scss';
// 引入自定義 bootstrapvue 顏色
import './assets/scss/main.scss';
import thousandsFilter from './filters/thousands';
import store from './store';

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0); // 切换路由之后滚动条始终在最顶部
});

Vue.config.productionTip = false;
// Toast 設定
const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: 'fas fa-rocket',
  rtl: false,
};
const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.use(Toast, options);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BackToTop);
Vue.use(Loading, {
  color: '#353C43',
  loader: 'bars',
  width: 80,
  height: 80,
  backgroundColor: '#ffffff',
});
Vue.component('step-progress', StepProgress);
Vue.filter('thousands', thousandsFilter);
Vue.prototype.$bus = new Vue();
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);

new Vue({
  created() {
    AOS.init();
  },

  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
