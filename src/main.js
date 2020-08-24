import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import StepProgress from 'vue-step-progress';
import 'vue-step-progress/dist/main.css';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import './assets/all.scss';
import thousandsFilter from './filters/thousands';

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

Vue.use(VueAxios, axios);
Vue.use(Toast, options);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('Loading', Loading);
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
  router,
  render: (h) => h(App),
}).$mount('#app');
