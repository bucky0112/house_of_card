<template>
  <div>
    <b-navbar type="dark" variant="dark" toggleable="lg">
      <b-navbar-brand href="#" class="brand-link">
        House of Card
      </b-navbar-brand>
      <!-- 響應式用於管理<b-collapse is-nav>組件 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item>有包含 router-link 組件，提供一個 to 屬性值生成一個 <router-link> -->
          <b-nav-item href="#" to="/admin/products">產品列表</b-nav-item>
          <b-nav-item href="#" to="/admin/coupons">優惠券列表</b-nav-item>
          <b-nav-item href="#" to="/admin/order">訂單列表</b-nav-item>
          <b-nav-item href="#" to="/admin/imgstorage">圖片儲存列表</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button class="btn btn-danger" @click="logout">登出</b-button>
        </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['token'],
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/logout`;
      this.axios
        .post(api, {
          api_token: this.token,
        })
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style scoped lang="scss">
.brand-link {
  font-family: 'Honey Bear', cursive;
}
</style>
