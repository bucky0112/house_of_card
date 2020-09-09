<template>
  <div>
    <b-modal
      id="orderModal"
      title="客戶資料"
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
            <ul>
              <li>Email: {{ order.user.email }}</li>
              <li>收件人姓名： {{ order.user.name }}</li>
              <li>收件人電話： {{ order.user.tel }}</li>
              <li>收件人地址： {{ order.user.address }}</li>
            </ul>
          </div>
        </div>
      </b-container>
      <template v-slot:modal-footer>
        <b-button
          type="button"
          @click="$bvModal.hide('orderModal')"
          variant="outline-primary">確認</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Toast from '@/plugins/Toast';

export default {
  data() {
    return {
      order: {
        user: {},
      },
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
  methods: {
    getOrder(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`;
      this.axios
        .get(api)
        .then((res) => {
          this.order = res.data.data;
          this.$bvModal.show('orderModal');
        })
        .catch(() => {
          Toast.fire({
            title: '目前遇到錯誤，請再試一次。',
            icon: 'error',
          });
        });
    },
  },
};
</script>
