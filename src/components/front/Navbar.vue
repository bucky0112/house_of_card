<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary" class="header" fixed="top">
      <b-navbar-brand href="#" to="/" class="brand-link">
        <h1>House of Card</h1>
      </b-navbar-brand>
      <!-- 響應式用於管理<b-collapse is-nav>組件 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="button-group ml-auto">
          <!-- <b-nav-item>有包含 router-link 組件，提供一個 to 屬性值生成一個 <router-link> -->
          <b-nav-item to="/" style="font-size: 20px;">
            <i class="fas fa-home pr-1"></i>首頁
          </b-nav-item>
          <b-nav-item to="/products" style="font-size: 20px">
            <i class="fas fa-dice pr-1"></i>商品一覽
          </b-nav-item>
          <b-nav-item to="/gameinfo" style="font-size: 20px">
            <i class="fas fa-dice-two pr-1"></i>認識桌遊
          </b-nav-item>
          <b-nav-item to="/about" style="font-size: 20px">
            <i class="fas fa-smile-wink pr-1"></i>關於我們
          </b-nav-item>
          <b-nav-item to="/login" style="font-size: 20px">
            <i class="fas fa-user-cog pr-1"></i>登入
          </b-nav-item>
          <b-nav-item href="#" to="/Cart" style="font-size: 20px">
            <i class="fas fa-shopping-cart"></i>
            <b-badge pill variant="danger" v-if="cart.length" class="cart_num">
              {{ cart.length }}
            </b-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('updateCart', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');

.brand-link h1{
  background-image: url("~@/assets/image/slide_logo.png");
  display: inline-block;
  background-size: 90px 44px;
  width: 90px;
  height: 44px;
  background-repeat: no-repeat;
  overflow: hidden;
  text-indent: 101%;
  white-space: nowrap;
  margin-top: 10px;
}
.button-group {
  font-size: 18px;
}
.cart_num {
  float: right;
  margin-top: -10px;
  @media screen and (max-width: 990px) {
    float: none;
    margin-top: 0;
  }
}
</style>
