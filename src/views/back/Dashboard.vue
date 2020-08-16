<template>
  <div>
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
