import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buyItemNumber: null,
  },
  mutations: {
    setCartNumber(state, payload) {
      state.buyItemNumber = payload;
    },
  },
  actions: {
    // ************拿到購物車裡的商品數量****************
    getCartNumber(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      axios.get(url).then((res) => {
        context.commit('setCartNumber', res.data.data);
      });
    },
  },
  modules: {
  },
});
