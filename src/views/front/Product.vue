<template>
  <div class="product">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0">
          <li class="breadcrumb-item">
            <a class="text-muted" href="./index.html">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a class="text-muted" href="./product.html">Product</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </ol>
      </nav>
      <div class="row align-items-center">
        <div class="col-md-7">
          <b-img :src="product.imageUrl[0]" :alt="product.title"></b-img>
        </div>
        <div class="col-md-5">
          <h2 class="font-weight-bold h1 mb-1">{{ product.title }}</h2>
          <p class="mb-0 text-muted text-right">
            <del>{{ product.origin_price | thousands }}</del>
          </p>
          <p class="h4 font-weight-bold text-right">{{ product.price | thousands }}</p>
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
      <div class="row my-5">
        <div class="col-md-4">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor
          </p>
        </div>
      </div>
      <h3 class="font-weight-bold">Lorem ipsum dolor sit amet</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="#">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted">
                    <del>NT$1,200</del>
                  </span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="#">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted">
                    <del>NT$1,200</del>
                  </span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="#">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted">
                    <del>NT$1,200</del>
                  </span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="#">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted">
                    <del>NT$1,200</del>
                  </span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark"></a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="#">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted">
                    <del>NT$1,200</del>
                  </span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
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
  name: 'Product',
  components: {
    Footer,
  },
  data() {
    return {
      isLoading: false,
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
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.axios
        .get(url)
        .then((res) => {
          this.product = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    addToCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: this.product.id,
        quantity: this.cartNum,
      };
      this.axios
        .post(url, cart)
        .then(() => {
          this.$bus.$emit('updateCart');
          this.isLoading = false;
          this.$toast.success('已加入購物車～');
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(`${err.response.data.errors}`);
        });
    },
  },
};
</script>
