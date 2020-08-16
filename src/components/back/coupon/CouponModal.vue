<template>
  <div>
    <Loading :active.sync="isLoading" />
    <b-modal
      id="couponModal"
      title="建立優惠券"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <div class="modal-body">
          <div>
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                id="title"
                class="form-control"
                placeholder="請輸入標題"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="form-group">
              <label for="couponCode">優惠碼</label>
              <input
                type="text"
                id="couponCode"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="tempCoupon.code"
              />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                type="number"
                id="price"
                class="form-control"
                placeholder="請輸入折扣百分比"
                v-model="tempCoupon.percent"
              />
            </div>
            <div class="form-group">
              <label for="dueDate">到期日</label>
              <input type="date" id="dueDate" class="form-control" v-model="dueDate" />
            </div>
            <div class="form-group">
              <label for="dueTime">到期時間</label>
              <input type="time" id="dueTime" class="form-control" step="1" v-model="dueTime" />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  id="enabled"
                  v-model="tempCoupon.enabled"
                  :true-value="true"
                  :false-value="false"
                  class="form-check-input"
                />
                <label for="enabled" class="form-check-label">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </b-container>
      <template v-slot:modal-footer>
        <b-button
          type="button"
          variant="outline-secondary"
          @click="$bvModal.hide('couponModal')"
        >取消</b-button>
        <b-button type="button" @click="updateCoupon" variant="outline-primary">確認</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Toast from '@/plugins/Toast';

export default {
  data() {
    return {
      tempCoupon: {
        title: '',
        percent: 100,
        deadline_at: 0,
        enabled: false,
        code: '',
      },
      dueDate: '',
      dueTime: '',
      isLoading: false,
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
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: '',
      footerTextVariant: 'dark',
    };
  },
  props: ['isNew'],
  methods: {
    getCoupon(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`;
      this.axios
        .get(api)
        .then((res) => {
          this.tempCoupon = res.data.data;
          // console.log(res); // eslint-disable-line
          const dedlineAt = this.tempCoupon.deadline.datetime.split(' ');
          [this.dueDate, this.dueTime] = dedlineAt;
          this.$bvModal.show('couponModal');
        })
        .catch(() => {
        });
    },
    updateCoupon() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      let httpMethod = 'post';
      let msg = '新增';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
        httpMethod = 'patch';
        msg = '修改';
      }
      this.tempCoupon.deadline_at = `${this.dueDate} ${this.dueTime}`;
      this.axios[httpMethod](api, this.tempCoupon)
        .then(() => {
          this.$bvModal.hide('couponModal');
          this.$emit('update');
          this.dueDate = '';
          this.dueTime = '';
          this.isLoading = false;
          Toast.fire({
            title: `優惠券${msg}成功`,
            icon: 'success',
          });
        })
        .catch(() => {
          this.$bvModal.hide('couponModal');
          this.isLoading = false;
        });
    },
  },
};
</script>
