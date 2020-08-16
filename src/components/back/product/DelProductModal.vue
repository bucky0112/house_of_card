<template>
  <div>
    <b-modal
      id="delProduct"
      v-model="show"
      title="刪除產品"
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
          {{ tempProduct.title }}
          (刪除後將無法恢復)?
        </p>
      </b-container>
      <template v-slot:modal-footer>
        <b-button type="button" variant="danger" @click="delProduct">確認刪除</b-button>
        <b-button
          type="button"
          variant="outline-secondary"
          @click="$bvModal.hide('delProduct')"
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
  props: ['tempProduct'],
  methods: {
    delProduct() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.axios.delete(url).then(() => {
        this.$bvModal.hide('delProduct'); // 刪除後關閉 modal
        this.$emit('update'); // 重新取得全部資料
        Toast.fire({
          title: '刪除資料成功',
          icon: 'success',
        });
      });
    },
  },
};
</script>
