<template>
  <div class="cart">
    <b-container style="margin-top: 100px;">
      <div class="d-flex justify-content-center" v-if="!cart[0]">
        <div style="margin-top: 100px; margin-bottom: 200px">
          <h2 class="mb-5">您的購物車沒有商品唷，請回商品頁面選購吧～</h2>
          <router-link to="/products"
            class="text-dark mt-5 mt-3 h5">
            <i class="far fa-arrow-alt-circle-left"></i>
            繼續購物
          </router-link>
        </div>
      </div>
      <b-container class="mt-3" v-else fluid>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <step-progress :steps="mySteps" :current-step="currentStep"
              icon-class="fa fa-check" active-color="#53B883" :line-thickness="linethickness"/>
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
                    <b-input-group class="bg-light rounded">
                      <template v-slot:prepend>
                        <b-button
                          variant="outline-dark"
                          :disabled="item.quantity <= 1"
                          @click="updateQuantity(item.product.id, item.quantity - 1)"
                          style="border: none; font-size: 20px;"
                        >
                          <i class="fas fa-minus-circle"></i>
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
                          style="border: none; font-size: 20px;"
                        >
                          <i class="fas fa-plus-circle"></i>
                        </b-button>
                      </template>
                    </b-input-group>
                  </b-td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ml-auto">
                      {{ item.product.price | thousands }}
                    </p>
                  </td>
                  <td class="border-0 align-middle">
                    <b-button variant="dark"
                      @click="removeCartItem(item.product.id)"
                    >
                      <i class="fas fa-trash-alt"></i>
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
                      {{ item.product.title }}
                      <span class="pl-3">x</span>
                    </b-th>
                    <b-th class="border-0 px-0 pt-4 font-weight-normal">
                      {{ item.quantity }} {{ item.product.unit }}
                    </b-th>
                    <b-td class="text-right border-0 px-0 pt-4" v-if="item.product.price">
                      {{ item.product.price * item.quantity | thousands }}
                    </b-td>
                    <b-td class="text-right border-0 px-0 pt-4" v-else>
                      {{ item.product.origin_price * item.quantity | thousands }}
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
      </b-container>
    </b-container>
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
      mySteps: ['購物車', '填寫資料', '確認訂單'],
      currentStep: 0,
      linethickness: 5,
      cartTotal: 0,
      cart: [],
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
    removeAllCartItem() {
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.axios
        .delete(url)
        .then(() => {
          loader.hide();
          this.$bus.$emit('updateCart');
          this.getCart();
        })
        .catch(() => {
          loader.hide();
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    removeCartItem(id) {
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios
        .delete(url)
        .then(() => {
          loader.hide();
          this.$bus.$emit('updateCart');
          this.getCart();
          this.$toast.success('已刪除商品～');
        })
        .catch(() => {
          loader.hide();
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    updateQuantity(id, num) {
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      if (num <= 0) return;
      const data = {
        product: id,
        quantity: num,
      };
      this.axios
        .patch(url, data)
        .then(() => {
          loader.hide();
          this.$bus.$emit('updateCart');
          this.getCart();
          this.$toast.success('已更新商品數量～');
        })
        .catch(() => {
          loader.hide();
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
  },
};
</script>
