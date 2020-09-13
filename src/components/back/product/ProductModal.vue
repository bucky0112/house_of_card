<template>
  <div>
    <b-modal
      id="productModal"
      size="xl"
      title="新增產品"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <div class="modal-body">
          <b-row>
            <b-col sm="4">
              <div class="form-group" v-for=" i in 3" :key="i + 'img'">
                <label :for="'img' + i">輸入圖片網址</label>
                <input
                type="text"
                :id="'img' + i"
                class="form-control"
                placeholder="請輸入圖片連結"
                v-model="tempProduct.imageUrl[i - 1]"
                />
              </div>
              <div class="form-group">
                <label for="customFile">
                  或 上傳圖片
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.fileUploading"
                  ></i>
                </label>
                <input
                  type="file"
                  ref="file"
                  id="customFile"
                  class="form-control"
                  @change="uploadFile"
                  />
              </div>
              <img alt class="img-fluid" :src="tempProduct.imageUrl[0]"/>
            </b-col>
            <b-col sm="8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                  required />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    type="text"
                    id="category"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    type="text"
                    id="unit"
                    class="form-control"
                    v-model="tempProduct.unit"
                    placeholder="請輸入單位" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    type="text"
                    id="origin_price"
                    class="form-control"
                    v-model="tempProduct.origin_price"
                    placeholder="請輸入原價" />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    type="text"
                    id="price"
                    class="form-control"
                    v-model="tempProduct.price"
                    placeholder="請輸入售價"/>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="game_player">建議遊戲人數</label>
                  <input
                    type="text"
                    id="game_player"
                    class="form-control"
                    v-model="tempProduct.options.game_player"
                    placeholder="請輸入遊戲人數" />
                </div>
                <div class="form-group col-md-6">
                  <label for="game_time">建議遊戲時間</label>
                  <input
                    type="text"
                    id="game_time"
                    class="form-control"
                    v-model="tempProduct.options.game_time"
                    placeholder="請輸入遊戲時間" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="player_age">建議遊戲年齡</label>
                  <input
                    type="text"
                    id="player_age"
                    class="form-control"
                    v-model="tempProduct.options.player_age"
                    placeholder="請輸入遊戲年齡" />
                </div>
                <div class="form-group col-md-6">
                  <label for="game_rating">BGG 評分</label>
                  <input
                    type="text"
                    id="game_rating"
                    class="form-control"
                    v-model="tempProduct.options.game_rating"
                    placeholder="請輸入 BGG 評分" />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <label for="description">產品說明</label>
                <textarea
                  id="description"
                  class="form-control"
                  type="text"
                  placeholder="請輸入產品說明"
                  v-model="tempProduct.description"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label for="content">產品描述</label>
                <vue-editor
                  id="content"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.content"
                  required
                />
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input
                    type="checkbox"
                    id="enabled"
                    v-model="tempProduct.enabled"
                    class="form-check-input" />
                  <label for="enabled" class="form-check-label">是否啟用</label>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <template v-slot:modal-footer>
        <b-button
          type="button"
          variant="outline-secondary"
          @click="$bvModal.hide('productModal')">取消
        </b-button>
        <b-button
          type="button"
          variant="outline-primary"
          @click="updateProduct">確認
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Toast from '@/plugins/Toast';
import { VueEditor } from 'vue2-editor/dist/vue2-editor.core';

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      // 暫存資料，要先定義 imageUrl
      tempProduct: {
        imageUrl: [],
        options: {},
      },
      // 上傳圖片的 icon
      status: {
        fileUploading: false,
      },
      show: false,
      variants: [
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
  // 判斷新增或是編輯
  props: ['isNew'],
  methods: {
    // 取得單一產品資料，傳入產品的 id
    getProduct(id) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.axios
        .get(api)
        .then((res) => {
          this.tempProduct = res.data.data;
          loader.hide();
          this.$bvModal.show('productModal');
          if (!this.tempProduct.options) {
            this.tempProduct.options = {};
          } else {
            this.options = this.tempProduct.options;
          }
        })
        .catch(() => {
          Toast.fire({
            title: '目前遇到錯誤，請再試一次。',
            icon: 'error',
          });
          loader.hide();
        });
    },
    // 上傳資料
    updateProduct() {
      const loader = this.$loading.show();
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';
      // 如果不是新增就切換編輯商品 api
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }
      this.axios[httpMethod](api, this.tempProduct)
        .then(() => {
          this.$emit('update'); // 重新取得全部產品資料
          this.$bvModal.hide('productModal');
          loader.hide();
          Toast.fire({
            title: '新增資料成功',
            icon: 'success',
          });
        })
        .catch(() => {
          this.$bvModal.hide('productModal');
          loader.hide();
          Toast.fire({
            title: '目前遇到錯誤，請再試一次。',
            icon: 'error',
          });
        });
    },
    // 上傳圖片
    uploadFile() {
      const loader = this.$loading.show();
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.status.fileUploading = true;
      this.axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          this.status.fileUploading = false;
          if (res.status === 200) {
            this.tempProduct.imageUrl.push(res.data.data.path);
            loader.hide();
          }
        })
        .catch(() => {
          loader.hide();
          Toast.fire({
            title: '檔案上傳失敗，請檢查檔案是否超過 2 MB',
            icon: 'error',
          });
          this.status.fileUploading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>
