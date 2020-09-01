<template>
  <div class="dashboard">
    <back-to-top>
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fas fa-arrow-circle-up"></i>
      </button>
    </back-to-top>
    <Navbar :token="token"></Navbar>
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
import Navbar from '@/components/back/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 取得 token 的 cookies
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      // 預設帶入 token
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`;
      this.axios
        .post(api, {
          api_token: this.token,
        })
        .then(() => {
          this.checkSuccess = true;
        })
        .catch(() => {
          // 如果沒有token就會回到登入頁面
          this.$router.push('/');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-to-top {
  width: 80px;
  height: 80px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 30px;
  line-height: 22px;
}
</style>
