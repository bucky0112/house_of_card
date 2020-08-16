<template>
  <div>
    <b-modal
      id="deleteImageModal"
      v-model="show"
      title="刪除圖片"
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
          <img :src="tempImgStorage.path" width="100px" alt="">
          (刪除後將無法恢復)?
        </p>
      </b-container>
      <template v-slot:modal-footer>
        <b-button type="button" variant="danger" @click="delImage">確認刪除</b-button>
        <b-button
          type="button"
          variant="outline-secondary"
          @click="$bvModal.hide('deleteImageModal')"
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
  props: ['tempImgStorage'],
  methods: {
    delImage() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${this.tempImgStorage.id}`;
      this.isLoading = true;
      this.axios.delete(url).then(() => {
        this.$emit('update'); // 重新取得全部資料
        this.isLoading = false;
        this.$bvModal.hide('deleteImageModal'); // 刪除後關閉 modal
        Toast.fire({
          title: '刪除圖片成功',
          icon: 'success',
        });
      })
        .catch(() => {
          this.$bvModal.hide('deleteImageModal');
        });
    },
  },
};
</script>
