<template>
  <div>
    <b-container class="auth">
      <div class="auth__header">
        <div class="auth__logo">
          <img height="90" src="@/assets/logo.png" alt="Vue logo" />
        </div>
      </div>
      <div class="auth__body">
        <b-form class="form-signin auth__form" autocomplete="off" @submit.prevent="signin">
          <div class="auth__form_body">
            <h1 class="h3 auth__form_title">使用者登入</h1>
            <div>
              <b-form-group
                class="text-uppercase small mb-3"
                label="Email"
                label-for="inputEmail"
              >
                <b-form-input
                  type="email"
                  id="inputEmail"
                  name="email"
                  class="form-control"
                  placeholder="請輸入 email"
                  required
                  autofocus
                  v-model="user.email"
                />
              </b-form-group>
              <b-form-group
                class="text-uppercase small"
                label="密碼"
                label-for="inputPassword"
              >
                <b-form-input
                  type="password"
                  id="inputPassword"
                  name="password"
                  class="form-control"
                  placeholder="請輸入密碼"
                  required
                  v-model="user.password"
                />
              </b-form-group>
            </div>
          </div>
          <div class="auth__form_actions">
            <b-button type="submit" variant="info" size="lg" class="btn-block">登入</b-button>
            <router-link to="/" style="text-decoration: none;">
              <b-button variant="dark" size="lg" class="btn-block mt-3">回首頁</b-button>
            </router-link>
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Toast from '@/plugins/Toast';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
      this.axios
        .post(api, this.user)
        .then((res) => {
          const { token } = res.data;
          const { expired } = res.data.expired;
          document.cookie = `token=${token};expires=${new Date(
            expired * 1000,
          )};`;
          this.$router.push('/admin/products');
          Toast.fire({
            title: '登入成功',
            icon: 'success',
          });
        })
        .catch(() => {
          Toast.fire({
            title: '帳號或密碼錯誤',
            icon: 'error',
          });
          this.user.email = '';
          this.user.password = '';
        });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto", sans-serif;
}
.auth {
  &__header {
    padding: 13vh 1rem calc(11vh + 35px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    background-image: linear-gradient(#3280e4, #584dc3);
    background-size: cover;
    background-position: center center;
    position: relative;
    box-shadow: 0 3px 5px rgba(#000, 0.3);
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  &__logo {
    position: relative;
    z-index: 18;
    background: #fff;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 2px 7px rgba(#000, 0.15);
    overflow: hidden;
  }
  &__body {
    padding-bottom: 2rem;
  }
  &__form {
    min-width: 280px;
    max-width: 340px;
    margin: auto;
    margin-top: -40px;
    padding: 0 10px;
    position: relative;
    z-index: 9;
    &_body {
      padding: 0.7rem 1.5rem 35px;
      border-radius: 0.5rem;
      background: #fff;
      border: 1px solid #eee;
      box-shadow: 0 4px 10px rgba(#000, 0.15);
    }
    &_title {
      font-size: 1.3rem;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }
    &_actions {
      text-align: center;
      padding: 0 2rem;
      margin-top: -25px;
      .btn {
        border-radius: 30px;
        box-shadow: 0 2px 12px rgba(#3280e4, 0.5);
      }
    }
  }
}
</style>
