<template>
  <div class="footer">
    <div class="bg-light py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between
          align-items-md-center align-items-start"
        >
          <p class="mb-0 font-weight-bold">歡迎訂閱電子報可獲得折扣碼，並可得到更多最新資訊。</p>
          <validation-provider
            v-slot="{ errors, classes }"
            class="input-group w-md-50 mt-md-0 mt-0"
            rules="email"
          >
            <input
              name="email"
              type="email"
              v-model="email"
              :class="classes"
              class="form-control rounded-0"
              placeholder="請輸入 Email"
            />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search"
                @click="showCouponCode">
                訂閱
              </button>
              <span class="text-danger" style="padding-left: 8px;">{{ errors[0] }}</span>
            </div>
          </validation-provider>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-2">
          <router-link to="/">
            <a class="footer-logo" href="#">House of Card</a>
          </router-link>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3" @click="linkToFaceBook">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white mx-3" @click="linkToGitHub">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="tel:02-3456-7890" class="text-white mx-3">
                <i class="fas fa-phone"></i>
              </a>
            </li>
            <li>
              <a href="mailto:bucky0112@gmail.com" class="text-white ml-3">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    linkToGitHub() {
      window.location.href = 'https://github.com/bucky0112';
    },
    linkToFaceBook() {
      window.location.href = 'https://www.facebook.com/timmychu0112';
    },
    showCouponCode() {
      if (this.email) {
        this.$toast.success('優惠券代碼：newhoc8', {
          position: 'top-center',
          timeout: 10000,
        });
      } else {
        this.$toast.error('出了點問題，請再試一次。');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-logo {
  background-image: url("~@/assets/hoc_logo.png");
  display: inline-block;
  background-size: 100px 100px;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  overflow: hidden;
  text-indent: 105%;
  white-space: nowrap;
  padding: 5% 5%;
}
</style>
