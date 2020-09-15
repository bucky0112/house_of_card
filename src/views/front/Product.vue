<template>
  <div class="product">
    <b-container style="margin-top: 100px">
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
      <b-row class="align-items-center">
        <b-col md="6">
          <b-img height="400" fluid :src="product.imageUrl[0]" :alt="product.title"/>
        </b-col>
        <b-col md="6">
          <h2 class="font-weight-bold h1 mb-5 text-left">{{ product.title }}</h2>
          <b-container class="mb-4" fluid>
            <b-row class="text-left mb-5">
              <!-- hover 時顯示資訊 -->
              <b-col
                v-b-popover.hover.top="`${product.options.game_rating} / 10`"
                title="BGG 評分"
              >
                <i class="fas fa-star pr-1" style="font-size: 1.5rem;"></i>
                <!-- 評分 -->
                {{ product.options.game_rating }}
              </b-col>
              <b-col
                v-b-popover.hover.top="`${product.options.game_player} 名玩家`"
                title="支援遊戲人數"
              >
                <i class="fas fa-user-friends pr-1" style="font-size: 1.5rem;"></i>
                <!-- 人數 -->
                {{ product.options.game_player }} 人
              </b-col>
            </b-row>
            <b-row class="text-left">
              <b-col
                v-b-popover.hover.top="`約 ${product.options.game_time} 分鐘`"
                title="遊戲時間"
              >
                <i class="fas fa-clock pr-1" style="font-size: 1.5rem;"></i>
                <!-- 時間 -->
                {{ product.options.game_time }} 分鐘
              </b-col>
              <b-col
                v-b-popover.hover.top="`${product.options.player_age}`"
                title="建議遊戲年齡"
              >
                <i class="fas fa-child pr-1" style="font-size: 1.5rem;"></i>
                <!-- 年齡 -->
                {{ product.options.player_age }}
              </b-col>
            </b-row>
          </b-container>
          <div v-if="product.origin_price">
            <p class="mb-0 text-muted text-right">
            <del style="color: red;">原價 {{ product.origin_price | thousands }}</del>
            </p>
            <p class="h4 font-weight-bold text-right">
              特價： {{ product.price | thousands }}
            </p>
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
                  @click="cartNum--"
                  style="border: none;"
                >
                  <i class="fas fa-minus-circle"></i>
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
                <b-button
                  variant="outline-dark"
                  @click="cartNum++"
                  style="border: none;"
                >
                  <i class="fas fa-plus-circle"></i>
                </b-button>
              </template>
            </b-input-group>
            <a href="#" class="btn btn-dark btn-block align-items-center"
              @click.prevent="addToCart">
              <i class="fas fa-cart-plus"></i>
              加入購物車
            </a>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-3" md="6">
          <p data-aos="fade-up" data-aos-duration="3000">
            {{ product.description }}
          </p>
          <b-container fluid>
            <b-row>
              <b-col @click="showFirst" style="cursor: pointer;">
                <b-img thumbnail fluid :src="product.imageUrl[1]" style="height: 100px"/>
              </b-col>
              <b-col @click="showSecond" style="cursor: pointer;">
                <b-img thumbnail fluid :src="product.imageUrl[2]" style="height: 100px"/>
              </b-col>
            </b-row>
          </b-container>
          <vue-easy-lightbox
            escDisabled
            moveDisabled
            :visible="visible"
            :imgs="imgs"
            @hide="handleHide"
          ></vue-easy-lightbox>
        </b-col>
        <b-col md="6"
          class="text-left mt-3"
          v-html="product.content"
          style="line-height: 2em;"
        >
        </b-col>
      </b-row>
    </b-container>
    <Footer class="mt-3"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  components: {
    Footer,
    VueEasyLightbox,
  },
  data() {
    return {
      product: {
        title: '',
        imageUrl: [],
        origin_price: 0,
        price: 0,
        options: {
          game_rating: '',
          game_player: '',
          game_time: '',
          player_age: '',
        },
      },
      cartNum: 1,
      imgs: '',
      visible: false,
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
      if (this.cartNum <= 0) {
        loader.hide();
        this.$toast.error('請輸入正確數字。');
        this.cartNum = 1;
      } else {
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
      }
    },
    showFirst() {
      this.imgs = `${this.product.imageUrl[1]}`;
      this.show();
    },
    showSecond() {
      this.imgs = `${this.product.imageUrl[2]}`;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
