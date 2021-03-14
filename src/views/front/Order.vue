<template>
  <div class="order pt-4" style="background-color: #F8F9FA;">
    <b-container style="margin-top: 100px;">
      <b-row class="justify-content-center mb-5">
        <b-col cols="8">
          <step-progress :steps="mySteps" :current-step="currentStep"
          icon-class="fa fa-check" active-color="#53B883" :line-thickness="linethickness"/>
        </b-col>
      </b-row>
      <b-row class="flex-row-reverse pb-5">
        <b-col md="5" class="border p-4 mb-4" style="height: 100%;">
          <b-table-simple responsive small borderless fixed hover>
            <b-tbody>
              <b-tr v-for="(item, i) in cart" :key="i">
                <b-th class="pt-3">
                  <img
                    :src="item.product.imageUrl[0]"
                    :alt="item.product.title"
                    style="width: 40px; height: 40px; object-fit: cover;"
                  />
                  <p class="mb-0 font-weight-bold ml-3 d-inline-block">{{ item.product.title }}</p>
                </b-th>
                <b-td>
                  <p class="mb-0 ml-auto p-4">x {{ item.quantity }} {{ item.product.unit }}</p>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-table-simple small class="table mt-4 border-top border-bottom">
            <b-tbody>
              <b-tr v-if="!coupon.enabled">
                <b-th class="text-left border-0 px-0 pt-4">總計</b-th>
                <b-td class="text-right border-0 px-0 pt-4">
                  <p class="mb-0 h4 font-weight-bold">
                    {{ updateCartTotal | thousands }}
                  </p>
                </b-td>
              </b-tr>
              <b-tr v-else>
                <b-th class="text-left border-0 px-0 pt-4">折扣後總計</b-th>
                <b-td class="text-right border-0 px-0 pt-0 pt-4">
                  <p class="mb-0 h4 font-weight-bold">
                    {{ updateCartTotal - discountNum | thousands }}
                  </p>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-input-group class="mt-3">
            <b-form-input type="text" placeholder="請輸入優惠碼" v-model="couponCode">
            </b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="useCoupon">使用優惠碼</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
        <b-col md="7">
          <validation-observer v-slot="{ invalid }">
            <b-form @submit.prevent="createOrder">
              <b-form-group>
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="username" style="display: block; text-align: left;">
                    訂購人姓名
                    <b-badge pill variant="danger">必填</b-badge>
                  </label>
                  <input
                    id="username"
                    v-model="form.name"
                    name="訂購人姓名"
                    type="text"
                    class="form-control"
                    :class="classes"
                    placeholder="請輸入訂購人姓名"
                  />
                  <span v-if="errors[0]"
                    class="text-danger"
                    style="display: block; text-align: left;"
                  >{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
              <b-form-group>
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="email" style="display: block; text-align: left;">
                    Email
                    <b-badge pill variant="danger">必填</b-badge>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    name="Email"
                    type="email"
                    class="form-control"
                    :class="classes"
                    placeholder="請輸入 Email"
                  />
                  <span v-if="errors[0]"
                    style="display: block; text-align: left;"
                    class="text-danger"
                  >{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
              <b-form-group>
                <validation-provider v-slot="{ errors, classes }" rules="required|min:8">
                  <label for="tel" style="display: block; text-align: left;">
                    電話
                    <b-badge pill variant="danger">必填</b-badge>
                  </label>
                  <input
                    id="tel"
                    v-model="form.tel"
                    name="電話"
                    type="tel"
                    class="form-control"
                    placeholder="請輸入電話"
                    :class="classes"
                  />
                  <span v-if="errors[0]"
                    class="text-danger"
                    style="display: block; text-align: left;"
                  >{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
              <b-form-group>
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="address" style="display: block; text-align: left;">
                    地址
                    <b-badge pill variant="danger">必填</b-badge>
                  </label>
                  <input
                    id="address"
                    v-model="form.address"
                    name="地址"
                    type="text"
                    class="form-control"
                    :class="classes"
                    placeholder="請輸入地址"
                  />
                  <span v-if="errors[0]"
                    class="text-danger"
                    style="display: block; text-align: left;"
                  >{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
              <b-form-group>
                <label for="select" style="display: block; text-align: left;">
                  付款方式
                  <b-badge pill variant="danger">必選</b-badge>
                </label>
                <select v-model="form.payment" class="form-control" id="select" required>
                  <option value disabled>請選擇付款方式</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="CVS">CVS</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
              </b-form-group>
              <b-form-group>
                <label for="message" style="display: block; text-align: left;">留言</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  cols="30"
                  rows="3"
                  placeholder="有什麼需求嗎？歡迎留言告訴我們唷～"
                ></textarea>
              </b-form-group>
              <div
                class="d-flex flex-column-reverse flex-md-row mt-4
                justify-content-between align-items-md-center align-items-end"
              >
                <router-link class="text-dark mt-md-0 mt-3" to="/cart">
                  <i class="fas fa-chevron-left mr-2"></i> 回購物車
                </router-link>
                <div class="text-right">
                  <b-button type="submit" class="send_btn btn-dark py-3 px-7"
                    :class="{ disabled: invalid }"
                    :disabled="invalid">
                    送出訂單
                  </b-button>
                </div>
              </div>
            </b-form>
          </validation-observer>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      mySteps: ['購物車', '填寫資料', '確認訂單'],
      currentStep: 1,
      linethickness: 5,
      form: {
        name: '',
        emial: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      cart: [],
      coupon: {},
      couponCode: '',
    };
  },
  computed: {
    updateCartTotal() {
      // 第一次處理帶入初始值 0
      return this.cart.reduce(
        (accumulator, i) => accumulator + i.product.price * i.quantity,
        0,
      );
    },
    discountNum() {
      return Math.round(this.updateCartTotal * ((100 - this.coupon.percent) / 100));
    },
  },
  created() {
    this.getCart();
  },
  methods: {
    ...mapActions(['getCartNumber']),
    getCart() {
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      const loader = this.$loading.show();
      const order = { ...this.form };
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }
      this.axios
        .post(url, order)
        .then((res) => {
          this.getCartNumber();
          // this.$bus.$emit('updateCart');
          loader.hide();
          this.$toast.success('成功幫您建立訂單囉～');
          this.$router.push(`/checkout/${res.data.data.id}`);
        })
        .catch(() => {
          this.$toast.error('出現錯誤了，請再試一次。');
        });
    },
    useCoupon() {
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.axios
        .post(url, {
          code: this.couponCode,
        })
        .then((res) => {
          this.coupon = res.data.data;
          loader.hide();
          this.$toast.success('成功幫您使用折扣囉～');
        })
        .catch(() => {
          this.couponCode = '';
          loader.hide();
          this.$toast.error('請輸入正確的優惠碼。');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.send_btn {
  &.disabled {
    cursor: not-allowed;
  }
}
</style>
