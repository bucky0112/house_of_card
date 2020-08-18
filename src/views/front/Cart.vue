<template>
  <div>
    <loading :active.sync="isLoading" />
    <div class="container">
      <div class="mt-3">
        <h3 class="mt-3 mb-4">購物車</h3>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 pl-0">產品名稱</th>
                  <th scope="col" class="border-0">購買數量</th>
                  <th scope="col" class="border-0">產品價格</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="(item, i) in cart" :key="i">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img
                      :src="item.product.imageUrl[0]"
                      :alt="item.product.title"
                      style="width: 50px; height: 50px; object-fit: cover;"
                    />
                    <p class="mb-0 font-weight-bold ml-3 d-inline-block">
                      {{ item.product.title }}
                    </p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <b-input-group class="my-3 mr-2 bg-light rounded">
                      <template v-slot:prepend>
                        <b-button
                          variant="outline-dark"
                          :disabled="item.quantity <= 1"
                          @click="updateQuantity(item.product.id, item.quantity - 1)"
                        >
                          <b-icon icon="dash-circle"></b-icon>
                        </b-button>
                      </template>
                      <b-form-input
                        type="text"
                        class="form-control border-0 text-center my-auto shadow-none bg-light"
                        min="1"
                        v-model="item.quantity"
                      />
                      <template v-slot:append>
                        <b-button
                          variant="outline-dark"
                          @click="updateQuantity(item.product.id, item.quantity + 1)"
                        >
                          <b-icon icon="plus-circle"></b-icon>
                        </b-button>
                      </template>
                    </b-input-group>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ml-auto">{{ item.product.price * item.quantity | thousands }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <b-button variant="outline-dark"
                      @click="removeCartItem(item.product.id)">
                      <b-icon icon="x-circle"></b-icon>
                    </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="font-weight-bold mb-4">詳細訂單內容</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">全部金額</th>
                    <td class="text-right border-0 px-0 pt-4">{{ updateCartTotal | thousands }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">
                      <label for="input-coupon">優惠碼</label>
                    </th>
                    <td class="text-right border-0 px-0 pt-0 pb-4">
                      <b-input-group>
                        <b-form-input
                          type="text"
                          id="input-coupon"
                          v-model="couponCode"
                          placeholder="請輸入優惠碼"/>
                      </b-input-group>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">Total</p>
                <p class="mb-0 h4 font-weight-bold">{{ updateCartTotal | thousands }}</p>
              </div>
              <a href="#" class="btn btn-info btn-block mt-4" @click.passive="useCoupon">使用優惠碼</a>
              <a href="#" class="btn btn-dark btn-block mt-4">結帳去</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      cart: [],
      isLoading: false,
      cartTotal: 0,
      coupon: {},
      couponCode: '',
    };
  },
  created() {
    this.getCart();
  },
  computed: {
    updateCartTotal() {
      // 第一次處理帶入初始值 0
      return this.cart.reduce((accumulator, i) => accumulator + i.product.price * i.quantity, 0);
    },
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    removeAllCartItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.axios
        .delete(url)
        .then(() => {
          this.isLoading = false;
          this.$bus.$emit('updateCart');
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios
        .delete(url)
        .then(() => {
          this.isLoading = false;
          this.$bus.$emit('updateCart');
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    updateQuantity(id, num) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      if (num <= 0) return;
      const data = {
        product: id,
        quantity: num,
      };
      this.axios
        .patch(url, data)
        .then(() => {
          this.isLoading = false;
          this.$bus.$emit('updateCart');
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    useCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.axios
        .post(url, {
          code: this.couponCode,
        })
        .then((res) => {
          this.coupon = res.data.data;
          console.log(this.coupon);
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
