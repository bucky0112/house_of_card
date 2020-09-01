<template>
  <div class="product">
    <div class="container" style="margin-top: 100px">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-muted">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="text-muted">全部商品</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row align-items-center">
        <div class="col-md-7">
          <b-img height="400" :src="product.imageUrl[0]" :alt="product.title"></b-img>
        </div>
        <div class="col-md-5">
          <h2 class="font-weight-bold h1 mb-5">{{ product.title }}</h2>
          <div v-if="product.origin_price">
            <p class="mb-0 text-muted text-right">
            <del>{{ product.origin_price | thousands }}</del>
            </p>
            <p class="h4 font-weight-bold text-right">售價： {{ product.price | thousands }}</p>
          </div>
          <div v-else>
            <p class="h4 font-weight-bold text-right">售價： {{ product.price | thousands }}</p>
          </div>
          <div class="d-flex align-items-center">
            <b-input-group class="my-3 mr-2 bg-light rounded">
              <template v-slot:prepend>
                <b-button
                  variant="outline-dark"
                  :disabled="cartNum <= 1"
                  @click="cartNum--">
                  <b-icon icon="dash-circle"></b-icon>
                </b-button>
              </template>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder
                min="1"
                v-model="cartNum"
              />
              <template v-slot:append>
                <b-button variant="outline-dark" @click="cartNum++">
                  <b-icon icon="plus-circle"></b-icon>
                </b-button>
              </template>
            </b-input-group>
            <a href="#" class="btn btn-dark btn-block py-2" @click.prevent="addToCart">
              <b-icon icon="cart-plus"></b-icon>
              加入購物車
            </a>
          </div>
        </div>
      </div>
      <b-row>
        <b-col class="mt-3">
          <p class="text-muted">
            {{ product.description }}
          </p></b-col>
        <b-col class="text-left" style="line-height: 2em;"><p>{{ product.content }}</p></b-col>
      </b-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue';

export default {
  name: 'Product',
  components: {
    Footer,
  },
  data() {
    return {
      product: {
        title: '',
        imageUrl: [],
        origin_price: 0,
        price: 0,
      },
      cartNum: 1,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const loader = this.$loading.show();
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.axios
        .get(url)
        .then((res) => {
          this.product = res.data.data;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    addToCart() {
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: this.product.id,
        quantity: this.cartNum,
      };
      this.axios
        .post(url, cart)
        .then(() => {
          this.$bus.$emit('updateCart');
          loader.hide();
          this.$toast.success('已加入購物車～');
        })
        .catch((err) => {
          loader.hide();
          this.$toast.error(`${err.response.data.errors}`);
        });
    },
  },
};
</script>
