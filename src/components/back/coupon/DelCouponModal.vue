<template>
  <div>
    <b-modal
      id="delCouponModal"
      v-model="show"
      title="刪除優惠券"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <p>
          確定刪除
          {{ tempCoupon.title }}
          (刪除後將無法恢復)?
        </p>
      </b-container>
      <template v-slot:modal-footer>
        <b-button type="button" variant="danger" @click="delCoupon">確認刪除</b-button>
        <b-button
          type="button"
          variant="outline-secondary"
          @click="$bvModal.hide('delCouponModal')"
        >取消</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Toast from '@/plugins/Toast';

export default {
  data() {
    return {
      show: false,
      variants: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'light',
        'dark',
      ],
      headerBgVariant: 'danger',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark',
    };
  },
  props: ['tempCoupon'],
  methods: {
    delCoupon() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.axios.delete(url).then(() => {
        this.$emit('update'); // 重新取得全部資料
        this.isLoading = false;
        this.$bvModal.hide('delCouponModal'); // 刪除後關閉 modal
        Toast.fire({
          title: '資料刪除成功',
          icon: 'success',
        });
      })
        .catch(() => {
          this.$bvModal.hide('delCouponModal');
        });
    },
  },
};
</script>
