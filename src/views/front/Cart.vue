<template>
  <div class="cart">
    <loading :active.sync="isLoading" />
    <div class="container">
      <div v-if="!cart[0]" class="d-flex justify-content-center">
        <div>
          <h2>您的購物車沒有商品唷，請回商品頁面選購吧～</h2>
          <router-link to="/products"
            class="text-dark mt-5 mt-3 h5">
            <i class="fas fa-chevron-left mr-2"></i>
            繼續購物
          </router-link>
        </div>
      </div>
      <div class="mt-3" v-else>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <ProgressBar></ProgressBar>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-8">
            <b-table-simple hover responsive fixed>
              <b-thead>
                <b-tr>
                  <b-th class="border-0 pl-0">產品名稱</b-th>
                  <b-th class="border-0">購買數量</b-th>
                  <b-th class="border-0">產品價格</b-th>
                  <b-th class="border-0">刪除商品</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr class="border-bottom border-top" v-for="(item, i) in cart" :key="i">
                  <b-th class="border-0 px-0 font-weight-normal py-4">
                    <img
                      :src="item.product.imageUrl[0]"
                      :alt="item.product.title"
                      style="width: 50px; height: 50px; object-fit: cover;"
                    />
                    <p class="mb-0 font-weight-bold ml-3 d-inline-block">
                      {{ item.product.title }}
                    </p>
                  </b-th>
                  <b-td class="border-0 align-middle" style="max-width: 160px;">
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
                  </b-td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ml-auto">{{ item.product.price | thousands }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <b-button variant="outline-dark"
                      @click="removeCartItem(item.product.id)">
                      <b-icon icon="x-circle"></b-icon>
                    </b-button>
                  </td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="font-weight-bold mb-4">詳細訂單內容</h4>
              <b-table-simple class="text-muted border-bottom">
                <b-tbody>
                  <b-tr v-for="(item, i) in cart" :key="i">
                    <b-th class="border-0 px-0 pt-4 font-weight-normal">
                      {{ item.quantity }} {{ item.product.unit }}
                    </b-th>
                    <b-td class="text-right border-0 px-0 pt-4">
                      {{ item.product.price * item.quantity | thousands }}
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold">
                  {{ updateCartTotal | thousands }}
                </p>
              </div>
              <router-link to="/order" class="btn btn-dark btn-block mt-4">
                結帳去
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ProgressBar from '@/components/front/ProgressBar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    ProgressBar,
    Footer,
  },
  data() {
    return {
      cart: [],
      isLoading: false,
      cartTotal: 0,
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
          this.$toast.error('出了點問題，請再試一次。');
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
          this.$toast.error('出了點問題，請再試一次。');
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
          this.$toast.success('已刪除商品～');
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.error('出了點問題，請再試一次。');
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
          this.$toast.success('已更新商品數量～');
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
  },
};
</script>
